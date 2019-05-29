import THREE = require('three');
//import { OrbitControls } from 'three';
var OrbitControls = require('three-orbit-controls')(THREE);


export class CustomCamera{

    cameraControls_perspective : THREE.OrbitControls;
    cameraControls_ortho : THREE.OrbitControls;
    ortho_camera : THREE.OrthographicCamera;
    perspective_camera : THREE.PerspectiveCamera;
    is_back_camera : boolean;
    current_camera;
    
    constructor(renderer: THREE.WebGLRenderer, is_back_camera: boolean){
        this.is_back_camera = is_back_camera;

        if (!this.is_back_camera){
            this.ortho_camera = new THREE.OrthographicCamera(
                window.innerWidth / -2, window.innerWidth / 2,
                window.innerHeight / 2, window.innerHeight / -2, 1, 100000);
            this.ortho_camera.position.z = 1000;
            this.perspective_camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 10, 100000);
            this.perspective_camera.position.z = 1000;
        }
        else{
            this.ortho_camera = new THREE.OrthographicCamera(
                window.innerWidth / -2, window.innerWidth / 2,
                window.innerHeight / 2, window.innerHeight / -2, 1, 100000);
            this.ortho_camera.position.z = -1000;
            this.ortho_camera.lookAt(0,0,1)
            
            this.perspective_camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 10, 100000);
            this.perspective_camera.position.z = -1000;
            this.perspective_camera.lookAt(0,0,-1);
        }

        
        this.cameraControls_ortho = new OrbitControls(this.ortho_camera, renderer.domElement);
        this.cameraControls_ortho.enableDamping = true;
        this.cameraControls_ortho.dampingFactor = 0.07;
        this.cameraControls_ortho.rotateSpeed = 0.1;

        this.cameraControls_perspective = new OrbitControls(this.perspective_camera, renderer.domElement);
        this.cameraControls_perspective.enableDamping = true;
        this.cameraControls_perspective.dampingFactor = 0.07;
        this.cameraControls_perspective.rotateSpeed = 0.1;
        this.current_camera = this.perspective_camera

    }

    reset() : void{
        this.cameraControls_ortho.reset();
        this.cameraControls_perspective.reset();
    }

    get_current_camera() : THREE.Camera{
        return this.current_camera;
    }

    update() : void{
        this.cameraControls_ortho.update();
        this.cameraControls_perspective.update();
    }

    do_window_resize(renderer: THREE.WebGLRenderer) : void {
        this.current_camera.aspect = window.innerWidth / window.innerHeight;
        this.current_camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }

    reset_window_size(width: number, height: number){
        this.current_camera.aspect = width / height;
        if(this.current_camera instanceof THREE.OrthographicCamera){
            this.current_camera.left = width / -2;
            this.current_camera.right = width / 2;
            this.current_camera.top = height / 2;
            this.current_camera.bottom = height / -2;
        }
        if(this.current_camera instanceof THREE.PerspectiveCamera){
            this.current_camera.aspect = width / height;
        }
        this.current_camera.updateProjectionMatrix();
    }


    switch_to_ortho():void{
        this.current_camera = this.ortho_camera;
    }
    switch_to_perspective():void{
        this.current_camera = this.perspective_camera;
    }
}







