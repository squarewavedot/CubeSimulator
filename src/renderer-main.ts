import Stats = require('stats.js');
import THREE = require('three');
import {LedScreen} from "./LedScreen";
import {CustomCamera} from "./CustomCamera";
import protobuf = require("protobufjs");
import protos = require("./model");
import DAT = require('dat.gui');
import net = require('net');
import CG = require('./CustomGamepad');
import GC = require('./GamepadConverter');
import cobs = require('cobs');


protobuf.load('./matrixserver.proto');
let my_x = new protos.matrixserver.ScreenData();
my_x.encoding = protos.matrixserver.ScreenData.Encoding.default;
var OrbitControls = require('three-orbit-controls')(THREE);
var bsplit = require('buffer-split');
var gamepads = new Map<number,CG.CustomGamepad>();
var gamepad_converters = new Map<number,GC.GamepadConverter>();

var send_message = new protos.matrixserver.MatrixServerMessage();

function gamepadHandler(event, connecting) {
  var gamepad = event.gamepad;
  // Note:
  gamepad === navigator.getGamepads()[gamepad.index]

  if (connecting) {
    var new_custom_gamepad = new CG.CustomGamepad(gamepad);
    gamepads.set(gamepad.index, new_custom_gamepad);
    gamepad_converters.set(gamepad.index, new GC.GamepadConverter(new_custom_gamepad));
    console.log("Gamepad connected from index %d: %s",gamepad.index, gamepad.id);
  } else {
    delete gamepads[gamepad.index];
    delete gamepad_converters[gamepad.index];
    console.log("Gamepad disconnected from index %d: %s",
    gamepad.index, gamepad.id);
  }
}



function gamepad_loop(){
    for (let [k, gamepad] of gamepads) {
        gamepad.update_gamepad();
    }
    while(send_message.joystickData.length > 0) {
        send_message.joystickData.pop();
    }
    var data_changed = false;
    for (let [k, gamepad] of gamepad_converters) {
        if(gamepad.get_changed_state()){
            send_message.joystickData.push(gamepad.get_gamepad_data());
            data_changed = true;
        }
    }
    if(data_changed){
        send_proto_message(send_message);
    }

}
setInterval(gamepad_loop,1000/50);



window.addEventListener("gamepadconnected", function(e) { gamepadHandler(e, true); }, false);
window.addEventListener("gamepaddisconnected", function(e) { gamepadHandler(e, false); }, false);


var scene;
var camera : CustomCamera;
var camera_2 : CustomCamera;
var renderer: THREE.WebGLRenderer;
var displaystyle: string;
var camera_display_settings = get_camera_display_settings();


var screen_pixels_width = 64;
var screen_pixels_height = 64;
var screen_width = 300;
var screen_height = 300;


var inner_cube_geometry = new THREE.BoxGeometry(1, 1, 1 );
var inner_cube_material = new THREE.MeshBasicMaterial( {color: 0x000000} );
var inner_cube = new THREE.Mesh( inner_cube_geometry, inner_cube_material );
inner_cube.visible = false;


var port = 1337

var cube_options = {
    cube_border: 5
}

var flat_options = {
    flat_gap_col: 20,
    flat_gap_row: 20,
    flat_col_count: 3,
    flat_row_count: 2
}

var stats: Stats;
var screens: Array<LedScreen>;
var screen_count = 6;
var gui: DAT.GUI;






init();
animate();

function init() {
    setupStatistics();
    setupScene();
    setupRenderer();
    camera = new CustomCamera(renderer, false);
    camera_2 = new CustomCamera(renderer, true);
    displaystyle = 'Single';
    setupGUI();
    window.addEventListener('resize', onWindowResize, false);
}

function setupGUI() {
    gui = new DAT.GUI();
    var param = {
        'Screen display type': 0,
        'Camera': 0,
        'Displaystyle':0,
        'Reset Camera': function () {
            camera.reset();
            camera_2.reset();
        },
    };

    param = Object.assign({}, param, cube_options);
    param = Object.assign({}, param, flat_options);

    gui.add(param, 'Screen display type', {'Cube': 0, 'Single Screens': 1}).onChange(function (val) {
        switch (val) {
            case '0':
                setScreenPositionsCube(screens, cube_options.cube_border);
                break;
            case '1':
                setScreenPositionsFlat(
                    flat_options.flat_row_count,
                    flat_options.flat_col_count,
                    flat_options.flat_gap_row,
                    flat_options.flat_gap_col,
                    screens);
                break;
        }
    });

    var folder_cube = gui.addFolder('Cube Options');
    folder_cube.add(param, 'cube_border', 0, 50, 1).onChange(function (val) {
        cube_options.cube_border = val;
        if (param["Screen display type"] != 1) {
            setScreenPositionsCube(screens, cube_options.cube_border);
        }
    });

    var folder_flat = gui.addFolder('Flat Options');
    folder_flat.add(param, 'flat_row_count', 1, 10, 1).onChange(function (val) {
        flat_options.flat_row_count = val;
        if (param["Screen display type"] != 0) {
            setScreenPositionsFlat(flat_options.flat_row_count, flat_options.flat_col_count, flat_options.flat_gap_row, flat_options.flat_gap_col, screens);
        }
    });
    folder_flat.add(param, 'flat_col_count', 1, 10, 1).onChange(function (val) {
        flat_options.flat_col_count = val;
        if (param["Screen display type"] != 0) {
            setScreenPositionsFlat(flat_options.flat_row_count, flat_options.flat_col_count, flat_options.flat_gap_row, flat_options.flat_gap_col, screens);
        }
    });
    folder_flat.add(param, 'flat_gap_row', 0, 1000, 1).onChange(function (val) {
        flat_options.flat_gap_row = val;
        if (param["Screen display type"] != 0) {
            setScreenPositionsFlat(flat_options.flat_row_count, flat_options.flat_col_count, flat_options.flat_gap_row, flat_options.flat_gap_col, screens);
        }
    });
    folder_flat.add(param, 'flat_gap_col', 0, 1000, 1).onChange(function (val) {
        flat_options.flat_gap_col = val;
        if (param["Screen display type"] != 0) {
            setScreenPositionsFlat(flat_options.flat_row_count, flat_options.flat_col_count, flat_options.flat_gap_row, flat_options.flat_gap_col, screens);
        }
    });

    gui.add(param, 'Camera', {'Perspective': 0, 'Orthogonal': 1}).onChange(function (val) {
        switch (val) {
            case '0':
                camera.switch_to_perspective();
                camera_2.switch_to_perspective();
                break;
            case '1':
                camera.switch_to_ortho();
                camera_2.switch_to_ortho();
                break;
        }
        reset_window_sizes();
    });

    gui.add(param, 'Displaystyle', {'Single': 0, 'Splitscreen': 1, 'Backdrop': 2}).onChange(function (val) {
        //update display setting (viewport,scissor)
        switch (val) {
            case '0':
                displaystyle = 'Single';
                break;
            case '1':
                displaystyle = 'Splitscreen';
                break;
            case '2':
                displaystyle = 'Backdrop';
                break;
        }
        camera_display_settings = get_camera_display_settings();
        reset_window_sizes();
    });

    gui.add(param, 'Reset Camera');
}


function setupStatistics() {
    stats = new Stats();
    document.body.appendChild(stats.dom);
    stats.showPanel(0);
}

function setupScene() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color( 0x20252f );
    screens = [];
    let y_offset = 13
    for (let i = 0; i < screen_count; i++) {
        screens.push(new LedScreen(screen_pixels_height, screen_pixels_width, new THREE.PlaneBufferGeometry(screen_width, screen_height, 1, 1)));
    }
    setScreenPositionsCube(screens, cube_options.cube_border);

    screens.forEach(screen => {
        screen.fill_texture_random(0, 150, 255);
        scene.add(screen.mesh);
    });
    scene.add(inner_cube);
}

function setScreenPositionsFlat(rows: number, columns: number, gap_row: number, gap_col: number, screens: Array<LedScreen>) {
    resetScreens(screens);
    let screen_width = Math.max.apply(Math, screens.map(function (o) {
        return o.width;
    }))
    let screen_height = Math.max.apply(Math, screens.map(function (o) {
        return o.height;
    }))
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < columns; col++) {
            let current_screen = columns * row + col;
            if (current_screen >= screens.length) {
                break;
            }
            screens[current_screen].mesh.position.x = (screen_width + gap_col) * col;
            screens[current_screen].mesh.position.y = (screen_height + gap_row) * row;
            screens[current_screen].mesh.translateX(-(columns - 1) * (screen_width + gap_col) / 2.0);
            screens[current_screen].mesh.translateY(-(rows - 1) * (screen_height + gap_row) / 2.0);
            screens[current_screen].mesh.rotateOnAxis(new THREE.Vector3(0, 0, 1), Math.PI * 1.5);
        }
    }
}

function resetScreens(screens: Array<LedScreen>) {
    screens.forEach(screen => {
        screen.mesh.rotation.set(0, 0, 0);
        screen.mesh.position.set(0, 0, 0);
    });
    inner_cube.visible = false;
}

function setScreenPositionsCube(screens: Array<LedScreen>, border: number) {
    resetScreens(screens);
    let x_axis = new THREE.Vector3(1, 0, 0)
    let y_axis = new THREE.Vector3(0, 1, 0)
    let z_axis = new THREE.Vector3(0, 0, 1)

    let rotations = {
        5: {
            "rot_axis": x_axis,
            "angle": Math.PI * 0.5
        },
        0: {
            "rot_axis": y_axis,
            "angle": Math.PI * 0
        },
        1: {
            "rot_axis": y_axis,
            "angle": Math.PI * 0.5
        },
        3: {
            "rot_axis": y_axis,
            "angle": Math.PI * 1.5
        },
        4: {
            "rot_axis": x_axis,
            "angle": Math.PI * 1.5
        },
        2: {
            "rot_axis": y_axis,
            "angle": Math.PI * 1
        }
    }

    for (let i = 0; i < 6; i++) {
        if (i >= screens.length) {
            break;
        }
        screens[i].mesh.rotateOnAxis(rotations[i]['rot_axis'], rotations[i]['angle']);
        screens[i].mesh.rotateOnAxis(z_axis, Math.PI * 1.5);
        screens[i].mesh.translateOnAxis(new THREE.Vector3(0, 0, 1), screens[i].width / 2 + border);
    }
    inner_cube.scale.setScalar(screen_width + border*2 - 0.1);
    inner_cube.visible = true;
}


function setupRenderer() {
    renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setPixelRatio(1);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
}


function onWindowResize() {
    camera.do_window_resize(renderer);
    camera_2.do_window_resize(renderer);
    camera_display_settings = get_camera_display_settings();
    reset_window_sizes();
}


function reset_window_sizes(){
    var reset_size_camera_1 = camera_display_settings[displaystyle]['Camera_1']['Reset_Size'];
    var reset_size_camera_2 = camera_display_settings[displaystyle]['Camera_2']['Reset_Size'];
    camera.reset_window_size(reset_size_camera_1[0],reset_size_camera_1[1]);
    camera_2.reset_window_size(reset_size_camera_2[0],reset_size_camera_2[1]);
}

function animate() {
    stats.begin();
    requestAnimationFrame(animate);

    //console.log(gamepads.size);

    var camera_1_settings = camera_display_settings[displaystyle]['Camera_1'];
    var camera_2_settings = camera_display_settings[displaystyle]['Camera_2'];
    camera.update();
    renderer.setViewport( camera_1_settings['Viewport'][0], camera_1_settings['Viewport'][1], camera_1_settings['Viewport'][2] , camera_1_settings['Viewport'][3]);
    renderer.setScissor( camera_1_settings['Scissor'][0], camera_1_settings['Scissor'][1], camera_1_settings['Scissor'][2] , camera_1_settings['Scissor'][3]);
    renderer.render(scene, camera.get_current_camera());
    renderer.setScissorTest(true);
    if (displaystyle == 'Splitscreen' || displaystyle == 'Backdrop'){
        camera_2.update();
        renderer.setViewport( camera_2_settings['Viewport'][0], camera_2_settings['Viewport'][1], camera_2_settings['Viewport'][2] , camera_2_settings['Viewport'][3]);
        renderer.setScissor( camera_2_settings['Scissor'][0], camera_2_settings['Scissor'][1], camera_2_settings['Scissor'][2] , camera_2_settings['Scissor'][3]);
        renderer.setScissorTest(true);
        renderer.render(scene, camera_2.get_current_camera());
    }
    
    stats.end();
}

function get_camera_display_settings(){
    var camera_view_settings = {
        'Single' : {
            'Camera_1':{
                'Reset_Size': [window.innerWidth, window.innerHeight],
                'Viewport' : [0,0,window.innerWidth,window.innerHeight],
                'Scissor' : [0,0,window.innerWidth,window.innerHeight]
            },
            'Camera_2':{
                'Reset_Size': [window.innerWidth, window.innerHeight],
                'Viewport' : [0,0,window.innerWidth,window.innerHeight],
                'Scissor' : [0,0,window.innerWidth,window.innerHeight]
            }
        },
        'Splitscreen' : {
            'Camera_1':{
                'Reset_Size': [window.innerWidth/2,window.innerHeight],
                'Viewport' : [0,0,window.innerWidth/2 , window.innerHeight],
                'Scissor' : [0,0,window.innerWidth/2 , window.innerHeight]
            },
            'Camera_2':{
                'Reset_Size': [window.innerWidth/2,window.innerHeight],
                'Viewport' : [window.innerWidth/2, 0, window.innerWidth/2 , window.innerHeight],
                'Scissor' : [window.innerWidth/2, 0, window.innerWidth/2 , window.innerHeight]
            }
        },
        'Backdrop' : {
            'Camera_1':{
                'Reset_Size': [window.innerWidth, window.innerHeight],
                'Viewport' : [0,0,window.innerWidth,window.innerHeight],
                'Scissor' : [0,0,window.innerWidth,window.innerHeight]
            },
            'Camera_2':{
                'Reset_Size': [window.innerWidth/3,window.innerHeight/3],
                'Viewport' : [0,0,window.innerWidth/3 , window.innerHeight/3],
                'Scissor' : [0,0,window.innerWidth/3 , window.innerHeight/3]
            }
        }
    };
    return camera_view_settings; 
}

function cobsDecode(encodedData: Buffer) {
    let result = Buffer.allocUnsafe(encodedData.length);
    let readIndex = 0;
    let writeIndex = 0;
    while (readIndex < encodedData.length) {
        let code = encodedData[readIndex];
        readIndex++;
        for (let i = 1; i < code; i++) {
            result[writeIndex++] = encodedData[readIndex++];
        }
        if (code != 0xFF && readIndex != encodedData.length) {
            result[writeIndex++] = 0;
        }
    }
    let decodedData = result.slice(0, writeIndex - 1);
    return decodedData;
}

var connected_socket;

const server = net.createServer((c) => {
    connected_socket = c;
    console.log('server connected');
    c.on('end', () => {
        console.log('server disconnected');
    });

    let bufferSize = 150000;
    let receiveBuffer = Buffer.alloc(bufferSize);
    let curBufferWritePos = 0;

    c.on('data', (data) => {
        
        let findZero = data.indexOf(0x00);
        if (findZero != -1) {
            // console.log("found 0 in data at: " + findZero);
            data.copy(receiveBuffer, curBufferWritePos, 0, findZero);
            curBufferWritePos += findZero;
            let temp = receiveBuffer.slice(0, curBufferWritePos + 1);
            temp[temp.length-1] = 0;
            let message = cobsDecode(temp);
            // console.log("receiveBuffer around cutting point:");
            // console.log(receiveBuffer.slice(curBufferWritePos-10, curBufferWritePos + 1));
            // console.log(data.slice(data.length-10, data.length + 1));
            let newScreenData;
            try {
                newScreenData = protos.matrixserver.MatrixServerMessage.decode(message, message.length);
            }
            catch(e) {
                console.log(e);
            }
            if(typeof newScreenData != 'undefined'){
                newScreenData.screenData.forEach((value, index) => {
                    if(index < screens.length){
                        screens[index].data.set((<Uint8Array>value.frameData));
                        screens[index].invalidate();
                    }
                });
            }
            curBufferWritePos = 0;
            data.copy(receiveBuffer, curBufferWritePos, findZero + 1, data.length);
            curBufferWritePos += (data.length - (findZero + 1));
        } else if (data.length + curBufferWritePos < bufferSize) {
            data.copy(receiveBuffer, curBufferWritePos, 0, data.length);
            curBufferWritePos += data.length;
        } else {
            curBufferWritePos = 0; //reset buffer
        }
    });
});

server.on('error', (err) => {
    throw err;
});

server.listen(1337, () => {
    console.log('listening on port: ' + port.toString());
});

function send_proto_message(proto_message : protos.matrixserver.MatrixServerMessage){
    var data = cobs.encode(protos.matrixserver.MatrixServerMessage.encode(proto_message));
    console.log(data);
    try{
        connected_socket.send(data);
    }
    catch(err){
        //(console.log(err);
    }
}