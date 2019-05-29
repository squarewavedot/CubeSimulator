import * as $protobuf from "protobufjs";
/** Namespace matrixserver. */
export namespace matrixserver {

    /** Properties of a MatrixServerMessage. */
    interface IMatrixServerMessage {

        /** MatrixServerMessage messageType */
        messageType?: (matrixserver.MessageType|null);

        /** MatrixServerMessage appID */
        appID?: (number|null);

        /** MatrixServerMessage status */
        status?: (matrixserver.Status|null);

        /** MatrixServerMessage screenData */
        screenData?: (matrixserver.IScreenData[]|null);

        /** MatrixServerMessage joystickData */
        joystickData?: (matrixserver.IJoystickData[]|null);

        /** MatrixServerMessage imuData */
        imuData?: (matrixserver.IImuData|null);

        /** MatrixServerMessage serverConfig */
        serverConfig?: (matrixserver.IServerConfig|null);
    }

    /** Represents a MatrixServerMessage. */
    class MatrixServerMessage implements IMatrixServerMessage {

        /**
         * Constructs a new MatrixServerMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: matrixserver.IMatrixServerMessage);

        /** MatrixServerMessage messageType. */
        public messageType: matrixserver.MessageType;

        /** MatrixServerMessage appID. */
        public appID: number;

        /** MatrixServerMessage status. */
        public status: matrixserver.Status;

        /** MatrixServerMessage screenData. */
        public screenData: matrixserver.IScreenData[];

        /** MatrixServerMessage joystickData. */
        public joystickData: matrixserver.IJoystickData[];

        /** MatrixServerMessage imuData. */
        public imuData?: (matrixserver.IImuData|null);

        /** MatrixServerMessage serverConfig. */
        public serverConfig?: (matrixserver.IServerConfig|null);

        /**
         * Creates a new MatrixServerMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MatrixServerMessage instance
         */
        public static create(properties?: matrixserver.IMatrixServerMessage): matrixserver.MatrixServerMessage;

        /**
         * Encodes the specified MatrixServerMessage message. Does not implicitly {@link matrixserver.MatrixServerMessage.verify|verify} messages.
         * @param message MatrixServerMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: matrixserver.IMatrixServerMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MatrixServerMessage message, length delimited. Does not implicitly {@link matrixserver.MatrixServerMessage.verify|verify} messages.
         * @param message MatrixServerMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: matrixserver.IMatrixServerMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MatrixServerMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MatrixServerMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): matrixserver.MatrixServerMessage;

        /**
         * Decodes a MatrixServerMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MatrixServerMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): matrixserver.MatrixServerMessage;

        /**
         * Verifies a MatrixServerMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MatrixServerMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MatrixServerMessage
         */
        public static fromObject(object: { [k: string]: any }): matrixserver.MatrixServerMessage;

        /**
         * Creates a plain object from a MatrixServerMessage message. Also converts values to other types if specified.
         * @param message MatrixServerMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: matrixserver.MatrixServerMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MatrixServerMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** MessageType enum. */
    enum MessageType {
        defaultMessageType = 0,
        registerApp = 1,
        getServerInfo = 2,
        requestScreenAccess = 3,
        setScreenFrame = 4,
        appAlive = 5,
        appPause = 6,
        appResume = 7,
        appKill = 8,
        imuData = 9,
        joystickData = 10
    }

    /** Status enum. */
    enum Status {
        defaultStatus = 0,
        error = 1,
        success = 2,
        invalidRequest = 3,
        requestDenied = 4
    }

    /** Properties of a ScreenData. */
    interface IScreenData {

        /** ScreenData screenID */
        screenID?: (number|null);

        /** ScreenData frameData */
        frameData?: (Uint8Array|null);

        /** ScreenData encoding */
        encoding?: (matrixserver.ScreenData.Encoding|null);
    }

    /** Represents a ScreenData. */
    class ScreenData implements IScreenData {

        /**
         * Constructs a new ScreenData.
         * @param [properties] Properties to set
         */
        constructor(properties?: matrixserver.IScreenData);

        /** ScreenData screenID. */
        public screenID: number;

        /** ScreenData frameData. */
        public frameData: Uint8Array;

        /** ScreenData encoding. */
        public encoding: matrixserver.ScreenData.Encoding;

        /**
         * Creates a new ScreenData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ScreenData instance
         */
        public static create(properties?: matrixserver.IScreenData): matrixserver.ScreenData;

        /**
         * Encodes the specified ScreenData message. Does not implicitly {@link matrixserver.ScreenData.verify|verify} messages.
         * @param message ScreenData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: matrixserver.IScreenData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ScreenData message, length delimited. Does not implicitly {@link matrixserver.ScreenData.verify|verify} messages.
         * @param message ScreenData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: matrixserver.IScreenData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ScreenData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ScreenData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): matrixserver.ScreenData;

        /**
         * Decodes a ScreenData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ScreenData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): matrixserver.ScreenData;

        /**
         * Verifies a ScreenData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ScreenData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ScreenData
         */
        public static fromObject(object: { [k: string]: any }): matrixserver.ScreenData;

        /**
         * Creates a plain object from a ScreenData message. Also converts values to other types if specified.
         * @param message ScreenData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: matrixserver.ScreenData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ScreenData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace ScreenData {

        /** Encoding enum. */
        enum Encoding {
            default = 0,
            rgb24bbp = 1
        }
    }

    /** Properties of an ImuData. */
    interface IImuData {

        /** ImuData accelX */
        accelX?: (number|null);

        /** ImuData accelY */
        accelY?: (number|null);

        /** ImuData accelZ */
        accelZ?: (number|null);

        /** ImuData gyroX */
        gyroX?: (number|null);

        /** ImuData gyroY */
        gyroY?: (number|null);

        /** ImuData gyroZ */
        gyroZ?: (number|null);
    }

    /** Represents an ImuData. */
    class ImuData implements IImuData {

        /**
         * Constructs a new ImuData.
         * @param [properties] Properties to set
         */
        constructor(properties?: matrixserver.IImuData);

        /** ImuData accelX. */
        public accelX: number;

        /** ImuData accelY. */
        public accelY: number;

        /** ImuData accelZ. */
        public accelZ: number;

        /** ImuData gyroX. */
        public gyroX: number;

        /** ImuData gyroY. */
        public gyroY: number;

        /** ImuData gyroZ. */
        public gyroZ: number;

        /**
         * Creates a new ImuData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ImuData instance
         */
        public static create(properties?: matrixserver.IImuData): matrixserver.ImuData;

        /**
         * Encodes the specified ImuData message. Does not implicitly {@link matrixserver.ImuData.verify|verify} messages.
         * @param message ImuData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: matrixserver.IImuData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ImuData message, length delimited. Does not implicitly {@link matrixserver.ImuData.verify|verify} messages.
         * @param message ImuData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: matrixserver.IImuData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ImuData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ImuData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): matrixserver.ImuData;

        /**
         * Decodes an ImuData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ImuData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): matrixserver.ImuData;

        /**
         * Verifies an ImuData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ImuData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ImuData
         */
        public static fromObject(object: { [k: string]: any }): matrixserver.ImuData;

        /**
         * Creates a plain object from an ImuData message. Also converts values to other types if specified.
         * @param message ImuData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: matrixserver.ImuData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ImuData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a JoystickData. */
    interface IJoystickData {

        /** JoystickData joystickID */
        joystickID?: (number|null);

        /** JoystickData axisX */
        axisX?: (number|null);

        /** JoystickData axisY */
        axisY?: (number|null);

        /** JoystickData buttonA */
        buttonA?: (boolean|null);

        /** JoystickData buttonB */
        buttonB?: (boolean|null);

        /** JoystickData buttonX */
        buttonX?: (boolean|null);

        /** JoystickData buttonY */
        buttonY?: (boolean|null);

        /** JoystickData buttonR */
        buttonR?: (boolean|null);

        /** JoystickData buttonL */
        buttonL?: (boolean|null);

        /** JoystickData buttonStart */
        buttonStart?: (boolean|null);

        /** JoystickData buttonSelect */
        buttonSelect?: (boolean|null);

        /** JoystickData rightAxisX */
        rightAxisX?: (number|null);

        /** JoystickData rightAxisY */
        rightAxisY?: (number|null);

        /** JoystickData rightTrigger */
        rightTrigger?: (number|null);

        /** JoystickData leftTrigger */
        leftTrigger?: (number|null);

        /** JoystickData rightStickButton */
        rightStickButton?: (boolean|null);

        /** JoystickData leftStickButton */
        leftStickButton?: (boolean|null);

        /** JoystickData buttonDpadUp */
        buttonDpadUp?: (boolean|null);

        /** JoystickData buttonDpadLeft */
        buttonDpadLeft?: (boolean|null);

        /** JoystickData buttonDpadDown */
        buttonDpadDown?: (boolean|null);

        /** JoystickData buttonDpadRight */
        buttonDpadRight?: (boolean|null);
    }

    /** Represents a JoystickData. */
    class JoystickData implements IJoystickData {

        /**
         * Constructs a new JoystickData.
         * @param [properties] Properties to set
         */
        constructor(properties?: matrixserver.IJoystickData);

        /** JoystickData joystickID. */
        public joystickID: number;

        /** JoystickData axisX. */
        public axisX: number;

        /** JoystickData axisY. */
        public axisY: number;

        /** JoystickData buttonA. */
        public buttonA: boolean;

        /** JoystickData buttonB. */
        public buttonB: boolean;

        /** JoystickData buttonX. */
        public buttonX: boolean;

        /** JoystickData buttonY. */
        public buttonY: boolean;

        /** JoystickData buttonR. */
        public buttonR: boolean;

        /** JoystickData buttonL. */
        public buttonL: boolean;

        /** JoystickData buttonStart. */
        public buttonStart: boolean;

        /** JoystickData buttonSelect. */
        public buttonSelect: boolean;

        /** JoystickData rightAxisX. */
        public rightAxisX: number;

        /** JoystickData rightAxisY. */
        public rightAxisY: number;

        /** JoystickData rightTrigger. */
        public rightTrigger: number;

        /** JoystickData leftTrigger. */
        public leftTrigger: number;

        /** JoystickData rightStickButton. */
        public rightStickButton: boolean;

        /** JoystickData leftStickButton. */
        public leftStickButton: boolean;

        /** JoystickData buttonDpadUp. */
        public buttonDpadUp: boolean;

        /** JoystickData buttonDpadLeft. */
        public buttonDpadLeft: boolean;

        /** JoystickData buttonDpadDown. */
        public buttonDpadDown: boolean;

        /** JoystickData buttonDpadRight. */
        public buttonDpadRight: boolean;

        /**
         * Creates a new JoystickData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns JoystickData instance
         */
        public static create(properties?: matrixserver.IJoystickData): matrixserver.JoystickData;

        /**
         * Encodes the specified JoystickData message. Does not implicitly {@link matrixserver.JoystickData.verify|verify} messages.
         * @param message JoystickData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: matrixserver.IJoystickData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified JoystickData message, length delimited. Does not implicitly {@link matrixserver.JoystickData.verify|verify} messages.
         * @param message JoystickData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: matrixserver.IJoystickData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a JoystickData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns JoystickData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): matrixserver.JoystickData;

        /**
         * Decodes a JoystickData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns JoystickData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): matrixserver.JoystickData;

        /**
         * Verifies a JoystickData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a JoystickData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns JoystickData
         */
        public static fromObject(object: { [k: string]: any }): matrixserver.JoystickData;

        /**
         * Creates a plain object from a JoystickData message. Also converts values to other types if specified.
         * @param message JoystickData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: matrixserver.JoystickData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this JoystickData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ServerConfig. */
    interface IServerConfig {

        /** ServerConfig screenInfo */
        screenInfo?: (matrixserver.IScreenInfo[]|null);

        /** ServerConfig assemblyType */
        assemblyType?: (matrixserver.ServerConfig.AssemblyType|null);

        /** ServerConfig globalScreenBrightness */
        globalScreenBrightness?: (number|null);

        /** ServerConfig serverConnection */
        serverConnection?: (matrixserver.IConnection|null);

        /** ServerConfig serverName */
        serverName?: (string|null);
    }

    /** Represents a ServerConfig. */
    class ServerConfig implements IServerConfig {

        /**
         * Constructs a new ServerConfig.
         * @param [properties] Properties to set
         */
        constructor(properties?: matrixserver.IServerConfig);

        /** ServerConfig screenInfo. */
        public screenInfo: matrixserver.IScreenInfo[];

        /** ServerConfig assemblyType. */
        public assemblyType: matrixserver.ServerConfig.AssemblyType;

        /** ServerConfig globalScreenBrightness. */
        public globalScreenBrightness: number;

        /** ServerConfig serverConnection. */
        public serverConnection?: (matrixserver.IConnection|null);

        /** ServerConfig serverName. */
        public serverName: string;

        /**
         * Creates a new ServerConfig instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServerConfig instance
         */
        public static create(properties?: matrixserver.IServerConfig): matrixserver.ServerConfig;

        /**
         * Encodes the specified ServerConfig message. Does not implicitly {@link matrixserver.ServerConfig.verify|verify} messages.
         * @param message ServerConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: matrixserver.IServerConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ServerConfig message, length delimited. Does not implicitly {@link matrixserver.ServerConfig.verify|verify} messages.
         * @param message ServerConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: matrixserver.IServerConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServerConfig message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServerConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): matrixserver.ServerConfig;

        /**
         * Decodes a ServerConfig message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ServerConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): matrixserver.ServerConfig;

        /**
         * Verifies a ServerConfig message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServerConfig message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServerConfig
         */
        public static fromObject(object: { [k: string]: any }): matrixserver.ServerConfig;

        /**
         * Creates a plain object from a ServerConfig message. Also converts values to other types if specified.
         * @param message ServerConfig
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: matrixserver.ServerConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServerConfig to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace ServerConfig {

        /** AssemblyType enum. */
        enum AssemblyType {
            defaultAssemblyType = 0,
            flat = 1,
            cube = 2
        }
    }

    /** Properties of a Connection. */
    interface IConnection {

        /** Connection serverAddress */
        serverAddress?: (string|null);

        /** Connection serverPort */
        serverPort?: (string|null);

        /** Connection connectionType */
        connectionType?: (matrixserver.Connection.ConnectionType|null);
    }

    /** Represents a Connection. */
    class Connection implements IConnection {

        /**
         * Constructs a new Connection.
         * @param [properties] Properties to set
         */
        constructor(properties?: matrixserver.IConnection);

        /** Connection serverAddress. */
        public serverAddress: string;

        /** Connection serverPort. */
        public serverPort: string;

        /** Connection connectionType. */
        public connectionType: matrixserver.Connection.ConnectionType;

        /**
         * Creates a new Connection instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Connection instance
         */
        public static create(properties?: matrixserver.IConnection): matrixserver.Connection;

        /**
         * Encodes the specified Connection message. Does not implicitly {@link matrixserver.Connection.verify|verify} messages.
         * @param message Connection message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: matrixserver.IConnection, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Connection message, length delimited. Does not implicitly {@link matrixserver.Connection.verify|verify} messages.
         * @param message Connection message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: matrixserver.IConnection, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Connection message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Connection
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): matrixserver.Connection;

        /**
         * Decodes a Connection message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Connection
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): matrixserver.Connection;

        /**
         * Verifies a Connection message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Connection message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Connection
         */
        public static fromObject(object: { [k: string]: any }): matrixserver.Connection;

        /**
         * Creates a plain object from a Connection message. Also converts values to other types if specified.
         * @param message Connection
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: matrixserver.Connection, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Connection to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace Connection {

        /** ConnectionType enum. */
        enum ConnectionType {
            defaultConnectionType = 0,
            tcp = 1,
            udp = 2
        }
    }

    /** Properties of a ScreenInfo. */
    interface IScreenInfo {

        /** ScreenInfo screenID */
        screenID?: (number|null);

        /** ScreenInfo width */
        width?: (number|null);

        /** ScreenInfo height */
        height?: (number|null);

        /** ScreenInfo available */
        available?: (boolean|null);

        /** ScreenInfo screenOrientation */
        screenOrientation?: (matrixserver.ScreenInfo.ScreenOrientation|null);

        /** ScreenInfo screenRotation */
        screenRotation?: (matrixserver.ScreenInfo.ScreenRotation|null);

        /** ScreenInfo offsetX */
        offsetX?: (number|null);

        /** ScreenInfo offsetY */
        offsetY?: (number|null);
    }

    /** Represents a ScreenInfo. */
    class ScreenInfo implements IScreenInfo {

        /**
         * Constructs a new ScreenInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: matrixserver.IScreenInfo);

        /** ScreenInfo screenID. */
        public screenID: number;

        /** ScreenInfo width. */
        public width: number;

        /** ScreenInfo height. */
        public height: number;

        /** ScreenInfo available. */
        public available: boolean;

        /** ScreenInfo screenOrientation. */
        public screenOrientation: matrixserver.ScreenInfo.ScreenOrientation;

        /** ScreenInfo screenRotation. */
        public screenRotation: matrixserver.ScreenInfo.ScreenRotation;

        /** ScreenInfo offsetX. */
        public offsetX: number;

        /** ScreenInfo offsetY. */
        public offsetY: number;

        /**
         * Creates a new ScreenInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ScreenInfo instance
         */
        public static create(properties?: matrixserver.IScreenInfo): matrixserver.ScreenInfo;

        /**
         * Encodes the specified ScreenInfo message. Does not implicitly {@link matrixserver.ScreenInfo.verify|verify} messages.
         * @param message ScreenInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: matrixserver.IScreenInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ScreenInfo message, length delimited. Does not implicitly {@link matrixserver.ScreenInfo.verify|verify} messages.
         * @param message ScreenInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: matrixserver.IScreenInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ScreenInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ScreenInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): matrixserver.ScreenInfo;

        /**
         * Decodes a ScreenInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ScreenInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): matrixserver.ScreenInfo;

        /**
         * Verifies a ScreenInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ScreenInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ScreenInfo
         */
        public static fromObject(object: { [k: string]: any }): matrixserver.ScreenInfo;

        /**
         * Creates a plain object from a ScreenInfo message. Also converts values to other types if specified.
         * @param message ScreenInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: matrixserver.ScreenInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ScreenInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace ScreenInfo {

        /** ScreenOrientation enum. */
        enum ScreenOrientation {
            defaultScreenOrientation = 0,
            front = 1,
            right = 2,
            back = 3,
            left = 4,
            top = 5,
            bottom = 6,
            anyScreen = 10
        }

        /** ScreenRotation enum. */
        enum ScreenRotation {
            rot0 = 0,
            rot90 = 1,
            rot180 = 2,
            rot270 = 3
        }
    }
}
