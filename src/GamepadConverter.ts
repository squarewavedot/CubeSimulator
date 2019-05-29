import protobuf = require("protobufjs");
import protos = require("./model");
import CG = require('./CustomGamepad')

export class GamepadConverter{
        gamepad_data : protos.matrixserver.JoystickData;
        custom_gamepad : CG.CustomGamepad;
        gamepad_changed : boolean;
    constructor(gamepad : CG.CustomGamepad){
        this.gamepad_data = new protos.matrixserver.JoystickData();
        console.log(this.gamepad_data);
        this.custom_gamepad = gamepad;
        this.setup_event_listeners();
        this.gamepad_data.joystickID = this.custom_gamepad.get_gamepad_id();
        this.custom_gamepad.add_event_listener(CG.GamePadControl.SELECT,this.on_select);
        this.gamepad_changed = false;
    }

    setup_event_listeners(): void{
        //irgendwann find ich raus wie man alle Instanzen eines Enums bekommt
        //buttons rechts
        this.custom_gamepad.add_event_listener(CG.GamePadControl.A,this.on_gamepad_change);
        this.custom_gamepad.add_event_listener(CG.GamePadControl.B,this.on_gamepad_change);
        this.custom_gamepad.add_event_listener(CG.GamePadControl.X,this.on_gamepad_change);
        this.custom_gamepad.add_event_listener(CG.GamePadControl.Y,this.on_gamepad_change);
        //Sticks
        this.custom_gamepad.add_event_listener(CG.GamePadControl.RS,this.on_gamepad_change);
        this.custom_gamepad.add_event_listener(CG.GamePadControl.RSB,this.on_gamepad_change);
        this.custom_gamepad.add_event_listener(CG.GamePadControl.LS,this.on_gamepad_change);
        this.custom_gamepad.add_event_listener(CG.GamePadControl.LSB,this.on_gamepad_change);
        //Schultertasten
        this.custom_gamepad.add_event_listener(CG.GamePadControl.LB,this.on_gamepad_change);
        this.custom_gamepad.add_event_listener(CG.GamePadControl.RB,this.on_gamepad_change);
        this.custom_gamepad.add_event_listener(CG.GamePadControl.RT,this.on_gamepad_change);
        this.custom_gamepad.add_event_listener(CG.GamePadControl.LT,this.on_gamepad_change);
        //Dpad
        this.custom_gamepad.add_event_listener(CG.GamePadControl.DDOWN,this.on_gamepad_change);
        this.custom_gamepad.add_event_listener(CG.GamePadControl.DLEFT,this.on_gamepad_change);
        this.custom_gamepad.add_event_listener(CG.GamePadControl.DRIGHT,this.on_gamepad_change);
        this.custom_gamepad.add_event_listener(CG.GamePadControl.DUP,this.on_gamepad_change);
        //Start Select
        this.custom_gamepad.add_event_listener(CG.GamePadControl.START,this.on_gamepad_change);
        this.custom_gamepad.add_event_listener(CG.GamePadControl.SELECT,this.on_gamepad_change);
    }

    on_select = (gpc: CG.GamePadControl, value: any): void =>{
        console.log(this.gamepad_data.toJSON());
    }

    on_gamepad_change = (gpc: CG.GamePadControl, value: any) : void =>{
        switch(gpc){
            case CG.GamePadControl.A:
                this.gamepad_data.buttonA = Boolean(value);
                break;
            case CG.GamePadControl.B:
                this.gamepad_data.buttonB = Boolean(value);
                break;
            case CG.GamePadControl.X:
                this.gamepad_data.buttonX = Boolean(value);
                break;
            case CG.GamePadControl.Y:
                this.gamepad_data.buttonY = Boolean(value);
                break;
            case CG.GamePadControl.RB:
                this.gamepad_data.buttonR = Boolean(value);
                break;
            case CG.GamePadControl.LB:
                this.gamepad_data.buttonL = Boolean(value);
                break;
            case CG.GamePadControl.RT:
                this.gamepad_data.rightTrigger = value;
                break;
            case CG.GamePadControl.LT:
                this.gamepad_data.leftTrigger = value;
                break;
            case CG.GamePadControl.START:
                this.gamepad_data.buttonStart = Boolean(value);
                break;
            case CG.GamePadControl.SELECT:
                this.gamepad_data.buttonSelect = Boolean(value);
                break;
            case CG.GamePadControl.LS:
                this.gamepad_data.axisX = value.X;
                this.gamepad_data.axisY = value.Y;
                break;
            case CG.GamePadControl.RS:
                this.gamepad_data.rightAxisX = value.X;
                this.gamepad_data.rightAxisY = value.Y;
                break;
            case CG.GamePadControl.LSB:
                this.gamepad_data.leftStickButton = Boolean(value);
                break;
            case CG.GamePadControl.RSB:
                this.gamepad_data.rightStickButton = Boolean(value);
                break;
            case CG.GamePadControl.DDOWN:
                this.gamepad_data.buttonDpadDown = Boolean(value);
                break;
            case CG.GamePadControl.DLEFT:
                this.gamepad_data.buttonDpadLeft = Boolean(value);
                break;
            case CG.GamePadControl.DRIGHT:
                this.gamepad_data.buttonDpadRight = Boolean(value);
                break;
            case CG.GamePadControl.DUP:
                this.gamepad_data.buttonDpadUp = Boolean(value);
                break;
        }
        this.gamepad_changed = true;
    }

    get_changed_state () : boolean{
        return this.gamepad_changed;
    }

    get_gamepad_data () : protos.matrixserver.JoystickData{
        this.gamepad_changed = false;
        return this.gamepad_data;
    }
}