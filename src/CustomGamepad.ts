import { getPackedSettings } from "http2";
import { ConeGeometry } from "../node_modules/@types/three";
import { GamepadConverter } from "./GamepadConverter";

export enum GamePadControl {
    A = 'A',
    B = 'B',
    X = 'X',
    Y = 'Y',
    LB = 'LB',
    RB = 'RB',
    LT = 'LT',
    RT = 'RT',
    SELECT = 'SELECT',
    START = 'START',
    LS = 'LS',
    RS = 'RS',
    LSB = 'LSB',
    RSB = 'RSB',
    DUP = 'DUP',
    DDOWN = 'DDOWN',
    DLEFT = 'DLEFT',
    DRIGHT = 'DRIGHT',
    HOME = 'HOME'
}

export class Vector2D{
    public X : number;
    public Y : number;
    constructor(X : number, Y : number){
        this.X = X;
        this.Y = Y;
    }
}

export class GamepadValues{
    public value_map : Map<GamePadControl,any>;
    constructor(){
        this.value_map = new Map<GamePadControl, any>();
        this.reset_to_zero();
    }

    reset_to_zero (): void{
        this.value_map.set(GamePadControl.A,0.0);
        this.value_map.set(GamePadControl.B,0.0);
        this.value_map.set(GamePadControl.X,0.0);
        this.value_map.set(GamePadControl.Y,0.0);
        this.value_map.set(GamePadControl.LB,0.0);
        this.value_map.set(GamePadControl.LT,0.0);
        this.value_map.set(GamePadControl.RB,0.0);
        this.value_map.set(GamePadControl.RT,0.0);
        this.value_map.set(GamePadControl.LSB,0.0);
        this.value_map.set(GamePadControl.RSB,0.0);
        this.value_map.set(GamePadControl.DDOWN,0.0);
        this.value_map.set(GamePadControl.DLEFT,0.0);
        this.value_map.set(GamePadControl.DRIGHT,0.0);
        this.value_map.set(GamePadControl.DUP,0.0);
        this.value_map.set(GamePadControl.SELECT,0.0);
        this.value_map.set(GamePadControl.START,0.0);
        this.value_map.set(GamePadControl.HOME,0.0);
        this.value_map.set(GamePadControl.LS,new Vector2D(0.0,0.0));
        this.value_map.set(GamePadControl.RS,new Vector2D(0.0,0.0));
    }
}

export class CustomGamepad{
    gamepad : Gamepad;
    gamepad_state : GamepadValues;
    gamepad_state_change : GamepadValues;
    gamepad_event_listeners : GamepadValues;
    constructor(gamepad : Gamepad){
        this.gamepad = gamepad;
        this.gamepad_state = new GamepadValues();
        this.gamepad_state_change = new GamepadValues();
        this.gamepad_event_listeners = new GamepadValues();
        this.initialize_event_listeners();
    }

    private initialize_event_listeners(){
        for (let [key, value] of this.gamepad_event_listeners.value_map) {
            this.gamepad_event_listeners.value_map.set(key , new Array<(gpc: GamePadControl, value: any) => void>());
        }     
    }

    update_events () : void{
        for (let [key, value] of this.gamepad_state_change.value_map) {
            if(this.gamepad_state_change.value_map.get(key)){
                this.gamepad_event_listeners.value_map.get(key).forEach(event_listener => {
                    event_listener(key, this.gamepad_state.value_map.get(key));
                });
            }
        }     
    }

    check_control_state(gpc : GamePadControl, value : number): void{
        if (this.gamepad_state.value_map.get(gpc) != value){
            this.gamepad_state.value_map.set(gpc, value);
            this.gamepad_state_change.value_map.set(gpc, true);
        }
    }

    check_axes_state(gpc: GamePadControl, X: number, Y:number): void{
        if (this.gamepad_state.value_map.get(gpc).X != X && this.gamepad_state.value_map.get(gpc).Y != Y){
            this.gamepad_state.value_map.get(gpc).X = X;
            this.gamepad_state.value_map.get(gpc).Y = Y;
            this.gamepad_state_change.value_map.set(gpc, true);
        }
    }

    update_gamepad() : void{
        this.gamepad === navigator.getGamepads()[this.gamepad.index];
        for (let [key, value] of this.gamepad_state_change.value_map) {
            this.gamepad_state_change.value_map.set(key ,false);
        }     

        //Buttons a,b,x,y
        this.check_control_state(GamePadControl.A , this.gamepad.buttons[0].value);
        this.check_control_state(GamePadControl.B , this.gamepad.buttons[1].value);
        this.check_control_state(GamePadControl.X , this.gamepad.buttons[2].value);
        this.check_control_state(GamePadControl.Y , this.gamepad.buttons[3].value);
        //Triggers und Bumbers
        this.check_control_state(GamePadControl.LB , this.gamepad.buttons[4].value);
        this.check_control_state(GamePadControl.RB , this.gamepad.buttons[5].value);
        this.check_control_state(GamePadControl.LT , this.gamepad.buttons[6].value);
        this.check_control_state(GamePadControl.RT , this.gamepad.buttons[7].value);
        //Select Start
        this.check_control_state(GamePadControl.SELECT , this.gamepad.buttons[8].value);
        this.check_control_state(GamePadControl.START , this.gamepad.buttons[9].value);
        //Sticks Buttons and Axes
        this.check_control_state(GamePadControl.LSB , this.gamepad.buttons[10].value);
        this.check_axes_state(GamePadControl.LS , this.gamepad.axes[0] ,this.gamepad.axes[1]);
        this.check_control_state(GamePadControl.RSB , this.gamepad.buttons[11].value);
        this.check_axes_state(GamePadControl.RS , this.gamepad.axes[2] ,this.gamepad.axes[3]);
        //DPAD
        this.check_control_state(GamePadControl.DUP ,   this.gamepad.buttons[12].value);
        this.check_control_state(GamePadControl.DDOWN , this.gamepad.buttons[13].value);
        this.check_control_state(GamePadControl.DLEFT , this.gamepad.buttons[14].value);
        this.check_control_state(GamePadControl.DRIGHT, this.gamepad.buttons[15].value);
        //HOME
        //this.check_control_state(GamePadControl.HOME, this.gamepad.buttons[16].value)
        this.update_events();
    }

    get_gamepad_id() : number{
        return this.gamepad.index;
    }

    add_event_listener(gpc: GamePadControl, event_listener: (gpc: GamePadControl, value: any) => void){
       this.gamepad_event_listeners.value_map.get(gpc).push(event_listener);
    }

    remove_event_listener(gpc: GamePadControl, event_listener: (gpc: GamePadControl, value: any) => void){
        this.gamepad_event_listeners.value_map.get(gpc).forEach( (item, index) => {
            if(item === event_listener) this.gamepad_event_listeners.value_map.get(gpc).splice(index,1);
        });
    }
}