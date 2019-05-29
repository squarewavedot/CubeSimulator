/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.matrixserver = (function() {

    /**
     * Namespace matrixserver.
     * @exports matrixserver
     * @namespace
     */
    var matrixserver = {};

    matrixserver.MatrixServerMessage = (function() {

        /**
         * Properties of a MatrixServerMessage.
         * @memberof matrixserver
         * @interface IMatrixServerMessage
         * @property {matrixserver.MessageType|null} [messageType] MatrixServerMessage messageType
         * @property {number|null} [appID] MatrixServerMessage appID
         * @property {matrixserver.Status|null} [status] MatrixServerMessage status
         * @property {Array.<matrixserver.IScreenData>|null} [screenData] MatrixServerMessage screenData
         * @property {Array.<matrixserver.IJoystickData>|null} [joystickData] MatrixServerMessage joystickData
         * @property {matrixserver.IImuData|null} [imuData] MatrixServerMessage imuData
         * @property {matrixserver.IServerConfig|null} [serverConfig] MatrixServerMessage serverConfig
         */

        /**
         * Constructs a new MatrixServerMessage.
         * @memberof matrixserver
         * @classdesc Represents a MatrixServerMessage.
         * @implements IMatrixServerMessage
         * @constructor
         * @param {matrixserver.IMatrixServerMessage=} [properties] Properties to set
         */
        function MatrixServerMessage(properties) {
            this.screenData = [];
            this.joystickData = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MatrixServerMessage messageType.
         * @member {matrixserver.MessageType} messageType
         * @memberof matrixserver.MatrixServerMessage
         * @instance
         */
        MatrixServerMessage.prototype.messageType = 0;

        /**
         * MatrixServerMessage appID.
         * @member {number} appID
         * @memberof matrixserver.MatrixServerMessage
         * @instance
         */
        MatrixServerMessage.prototype.appID = 0;

        /**
         * MatrixServerMessage status.
         * @member {matrixserver.Status} status
         * @memberof matrixserver.MatrixServerMessage
         * @instance
         */
        MatrixServerMessage.prototype.status = 0;

        /**
         * MatrixServerMessage screenData.
         * @member {Array.<matrixserver.IScreenData>} screenData
         * @memberof matrixserver.MatrixServerMessage
         * @instance
         */
        MatrixServerMessage.prototype.screenData = $util.emptyArray;

        /**
         * MatrixServerMessage joystickData.
         * @member {Array.<matrixserver.IJoystickData>} joystickData
         * @memberof matrixserver.MatrixServerMessage
         * @instance
         */
        MatrixServerMessage.prototype.joystickData = $util.emptyArray;

        /**
         * MatrixServerMessage imuData.
         * @member {matrixserver.IImuData|null|undefined} imuData
         * @memberof matrixserver.MatrixServerMessage
         * @instance
         */
        MatrixServerMessage.prototype.imuData = null;

        /**
         * MatrixServerMessage serverConfig.
         * @member {matrixserver.IServerConfig|null|undefined} serverConfig
         * @memberof matrixserver.MatrixServerMessage
         * @instance
         */
        MatrixServerMessage.prototype.serverConfig = null;

        /**
         * Creates a new MatrixServerMessage instance using the specified properties.
         * @function create
         * @memberof matrixserver.MatrixServerMessage
         * @static
         * @param {matrixserver.IMatrixServerMessage=} [properties] Properties to set
         * @returns {matrixserver.MatrixServerMessage} MatrixServerMessage instance
         */
        MatrixServerMessage.create = function create(properties) {
            return new MatrixServerMessage(properties);
        };

        /**
         * Encodes the specified MatrixServerMessage message. Does not implicitly {@link matrixserver.MatrixServerMessage.verify|verify} messages.
         * @function encode
         * @memberof matrixserver.MatrixServerMessage
         * @static
         * @param {matrixserver.IMatrixServerMessage} message MatrixServerMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MatrixServerMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.messageType != null && message.hasOwnProperty("messageType"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.messageType);
            if (message.appID != null && message.hasOwnProperty("appID"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.appID);
            if (message.status != null && message.hasOwnProperty("status"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.status);
            if (message.screenData != null && message.screenData.length)
                for (var i = 0; i < message.screenData.length; ++i)
                    $root.matrixserver.ScreenData.encode(message.screenData[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.joystickData != null && message.joystickData.length)
                for (var i = 0; i < message.joystickData.length; ++i)
                    $root.matrixserver.JoystickData.encode(message.joystickData[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.imuData != null && message.hasOwnProperty("imuData"))
                $root.matrixserver.ImuData.encode(message.imuData, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.serverConfig != null && message.hasOwnProperty("serverConfig"))
                $root.matrixserver.ServerConfig.encode(message.serverConfig, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified MatrixServerMessage message, length delimited. Does not implicitly {@link matrixserver.MatrixServerMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof matrixserver.MatrixServerMessage
         * @static
         * @param {matrixserver.IMatrixServerMessage} message MatrixServerMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MatrixServerMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MatrixServerMessage message from the specified reader or buffer.
         * @function decode
         * @memberof matrixserver.MatrixServerMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {matrixserver.MatrixServerMessage} MatrixServerMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MatrixServerMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.matrixserver.MatrixServerMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.messageType = reader.int32();
                    break;
                case 2:
                    message.appID = reader.int32();
                    break;
                case 3:
                    message.status = reader.int32();
                    break;
                case 4:
                    if (!(message.screenData && message.screenData.length))
                        message.screenData = [];
                    message.screenData.push($root.matrixserver.ScreenData.decode(reader, reader.uint32()));
                    break;
                case 5:
                    if (!(message.joystickData && message.joystickData.length))
                        message.joystickData = [];
                    message.joystickData.push($root.matrixserver.JoystickData.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.imuData = $root.matrixserver.ImuData.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.serverConfig = $root.matrixserver.ServerConfig.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MatrixServerMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof matrixserver.MatrixServerMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {matrixserver.MatrixServerMessage} MatrixServerMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MatrixServerMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MatrixServerMessage message.
         * @function verify
         * @memberof matrixserver.MatrixServerMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MatrixServerMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.messageType != null && message.hasOwnProperty("messageType"))
                switch (message.messageType) {
                default:
                    return "messageType: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                    break;
                }
            if (message.appID != null && message.hasOwnProperty("appID"))
                if (!$util.isInteger(message.appID))
                    return "appID: integer expected";
            if (message.status != null && message.hasOwnProperty("status"))
                switch (message.status) {
                default:
                    return "status: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            if (message.screenData != null && message.hasOwnProperty("screenData")) {
                if (!Array.isArray(message.screenData))
                    return "screenData: array expected";
                for (var i = 0; i < message.screenData.length; ++i) {
                    var error = $root.matrixserver.ScreenData.verify(message.screenData[i]);
                    if (error)
                        return "screenData." + error;
                }
            }
            if (message.joystickData != null && message.hasOwnProperty("joystickData")) {
                if (!Array.isArray(message.joystickData))
                    return "joystickData: array expected";
                for (var i = 0; i < message.joystickData.length; ++i) {
                    var error = $root.matrixserver.JoystickData.verify(message.joystickData[i]);
                    if (error)
                        return "joystickData." + error;
                }
            }
            if (message.imuData != null && message.hasOwnProperty("imuData")) {
                var error = $root.matrixserver.ImuData.verify(message.imuData);
                if (error)
                    return "imuData." + error;
            }
            if (message.serverConfig != null && message.hasOwnProperty("serverConfig")) {
                var error = $root.matrixserver.ServerConfig.verify(message.serverConfig);
                if (error)
                    return "serverConfig." + error;
            }
            return null;
        };

        /**
         * Creates a MatrixServerMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof matrixserver.MatrixServerMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {matrixserver.MatrixServerMessage} MatrixServerMessage
         */
        MatrixServerMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.matrixserver.MatrixServerMessage)
                return object;
            var message = new $root.matrixserver.MatrixServerMessage();
            switch (object.messageType) {
            case "defaultMessageType":
            case 0:
                message.messageType = 0;
                break;
            case "registerApp":
            case 1:
                message.messageType = 1;
                break;
            case "getServerInfo":
            case 2:
                message.messageType = 2;
                break;
            case "requestScreenAccess":
            case 3:
                message.messageType = 3;
                break;
            case "setScreenFrame":
            case 4:
                message.messageType = 4;
                break;
            case "appAlive":
            case 5:
                message.messageType = 5;
                break;
            case "appPause":
            case 6:
                message.messageType = 6;
                break;
            case "appResume":
            case 7:
                message.messageType = 7;
                break;
            case "appKill":
            case 8:
                message.messageType = 8;
                break;
            case "imuData":
            case 9:
                message.messageType = 9;
                break;
            case "joystickData":
            case 10:
                message.messageType = 10;
                break;
            }
            if (object.appID != null)
                message.appID = object.appID | 0;
            switch (object.status) {
            case "defaultStatus":
            case 0:
                message.status = 0;
                break;
            case "error":
            case 1:
                message.status = 1;
                break;
            case "success":
            case 2:
                message.status = 2;
                break;
            case "invalidRequest":
            case 3:
                message.status = 3;
                break;
            case "requestDenied":
            case 4:
                message.status = 4;
                break;
            }
            if (object.screenData) {
                if (!Array.isArray(object.screenData))
                    throw TypeError(".matrixserver.MatrixServerMessage.screenData: array expected");
                message.screenData = [];
                for (var i = 0; i < object.screenData.length; ++i) {
                    if (typeof object.screenData[i] !== "object")
                        throw TypeError(".matrixserver.MatrixServerMessage.screenData: object expected");
                    message.screenData[i] = $root.matrixserver.ScreenData.fromObject(object.screenData[i]);
                }
            }
            if (object.joystickData) {
                if (!Array.isArray(object.joystickData))
                    throw TypeError(".matrixserver.MatrixServerMessage.joystickData: array expected");
                message.joystickData = [];
                for (var i = 0; i < object.joystickData.length; ++i) {
                    if (typeof object.joystickData[i] !== "object")
                        throw TypeError(".matrixserver.MatrixServerMessage.joystickData: object expected");
                    message.joystickData[i] = $root.matrixserver.JoystickData.fromObject(object.joystickData[i]);
                }
            }
            if (object.imuData != null) {
                if (typeof object.imuData !== "object")
                    throw TypeError(".matrixserver.MatrixServerMessage.imuData: object expected");
                message.imuData = $root.matrixserver.ImuData.fromObject(object.imuData);
            }
            if (object.serverConfig != null) {
                if (typeof object.serverConfig !== "object")
                    throw TypeError(".matrixserver.MatrixServerMessage.serverConfig: object expected");
                message.serverConfig = $root.matrixserver.ServerConfig.fromObject(object.serverConfig);
            }
            return message;
        };

        /**
         * Creates a plain object from a MatrixServerMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof matrixserver.MatrixServerMessage
         * @static
         * @param {matrixserver.MatrixServerMessage} message MatrixServerMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MatrixServerMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.screenData = [];
                object.joystickData = [];
            }
            if (options.defaults) {
                object.messageType = options.enums === String ? "defaultMessageType" : 0;
                object.appID = 0;
                object.status = options.enums === String ? "defaultStatus" : 0;
                object.imuData = null;
                object.serverConfig = null;
            }
            if (message.messageType != null && message.hasOwnProperty("messageType"))
                object.messageType = options.enums === String ? $root.matrixserver.MessageType[message.messageType] : message.messageType;
            if (message.appID != null && message.hasOwnProperty("appID"))
                object.appID = message.appID;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = options.enums === String ? $root.matrixserver.Status[message.status] : message.status;
            if (message.screenData && message.screenData.length) {
                object.screenData = [];
                for (var j = 0; j < message.screenData.length; ++j)
                    object.screenData[j] = $root.matrixserver.ScreenData.toObject(message.screenData[j], options);
            }
            if (message.joystickData && message.joystickData.length) {
                object.joystickData = [];
                for (var j = 0; j < message.joystickData.length; ++j)
                    object.joystickData[j] = $root.matrixserver.JoystickData.toObject(message.joystickData[j], options);
            }
            if (message.imuData != null && message.hasOwnProperty("imuData"))
                object.imuData = $root.matrixserver.ImuData.toObject(message.imuData, options);
            if (message.serverConfig != null && message.hasOwnProperty("serverConfig"))
                object.serverConfig = $root.matrixserver.ServerConfig.toObject(message.serverConfig, options);
            return object;
        };

        /**
         * Converts this MatrixServerMessage to JSON.
         * @function toJSON
         * @memberof matrixserver.MatrixServerMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MatrixServerMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MatrixServerMessage;
    })();

    /**
     * MessageType enum.
     * @name matrixserver.MessageType
     * @enum {string}
     * @property {number} defaultMessageType=0 defaultMessageType value
     * @property {number} registerApp=1 registerApp value
     * @property {number} getServerInfo=2 getServerInfo value
     * @property {number} requestScreenAccess=3 requestScreenAccess value
     * @property {number} setScreenFrame=4 setScreenFrame value
     * @property {number} appAlive=5 appAlive value
     * @property {number} appPause=6 appPause value
     * @property {number} appResume=7 appResume value
     * @property {number} appKill=8 appKill value
     * @property {number} imuData=9 imuData value
     * @property {number} joystickData=10 joystickData value
     */
    matrixserver.MessageType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "defaultMessageType"] = 0;
        values[valuesById[1] = "registerApp"] = 1;
        values[valuesById[2] = "getServerInfo"] = 2;
        values[valuesById[3] = "requestScreenAccess"] = 3;
        values[valuesById[4] = "setScreenFrame"] = 4;
        values[valuesById[5] = "appAlive"] = 5;
        values[valuesById[6] = "appPause"] = 6;
        values[valuesById[7] = "appResume"] = 7;
        values[valuesById[8] = "appKill"] = 8;
        values[valuesById[9] = "imuData"] = 9;
        values[valuesById[10] = "joystickData"] = 10;
        return values;
    })();

    /**
     * Status enum.
     * @name matrixserver.Status
     * @enum {string}
     * @property {number} defaultStatus=0 defaultStatus value
     * @property {number} error=1 error value
     * @property {number} success=2 success value
     * @property {number} invalidRequest=3 invalidRequest value
     * @property {number} requestDenied=4 requestDenied value
     */
    matrixserver.Status = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "defaultStatus"] = 0;
        values[valuesById[1] = "error"] = 1;
        values[valuesById[2] = "success"] = 2;
        values[valuesById[3] = "invalidRequest"] = 3;
        values[valuesById[4] = "requestDenied"] = 4;
        return values;
    })();

    matrixserver.ScreenData = (function() {

        /**
         * Properties of a ScreenData.
         * @memberof matrixserver
         * @interface IScreenData
         * @property {number|null} [screenID] ScreenData screenID
         * @property {Uint8Array|null} [frameData] ScreenData frameData
         * @property {matrixserver.ScreenData.Encoding|null} [encoding] ScreenData encoding
         */

        /**
         * Constructs a new ScreenData.
         * @memberof matrixserver
         * @classdesc Represents a ScreenData.
         * @implements IScreenData
         * @constructor
         * @param {matrixserver.IScreenData=} [properties] Properties to set
         */
        function ScreenData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ScreenData screenID.
         * @member {number} screenID
         * @memberof matrixserver.ScreenData
         * @instance
         */
        ScreenData.prototype.screenID = 0;

        /**
         * ScreenData frameData.
         * @member {Uint8Array} frameData
         * @memberof matrixserver.ScreenData
         * @instance
         */
        ScreenData.prototype.frameData = $util.newBuffer([]);

        /**
         * ScreenData encoding.
         * @member {matrixserver.ScreenData.Encoding} encoding
         * @memberof matrixserver.ScreenData
         * @instance
         */
        ScreenData.prototype.encoding = 0;

        /**
         * Creates a new ScreenData instance using the specified properties.
         * @function create
         * @memberof matrixserver.ScreenData
         * @static
         * @param {matrixserver.IScreenData=} [properties] Properties to set
         * @returns {matrixserver.ScreenData} ScreenData instance
         */
        ScreenData.create = function create(properties) {
            return new ScreenData(properties);
        };

        /**
         * Encodes the specified ScreenData message. Does not implicitly {@link matrixserver.ScreenData.verify|verify} messages.
         * @function encode
         * @memberof matrixserver.ScreenData
         * @static
         * @param {matrixserver.IScreenData} message ScreenData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ScreenData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.screenID != null && message.hasOwnProperty("screenID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.screenID);
            if (message.frameData != null && message.hasOwnProperty("frameData"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.frameData);
            if (message.encoding != null && message.hasOwnProperty("encoding"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.encoding);
            return writer;
        };

        /**
         * Encodes the specified ScreenData message, length delimited. Does not implicitly {@link matrixserver.ScreenData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof matrixserver.ScreenData
         * @static
         * @param {matrixserver.IScreenData} message ScreenData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ScreenData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ScreenData message from the specified reader or buffer.
         * @function decode
         * @memberof matrixserver.ScreenData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {matrixserver.ScreenData} ScreenData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ScreenData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.matrixserver.ScreenData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.screenID = reader.int32();
                    break;
                case 2:
                    message.frameData = reader.bytes();
                    break;
                case 6:
                    message.encoding = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ScreenData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof matrixserver.ScreenData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {matrixserver.ScreenData} ScreenData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ScreenData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ScreenData message.
         * @function verify
         * @memberof matrixserver.ScreenData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ScreenData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.screenID != null && message.hasOwnProperty("screenID"))
                if (!$util.isInteger(message.screenID))
                    return "screenID: integer expected";
            if (message.frameData != null && message.hasOwnProperty("frameData"))
                if (!(message.frameData && typeof message.frameData.length === "number" || $util.isString(message.frameData)))
                    return "frameData: buffer expected";
            if (message.encoding != null && message.hasOwnProperty("encoding"))
                switch (message.encoding) {
                default:
                    return "encoding: enum value expected";
                case 0:
                case 1:
                    break;
                }
            return null;
        };

        /**
         * Creates a ScreenData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof matrixserver.ScreenData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {matrixserver.ScreenData} ScreenData
         */
        ScreenData.fromObject = function fromObject(object) {
            if (object instanceof $root.matrixserver.ScreenData)
                return object;
            var message = new $root.matrixserver.ScreenData();
            if (object.screenID != null)
                message.screenID = object.screenID | 0;
            if (object.frameData != null)
                if (typeof object.frameData === "string")
                    $util.base64.decode(object.frameData, message.frameData = $util.newBuffer($util.base64.length(object.frameData)), 0);
                else if (object.frameData.length)
                    message.frameData = object.frameData;
            switch (object.encoding) {
            case "default":
            case 0:
                message.encoding = 0;
                break;
            case "rgb24bbp":
            case 1:
                message.encoding = 1;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a ScreenData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof matrixserver.ScreenData
         * @static
         * @param {matrixserver.ScreenData} message ScreenData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ScreenData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.screenID = 0;
                if (options.bytes === String)
                    object.frameData = "";
                else {
                    object.frameData = [];
                    if (options.bytes !== Array)
                        object.frameData = $util.newBuffer(object.frameData);
                }
                object.encoding = options.enums === String ? "default" : 0;
            }
            if (message.screenID != null && message.hasOwnProperty("screenID"))
                object.screenID = message.screenID;
            if (message.frameData != null && message.hasOwnProperty("frameData"))
                object.frameData = options.bytes === String ? $util.base64.encode(message.frameData, 0, message.frameData.length) : options.bytes === Array ? Array.prototype.slice.call(message.frameData) : message.frameData;
            if (message.encoding != null && message.hasOwnProperty("encoding"))
                object.encoding = options.enums === String ? $root.matrixserver.ScreenData.Encoding[message.encoding] : message.encoding;
            return object;
        };

        /**
         * Converts this ScreenData to JSON.
         * @function toJSON
         * @memberof matrixserver.ScreenData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ScreenData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Encoding enum.
         * @name matrixserver.ScreenData.Encoding
         * @enum {string}
         * @property {number} default=0 default value
         * @property {number} rgb24bbp=1 rgb24bbp value
         */
        ScreenData.Encoding = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "default"] = 0;
            values[valuesById[1] = "rgb24bbp"] = 1;
            return values;
        })();

        return ScreenData;
    })();

    matrixserver.ImuData = (function() {

        /**
         * Properties of an ImuData.
         * @memberof matrixserver
         * @interface IImuData
         * @property {number|null} [accelX] ImuData accelX
         * @property {number|null} [accelY] ImuData accelY
         * @property {number|null} [accelZ] ImuData accelZ
         * @property {number|null} [gyroX] ImuData gyroX
         * @property {number|null} [gyroY] ImuData gyroY
         * @property {number|null} [gyroZ] ImuData gyroZ
         */

        /**
         * Constructs a new ImuData.
         * @memberof matrixserver
         * @classdesc Represents an ImuData.
         * @implements IImuData
         * @constructor
         * @param {matrixserver.IImuData=} [properties] Properties to set
         */
        function ImuData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ImuData accelX.
         * @member {number} accelX
         * @memberof matrixserver.ImuData
         * @instance
         */
        ImuData.prototype.accelX = 0;

        /**
         * ImuData accelY.
         * @member {number} accelY
         * @memberof matrixserver.ImuData
         * @instance
         */
        ImuData.prototype.accelY = 0;

        /**
         * ImuData accelZ.
         * @member {number} accelZ
         * @memberof matrixserver.ImuData
         * @instance
         */
        ImuData.prototype.accelZ = 0;

        /**
         * ImuData gyroX.
         * @member {number} gyroX
         * @memberof matrixserver.ImuData
         * @instance
         */
        ImuData.prototype.gyroX = 0;

        /**
         * ImuData gyroY.
         * @member {number} gyroY
         * @memberof matrixserver.ImuData
         * @instance
         */
        ImuData.prototype.gyroY = 0;

        /**
         * ImuData gyroZ.
         * @member {number} gyroZ
         * @memberof matrixserver.ImuData
         * @instance
         */
        ImuData.prototype.gyroZ = 0;

        /**
         * Creates a new ImuData instance using the specified properties.
         * @function create
         * @memberof matrixserver.ImuData
         * @static
         * @param {matrixserver.IImuData=} [properties] Properties to set
         * @returns {matrixserver.ImuData} ImuData instance
         */
        ImuData.create = function create(properties) {
            return new ImuData(properties);
        };

        /**
         * Encodes the specified ImuData message. Does not implicitly {@link matrixserver.ImuData.verify|verify} messages.
         * @function encode
         * @memberof matrixserver.ImuData
         * @static
         * @param {matrixserver.IImuData} message ImuData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ImuData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.accelX != null && message.hasOwnProperty("accelX"))
                writer.uint32(/* id 1, wireType 5 =*/13).float(message.accelX);
            if (message.accelY != null && message.hasOwnProperty("accelY"))
                writer.uint32(/* id 2, wireType 5 =*/21).float(message.accelY);
            if (message.accelZ != null && message.hasOwnProperty("accelZ"))
                writer.uint32(/* id 3, wireType 5 =*/29).float(message.accelZ);
            if (message.gyroX != null && message.hasOwnProperty("gyroX"))
                writer.uint32(/* id 4, wireType 5 =*/37).float(message.gyroX);
            if (message.gyroY != null && message.hasOwnProperty("gyroY"))
                writer.uint32(/* id 5, wireType 5 =*/45).float(message.gyroY);
            if (message.gyroZ != null && message.hasOwnProperty("gyroZ"))
                writer.uint32(/* id 6, wireType 5 =*/53).float(message.gyroZ);
            return writer;
        };

        /**
         * Encodes the specified ImuData message, length delimited. Does not implicitly {@link matrixserver.ImuData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof matrixserver.ImuData
         * @static
         * @param {matrixserver.IImuData} message ImuData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ImuData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ImuData message from the specified reader or buffer.
         * @function decode
         * @memberof matrixserver.ImuData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {matrixserver.ImuData} ImuData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ImuData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.matrixserver.ImuData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.accelX = reader.float();
                    break;
                case 2:
                    message.accelY = reader.float();
                    break;
                case 3:
                    message.accelZ = reader.float();
                    break;
                case 4:
                    message.gyroX = reader.float();
                    break;
                case 5:
                    message.gyroY = reader.float();
                    break;
                case 6:
                    message.gyroZ = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ImuData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof matrixserver.ImuData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {matrixserver.ImuData} ImuData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ImuData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ImuData message.
         * @function verify
         * @memberof matrixserver.ImuData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ImuData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.accelX != null && message.hasOwnProperty("accelX"))
                if (typeof message.accelX !== "number")
                    return "accelX: number expected";
            if (message.accelY != null && message.hasOwnProperty("accelY"))
                if (typeof message.accelY !== "number")
                    return "accelY: number expected";
            if (message.accelZ != null && message.hasOwnProperty("accelZ"))
                if (typeof message.accelZ !== "number")
                    return "accelZ: number expected";
            if (message.gyroX != null && message.hasOwnProperty("gyroX"))
                if (typeof message.gyroX !== "number")
                    return "gyroX: number expected";
            if (message.gyroY != null && message.hasOwnProperty("gyroY"))
                if (typeof message.gyroY !== "number")
                    return "gyroY: number expected";
            if (message.gyroZ != null && message.hasOwnProperty("gyroZ"))
                if (typeof message.gyroZ !== "number")
                    return "gyroZ: number expected";
            return null;
        };

        /**
         * Creates an ImuData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof matrixserver.ImuData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {matrixserver.ImuData} ImuData
         */
        ImuData.fromObject = function fromObject(object) {
            if (object instanceof $root.matrixserver.ImuData)
                return object;
            var message = new $root.matrixserver.ImuData();
            if (object.accelX != null)
                message.accelX = Number(object.accelX);
            if (object.accelY != null)
                message.accelY = Number(object.accelY);
            if (object.accelZ != null)
                message.accelZ = Number(object.accelZ);
            if (object.gyroX != null)
                message.gyroX = Number(object.gyroX);
            if (object.gyroY != null)
                message.gyroY = Number(object.gyroY);
            if (object.gyroZ != null)
                message.gyroZ = Number(object.gyroZ);
            return message;
        };

        /**
         * Creates a plain object from an ImuData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof matrixserver.ImuData
         * @static
         * @param {matrixserver.ImuData} message ImuData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ImuData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.accelX = 0;
                object.accelY = 0;
                object.accelZ = 0;
                object.gyroX = 0;
                object.gyroY = 0;
                object.gyroZ = 0;
            }
            if (message.accelX != null && message.hasOwnProperty("accelX"))
                object.accelX = options.json && !isFinite(message.accelX) ? String(message.accelX) : message.accelX;
            if (message.accelY != null && message.hasOwnProperty("accelY"))
                object.accelY = options.json && !isFinite(message.accelY) ? String(message.accelY) : message.accelY;
            if (message.accelZ != null && message.hasOwnProperty("accelZ"))
                object.accelZ = options.json && !isFinite(message.accelZ) ? String(message.accelZ) : message.accelZ;
            if (message.gyroX != null && message.hasOwnProperty("gyroX"))
                object.gyroX = options.json && !isFinite(message.gyroX) ? String(message.gyroX) : message.gyroX;
            if (message.gyroY != null && message.hasOwnProperty("gyroY"))
                object.gyroY = options.json && !isFinite(message.gyroY) ? String(message.gyroY) : message.gyroY;
            if (message.gyroZ != null && message.hasOwnProperty("gyroZ"))
                object.gyroZ = options.json && !isFinite(message.gyroZ) ? String(message.gyroZ) : message.gyroZ;
            return object;
        };

        /**
         * Converts this ImuData to JSON.
         * @function toJSON
         * @memberof matrixserver.ImuData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ImuData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ImuData;
    })();

    matrixserver.JoystickData = (function() {

        /**
         * Properties of a JoystickData.
         * @memberof matrixserver
         * @interface IJoystickData
         * @property {number|null} [joystickID] JoystickData joystickID
         * @property {number|null} [axisX] JoystickData axisX
         * @property {number|null} [axisY] JoystickData axisY
         * @property {boolean|null} [buttonA] JoystickData buttonA
         * @property {boolean|null} [buttonB] JoystickData buttonB
         * @property {boolean|null} [buttonX] JoystickData buttonX
         * @property {boolean|null} [buttonY] JoystickData buttonY
         * @property {boolean|null} [buttonR] JoystickData buttonR
         * @property {boolean|null} [buttonL] JoystickData buttonL
         * @property {boolean|null} [buttonStart] JoystickData buttonStart
         * @property {boolean|null} [buttonSelect] JoystickData buttonSelect
         * @property {number|null} [rightAxisX] JoystickData rightAxisX
         * @property {number|null} [rightAxisY] JoystickData rightAxisY
         * @property {number|null} [rightTrigger] JoystickData rightTrigger
         * @property {number|null} [leftTrigger] JoystickData leftTrigger
         * @property {boolean|null} [rightStickButton] JoystickData rightStickButton
         * @property {boolean|null} [leftStickButton] JoystickData leftStickButton
         * @property {boolean|null} [buttonDpadUp] JoystickData buttonDpadUp
         * @property {boolean|null} [buttonDpadLeft] JoystickData buttonDpadLeft
         * @property {boolean|null} [buttonDpadDown] JoystickData buttonDpadDown
         * @property {boolean|null} [buttonDpadRight] JoystickData buttonDpadRight
         */

        /**
         * Constructs a new JoystickData.
         * @memberof matrixserver
         * @classdesc Represents a JoystickData.
         * @implements IJoystickData
         * @constructor
         * @param {matrixserver.IJoystickData=} [properties] Properties to set
         */
        function JoystickData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JoystickData joystickID.
         * @member {number} joystickID
         * @memberof matrixserver.JoystickData
         * @instance
         */
        JoystickData.prototype.joystickID = 0;

        /**
         * JoystickData axisX.
         * @member {number} axisX
         * @memberof matrixserver.JoystickData
         * @instance
         */
        JoystickData.prototype.axisX = 0;

        /**
         * JoystickData axisY.
         * @member {number} axisY
         * @memberof matrixserver.JoystickData
         * @instance
         */
        JoystickData.prototype.axisY = 0;

        /**
         * JoystickData buttonA.
         * @member {boolean} buttonA
         * @memberof matrixserver.JoystickData
         * @instance
         */
        JoystickData.prototype.buttonA = false;

        /**
         * JoystickData buttonB.
         * @member {boolean} buttonB
         * @memberof matrixserver.JoystickData
         * @instance
         */
        JoystickData.prototype.buttonB = false;

        /**
         * JoystickData buttonX.
         * @member {boolean} buttonX
         * @memberof matrixserver.JoystickData
         * @instance
         */
        JoystickData.prototype.buttonX = false;

        /**
         * JoystickData buttonY.
         * @member {boolean} buttonY
         * @memberof matrixserver.JoystickData
         * @instance
         */
        JoystickData.prototype.buttonY = false;

        /**
         * JoystickData buttonR.
         * @member {boolean} buttonR
         * @memberof matrixserver.JoystickData
         * @instance
         */
        JoystickData.prototype.buttonR = false;

        /**
         * JoystickData buttonL.
         * @member {boolean} buttonL
         * @memberof matrixserver.JoystickData
         * @instance
         */
        JoystickData.prototype.buttonL = false;

        /**
         * JoystickData buttonStart.
         * @member {boolean} buttonStart
         * @memberof matrixserver.JoystickData
         * @instance
         */
        JoystickData.prototype.buttonStart = false;

        /**
         * JoystickData buttonSelect.
         * @member {boolean} buttonSelect
         * @memberof matrixserver.JoystickData
         * @instance
         */
        JoystickData.prototype.buttonSelect = false;

        /**
         * JoystickData rightAxisX.
         * @member {number} rightAxisX
         * @memberof matrixserver.JoystickData
         * @instance
         */
        JoystickData.prototype.rightAxisX = 0;

        /**
         * JoystickData rightAxisY.
         * @member {number} rightAxisY
         * @memberof matrixserver.JoystickData
         * @instance
         */
        JoystickData.prototype.rightAxisY = 0;

        /**
         * JoystickData rightTrigger.
         * @member {number} rightTrigger
         * @memberof matrixserver.JoystickData
         * @instance
         */
        JoystickData.prototype.rightTrigger = 0;

        /**
         * JoystickData leftTrigger.
         * @member {number} leftTrigger
         * @memberof matrixserver.JoystickData
         * @instance
         */
        JoystickData.prototype.leftTrigger = 0;

        /**
         * JoystickData rightStickButton.
         * @member {boolean} rightStickButton
         * @memberof matrixserver.JoystickData
         * @instance
         */
        JoystickData.prototype.rightStickButton = false;

        /**
         * JoystickData leftStickButton.
         * @member {boolean} leftStickButton
         * @memberof matrixserver.JoystickData
         * @instance
         */
        JoystickData.prototype.leftStickButton = false;

        /**
         * JoystickData buttonDpadUp.
         * @member {boolean} buttonDpadUp
         * @memberof matrixserver.JoystickData
         * @instance
         */
        JoystickData.prototype.buttonDpadUp = false;

        /**
         * JoystickData buttonDpadLeft.
         * @member {boolean} buttonDpadLeft
         * @memberof matrixserver.JoystickData
         * @instance
         */
        JoystickData.prototype.buttonDpadLeft = false;

        /**
         * JoystickData buttonDpadDown.
         * @member {boolean} buttonDpadDown
         * @memberof matrixserver.JoystickData
         * @instance
         */
        JoystickData.prototype.buttonDpadDown = false;

        /**
         * JoystickData buttonDpadRight.
         * @member {boolean} buttonDpadRight
         * @memberof matrixserver.JoystickData
         * @instance
         */
        JoystickData.prototype.buttonDpadRight = false;

        /**
         * Creates a new JoystickData instance using the specified properties.
         * @function create
         * @memberof matrixserver.JoystickData
         * @static
         * @param {matrixserver.IJoystickData=} [properties] Properties to set
         * @returns {matrixserver.JoystickData} JoystickData instance
         */
        JoystickData.create = function create(properties) {
            return new JoystickData(properties);
        };

        /**
         * Encodes the specified JoystickData message. Does not implicitly {@link matrixserver.JoystickData.verify|verify} messages.
         * @function encode
         * @memberof matrixserver.JoystickData
         * @static
         * @param {matrixserver.IJoystickData} message JoystickData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoystickData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.joystickID != null && message.hasOwnProperty("joystickID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.joystickID);
            if (message.axisX != null && message.hasOwnProperty("axisX"))
                writer.uint32(/* id 2, wireType 5 =*/21).float(message.axisX);
            if (message.axisY != null && message.hasOwnProperty("axisY"))
                writer.uint32(/* id 3, wireType 5 =*/29).float(message.axisY);
            if (message.buttonA != null && message.hasOwnProperty("buttonA"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.buttonA);
            if (message.buttonB != null && message.hasOwnProperty("buttonB"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.buttonB);
            if (message.buttonX != null && message.hasOwnProperty("buttonX"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.buttonX);
            if (message.buttonY != null && message.hasOwnProperty("buttonY"))
                writer.uint32(/* id 7, wireType 0 =*/56).bool(message.buttonY);
            if (message.buttonR != null && message.hasOwnProperty("buttonR"))
                writer.uint32(/* id 8, wireType 0 =*/64).bool(message.buttonR);
            if (message.buttonL != null && message.hasOwnProperty("buttonL"))
                writer.uint32(/* id 9, wireType 0 =*/72).bool(message.buttonL);
            if (message.buttonStart != null && message.hasOwnProperty("buttonStart"))
                writer.uint32(/* id 10, wireType 0 =*/80).bool(message.buttonStart);
            if (message.buttonSelect != null && message.hasOwnProperty("buttonSelect"))
                writer.uint32(/* id 11, wireType 0 =*/88).bool(message.buttonSelect);
            if (message.rightAxisX != null && message.hasOwnProperty("rightAxisX"))
                writer.uint32(/* id 12, wireType 5 =*/101).float(message.rightAxisX);
            if (message.rightAxisY != null && message.hasOwnProperty("rightAxisY"))
                writer.uint32(/* id 13, wireType 5 =*/109).float(message.rightAxisY);
            if (message.rightTrigger != null && message.hasOwnProperty("rightTrigger"))
                writer.uint32(/* id 14, wireType 5 =*/117).float(message.rightTrigger);
            if (message.leftTrigger != null && message.hasOwnProperty("leftTrigger"))
                writer.uint32(/* id 15, wireType 5 =*/125).float(message.leftTrigger);
            if (message.rightStickButton != null && message.hasOwnProperty("rightStickButton"))
                writer.uint32(/* id 16, wireType 0 =*/128).bool(message.rightStickButton);
            if (message.leftStickButton != null && message.hasOwnProperty("leftStickButton"))
                writer.uint32(/* id 17, wireType 0 =*/136).bool(message.leftStickButton);
            if (message.buttonDpadUp != null && message.hasOwnProperty("buttonDpadUp"))
                writer.uint32(/* id 18, wireType 0 =*/144).bool(message.buttonDpadUp);
            if (message.buttonDpadLeft != null && message.hasOwnProperty("buttonDpadLeft"))
                writer.uint32(/* id 19, wireType 0 =*/152).bool(message.buttonDpadLeft);
            if (message.buttonDpadDown != null && message.hasOwnProperty("buttonDpadDown"))
                writer.uint32(/* id 20, wireType 0 =*/160).bool(message.buttonDpadDown);
            if (message.buttonDpadRight != null && message.hasOwnProperty("buttonDpadRight"))
                writer.uint32(/* id 21, wireType 0 =*/168).bool(message.buttonDpadRight);
            return writer;
        };

        /**
         * Encodes the specified JoystickData message, length delimited. Does not implicitly {@link matrixserver.JoystickData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof matrixserver.JoystickData
         * @static
         * @param {matrixserver.IJoystickData} message JoystickData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoystickData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JoystickData message from the specified reader or buffer.
         * @function decode
         * @memberof matrixserver.JoystickData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {matrixserver.JoystickData} JoystickData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoystickData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.matrixserver.JoystickData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.joystickID = reader.int32();
                    break;
                case 2:
                    message.axisX = reader.float();
                    break;
                case 3:
                    message.axisY = reader.float();
                    break;
                case 4:
                    message.buttonA = reader.bool();
                    break;
                case 5:
                    message.buttonB = reader.bool();
                    break;
                case 6:
                    message.buttonX = reader.bool();
                    break;
                case 7:
                    message.buttonY = reader.bool();
                    break;
                case 8:
                    message.buttonR = reader.bool();
                    break;
                case 9:
                    message.buttonL = reader.bool();
                    break;
                case 10:
                    message.buttonStart = reader.bool();
                    break;
                case 11:
                    message.buttonSelect = reader.bool();
                    break;
                case 12:
                    message.rightAxisX = reader.float();
                    break;
                case 13:
                    message.rightAxisY = reader.float();
                    break;
                case 14:
                    message.rightTrigger = reader.float();
                    break;
                case 15:
                    message.leftTrigger = reader.float();
                    break;
                case 16:
                    message.rightStickButton = reader.bool();
                    break;
                case 17:
                    message.leftStickButton = reader.bool();
                    break;
                case 18:
                    message.buttonDpadUp = reader.bool();
                    break;
                case 19:
                    message.buttonDpadLeft = reader.bool();
                    break;
                case 20:
                    message.buttonDpadDown = reader.bool();
                    break;
                case 21:
                    message.buttonDpadRight = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a JoystickData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof matrixserver.JoystickData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {matrixserver.JoystickData} JoystickData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoystickData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JoystickData message.
         * @function verify
         * @memberof matrixserver.JoystickData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JoystickData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.joystickID != null && message.hasOwnProperty("joystickID"))
                if (!$util.isInteger(message.joystickID))
                    return "joystickID: integer expected";
            if (message.axisX != null && message.hasOwnProperty("axisX"))
                if (typeof message.axisX !== "number")
                    return "axisX: number expected";
            if (message.axisY != null && message.hasOwnProperty("axisY"))
                if (typeof message.axisY !== "number")
                    return "axisY: number expected";
            if (message.buttonA != null && message.hasOwnProperty("buttonA"))
                if (typeof message.buttonA !== "boolean")
                    return "buttonA: boolean expected";
            if (message.buttonB != null && message.hasOwnProperty("buttonB"))
                if (typeof message.buttonB !== "boolean")
                    return "buttonB: boolean expected";
            if (message.buttonX != null && message.hasOwnProperty("buttonX"))
                if (typeof message.buttonX !== "boolean")
                    return "buttonX: boolean expected";
            if (message.buttonY != null && message.hasOwnProperty("buttonY"))
                if (typeof message.buttonY !== "boolean")
                    return "buttonY: boolean expected";
            if (message.buttonR != null && message.hasOwnProperty("buttonR"))
                if (typeof message.buttonR !== "boolean")
                    return "buttonR: boolean expected";
            if (message.buttonL != null && message.hasOwnProperty("buttonL"))
                if (typeof message.buttonL !== "boolean")
                    return "buttonL: boolean expected";
            if (message.buttonStart != null && message.hasOwnProperty("buttonStart"))
                if (typeof message.buttonStart !== "boolean")
                    return "buttonStart: boolean expected";
            if (message.buttonSelect != null && message.hasOwnProperty("buttonSelect"))
                if (typeof message.buttonSelect !== "boolean")
                    return "buttonSelect: boolean expected";
            if (message.rightAxisX != null && message.hasOwnProperty("rightAxisX"))
                if (typeof message.rightAxisX !== "number")
                    return "rightAxisX: number expected";
            if (message.rightAxisY != null && message.hasOwnProperty("rightAxisY"))
                if (typeof message.rightAxisY !== "number")
                    return "rightAxisY: number expected";
            if (message.rightTrigger != null && message.hasOwnProperty("rightTrigger"))
                if (typeof message.rightTrigger !== "number")
                    return "rightTrigger: number expected";
            if (message.leftTrigger != null && message.hasOwnProperty("leftTrigger"))
                if (typeof message.leftTrigger !== "number")
                    return "leftTrigger: number expected";
            if (message.rightStickButton != null && message.hasOwnProperty("rightStickButton"))
                if (typeof message.rightStickButton !== "boolean")
                    return "rightStickButton: boolean expected";
            if (message.leftStickButton != null && message.hasOwnProperty("leftStickButton"))
                if (typeof message.leftStickButton !== "boolean")
                    return "leftStickButton: boolean expected";
            if (message.buttonDpadUp != null && message.hasOwnProperty("buttonDpadUp"))
                if (typeof message.buttonDpadUp !== "boolean")
                    return "buttonDpadUp: boolean expected";
            if (message.buttonDpadLeft != null && message.hasOwnProperty("buttonDpadLeft"))
                if (typeof message.buttonDpadLeft !== "boolean")
                    return "buttonDpadLeft: boolean expected";
            if (message.buttonDpadDown != null && message.hasOwnProperty("buttonDpadDown"))
                if (typeof message.buttonDpadDown !== "boolean")
                    return "buttonDpadDown: boolean expected";
            if (message.buttonDpadRight != null && message.hasOwnProperty("buttonDpadRight"))
                if (typeof message.buttonDpadRight !== "boolean")
                    return "buttonDpadRight: boolean expected";
            return null;
        };

        /**
         * Creates a JoystickData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof matrixserver.JoystickData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {matrixserver.JoystickData} JoystickData
         */
        JoystickData.fromObject = function fromObject(object) {
            if (object instanceof $root.matrixserver.JoystickData)
                return object;
            var message = new $root.matrixserver.JoystickData();
            if (object.joystickID != null)
                message.joystickID = object.joystickID | 0;
            if (object.axisX != null)
                message.axisX = Number(object.axisX);
            if (object.axisY != null)
                message.axisY = Number(object.axisY);
            if (object.buttonA != null)
                message.buttonA = Boolean(object.buttonA);
            if (object.buttonB != null)
                message.buttonB = Boolean(object.buttonB);
            if (object.buttonX != null)
                message.buttonX = Boolean(object.buttonX);
            if (object.buttonY != null)
                message.buttonY = Boolean(object.buttonY);
            if (object.buttonR != null)
                message.buttonR = Boolean(object.buttonR);
            if (object.buttonL != null)
                message.buttonL = Boolean(object.buttonL);
            if (object.buttonStart != null)
                message.buttonStart = Boolean(object.buttonStart);
            if (object.buttonSelect != null)
                message.buttonSelect = Boolean(object.buttonSelect);
            if (object.rightAxisX != null)
                message.rightAxisX = Number(object.rightAxisX);
            if (object.rightAxisY != null)
                message.rightAxisY = Number(object.rightAxisY);
            if (object.rightTrigger != null)
                message.rightTrigger = Number(object.rightTrigger);
            if (object.leftTrigger != null)
                message.leftTrigger = Number(object.leftTrigger);
            if (object.rightStickButton != null)
                message.rightStickButton = Boolean(object.rightStickButton);
            if (object.leftStickButton != null)
                message.leftStickButton = Boolean(object.leftStickButton);
            if (object.buttonDpadUp != null)
                message.buttonDpadUp = Boolean(object.buttonDpadUp);
            if (object.buttonDpadLeft != null)
                message.buttonDpadLeft = Boolean(object.buttonDpadLeft);
            if (object.buttonDpadDown != null)
                message.buttonDpadDown = Boolean(object.buttonDpadDown);
            if (object.buttonDpadRight != null)
                message.buttonDpadRight = Boolean(object.buttonDpadRight);
            return message;
        };

        /**
         * Creates a plain object from a JoystickData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof matrixserver.JoystickData
         * @static
         * @param {matrixserver.JoystickData} message JoystickData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JoystickData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.joystickID = 0;
                object.axisX = 0;
                object.axisY = 0;
                object.buttonA = false;
                object.buttonB = false;
                object.buttonX = false;
                object.buttonY = false;
                object.buttonR = false;
                object.buttonL = false;
                object.buttonStart = false;
                object.buttonSelect = false;
                object.rightAxisX = 0;
                object.rightAxisY = 0;
                object.rightTrigger = 0;
                object.leftTrigger = 0;
                object.rightStickButton = false;
                object.leftStickButton = false;
                object.buttonDpadUp = false;
                object.buttonDpadLeft = false;
                object.buttonDpadDown = false;
                object.buttonDpadRight = false;
            }
            if (message.joystickID != null && message.hasOwnProperty("joystickID"))
                object.joystickID = message.joystickID;
            if (message.axisX != null && message.hasOwnProperty("axisX"))
                object.axisX = options.json && !isFinite(message.axisX) ? String(message.axisX) : message.axisX;
            if (message.axisY != null && message.hasOwnProperty("axisY"))
                object.axisY = options.json && !isFinite(message.axisY) ? String(message.axisY) : message.axisY;
            if (message.buttonA != null && message.hasOwnProperty("buttonA"))
                object.buttonA = message.buttonA;
            if (message.buttonB != null && message.hasOwnProperty("buttonB"))
                object.buttonB = message.buttonB;
            if (message.buttonX != null && message.hasOwnProperty("buttonX"))
                object.buttonX = message.buttonX;
            if (message.buttonY != null && message.hasOwnProperty("buttonY"))
                object.buttonY = message.buttonY;
            if (message.buttonR != null && message.hasOwnProperty("buttonR"))
                object.buttonR = message.buttonR;
            if (message.buttonL != null && message.hasOwnProperty("buttonL"))
                object.buttonL = message.buttonL;
            if (message.buttonStart != null && message.hasOwnProperty("buttonStart"))
                object.buttonStart = message.buttonStart;
            if (message.buttonSelect != null && message.hasOwnProperty("buttonSelect"))
                object.buttonSelect = message.buttonSelect;
            if (message.rightAxisX != null && message.hasOwnProperty("rightAxisX"))
                object.rightAxisX = options.json && !isFinite(message.rightAxisX) ? String(message.rightAxisX) : message.rightAxisX;
            if (message.rightAxisY != null && message.hasOwnProperty("rightAxisY"))
                object.rightAxisY = options.json && !isFinite(message.rightAxisY) ? String(message.rightAxisY) : message.rightAxisY;
            if (message.rightTrigger != null && message.hasOwnProperty("rightTrigger"))
                object.rightTrigger = options.json && !isFinite(message.rightTrigger) ? String(message.rightTrigger) : message.rightTrigger;
            if (message.leftTrigger != null && message.hasOwnProperty("leftTrigger"))
                object.leftTrigger = options.json && !isFinite(message.leftTrigger) ? String(message.leftTrigger) : message.leftTrigger;
            if (message.rightStickButton != null && message.hasOwnProperty("rightStickButton"))
                object.rightStickButton = message.rightStickButton;
            if (message.leftStickButton != null && message.hasOwnProperty("leftStickButton"))
                object.leftStickButton = message.leftStickButton;
            if (message.buttonDpadUp != null && message.hasOwnProperty("buttonDpadUp"))
                object.buttonDpadUp = message.buttonDpadUp;
            if (message.buttonDpadLeft != null && message.hasOwnProperty("buttonDpadLeft"))
                object.buttonDpadLeft = message.buttonDpadLeft;
            if (message.buttonDpadDown != null && message.hasOwnProperty("buttonDpadDown"))
                object.buttonDpadDown = message.buttonDpadDown;
            if (message.buttonDpadRight != null && message.hasOwnProperty("buttonDpadRight"))
                object.buttonDpadRight = message.buttonDpadRight;
            return object;
        };

        /**
         * Converts this JoystickData to JSON.
         * @function toJSON
         * @memberof matrixserver.JoystickData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JoystickData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JoystickData;
    })();

    matrixserver.ServerConfig = (function() {

        /**
         * Properties of a ServerConfig.
         * @memberof matrixserver
         * @interface IServerConfig
         * @property {Array.<matrixserver.IScreenInfo>|null} [screenInfo] ServerConfig screenInfo
         * @property {matrixserver.ServerConfig.AssemblyType|null} [assemblyType] ServerConfig assemblyType
         * @property {number|null} [globalScreenBrightness] ServerConfig globalScreenBrightness
         * @property {matrixserver.IConnection|null} [serverConnection] ServerConfig serverConnection
         * @property {string|null} [serverName] ServerConfig serverName
         */

        /**
         * Constructs a new ServerConfig.
         * @memberof matrixserver
         * @classdesc Represents a ServerConfig.
         * @implements IServerConfig
         * @constructor
         * @param {matrixserver.IServerConfig=} [properties] Properties to set
         */
        function ServerConfig(properties) {
            this.screenInfo = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ServerConfig screenInfo.
         * @member {Array.<matrixserver.IScreenInfo>} screenInfo
         * @memberof matrixserver.ServerConfig
         * @instance
         */
        ServerConfig.prototype.screenInfo = $util.emptyArray;

        /**
         * ServerConfig assemblyType.
         * @member {matrixserver.ServerConfig.AssemblyType} assemblyType
         * @memberof matrixserver.ServerConfig
         * @instance
         */
        ServerConfig.prototype.assemblyType = 0;

        /**
         * ServerConfig globalScreenBrightness.
         * @member {number} globalScreenBrightness
         * @memberof matrixserver.ServerConfig
         * @instance
         */
        ServerConfig.prototype.globalScreenBrightness = 0;

        /**
         * ServerConfig serverConnection.
         * @member {matrixserver.IConnection|null|undefined} serverConnection
         * @memberof matrixserver.ServerConfig
         * @instance
         */
        ServerConfig.prototype.serverConnection = null;

        /**
         * ServerConfig serverName.
         * @member {string} serverName
         * @memberof matrixserver.ServerConfig
         * @instance
         */
        ServerConfig.prototype.serverName = "";

        /**
         * Creates a new ServerConfig instance using the specified properties.
         * @function create
         * @memberof matrixserver.ServerConfig
         * @static
         * @param {matrixserver.IServerConfig=} [properties] Properties to set
         * @returns {matrixserver.ServerConfig} ServerConfig instance
         */
        ServerConfig.create = function create(properties) {
            return new ServerConfig(properties);
        };

        /**
         * Encodes the specified ServerConfig message. Does not implicitly {@link matrixserver.ServerConfig.verify|verify} messages.
         * @function encode
         * @memberof matrixserver.ServerConfig
         * @static
         * @param {matrixserver.IServerConfig} message ServerConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ServerConfig.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.screenInfo != null && message.screenInfo.length)
                for (var i = 0; i < message.screenInfo.length; ++i)
                    $root.matrixserver.ScreenInfo.encode(message.screenInfo[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.assemblyType != null && message.hasOwnProperty("assemblyType"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.assemblyType);
            if (message.globalScreenBrightness != null && message.hasOwnProperty("globalScreenBrightness"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.globalScreenBrightness);
            if (message.serverConnection != null && message.hasOwnProperty("serverConnection"))
                $root.matrixserver.Connection.encode(message.serverConnection, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.serverName != null && message.hasOwnProperty("serverName"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.serverName);
            return writer;
        };

        /**
         * Encodes the specified ServerConfig message, length delimited. Does not implicitly {@link matrixserver.ServerConfig.verify|verify} messages.
         * @function encodeDelimited
         * @memberof matrixserver.ServerConfig
         * @static
         * @param {matrixserver.IServerConfig} message ServerConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ServerConfig.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ServerConfig message from the specified reader or buffer.
         * @function decode
         * @memberof matrixserver.ServerConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {matrixserver.ServerConfig} ServerConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ServerConfig.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.matrixserver.ServerConfig();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.screenInfo && message.screenInfo.length))
                        message.screenInfo = [];
                    message.screenInfo.push($root.matrixserver.ScreenInfo.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.assemblyType = reader.int32();
                    break;
                case 3:
                    message.globalScreenBrightness = reader.int32();
                    break;
                case 4:
                    message.serverConnection = $root.matrixserver.Connection.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.serverName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ServerConfig message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof matrixserver.ServerConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {matrixserver.ServerConfig} ServerConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ServerConfig.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ServerConfig message.
         * @function verify
         * @memberof matrixserver.ServerConfig
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ServerConfig.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.screenInfo != null && message.hasOwnProperty("screenInfo")) {
                if (!Array.isArray(message.screenInfo))
                    return "screenInfo: array expected";
                for (var i = 0; i < message.screenInfo.length; ++i) {
                    var error = $root.matrixserver.ScreenInfo.verify(message.screenInfo[i]);
                    if (error)
                        return "screenInfo." + error;
                }
            }
            if (message.assemblyType != null && message.hasOwnProperty("assemblyType"))
                switch (message.assemblyType) {
                default:
                    return "assemblyType: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.globalScreenBrightness != null && message.hasOwnProperty("globalScreenBrightness"))
                if (!$util.isInteger(message.globalScreenBrightness))
                    return "globalScreenBrightness: integer expected";
            if (message.serverConnection != null && message.hasOwnProperty("serverConnection")) {
                var error = $root.matrixserver.Connection.verify(message.serverConnection);
                if (error)
                    return "serverConnection." + error;
            }
            if (message.serverName != null && message.hasOwnProperty("serverName"))
                if (!$util.isString(message.serverName))
                    return "serverName: string expected";
            return null;
        };

        /**
         * Creates a ServerConfig message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof matrixserver.ServerConfig
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {matrixserver.ServerConfig} ServerConfig
         */
        ServerConfig.fromObject = function fromObject(object) {
            if (object instanceof $root.matrixserver.ServerConfig)
                return object;
            var message = new $root.matrixserver.ServerConfig();
            if (object.screenInfo) {
                if (!Array.isArray(object.screenInfo))
                    throw TypeError(".matrixserver.ServerConfig.screenInfo: array expected");
                message.screenInfo = [];
                for (var i = 0; i < object.screenInfo.length; ++i) {
                    if (typeof object.screenInfo[i] !== "object")
                        throw TypeError(".matrixserver.ServerConfig.screenInfo: object expected");
                    message.screenInfo[i] = $root.matrixserver.ScreenInfo.fromObject(object.screenInfo[i]);
                }
            }
            switch (object.assemblyType) {
            case "defaultAssemblyType":
            case 0:
                message.assemblyType = 0;
                break;
            case "flat":
            case 1:
                message.assemblyType = 1;
                break;
            case "cube":
            case 2:
                message.assemblyType = 2;
                break;
            }
            if (object.globalScreenBrightness != null)
                message.globalScreenBrightness = object.globalScreenBrightness | 0;
            if (object.serverConnection != null) {
                if (typeof object.serverConnection !== "object")
                    throw TypeError(".matrixserver.ServerConfig.serverConnection: object expected");
                message.serverConnection = $root.matrixserver.Connection.fromObject(object.serverConnection);
            }
            if (object.serverName != null)
                message.serverName = String(object.serverName);
            return message;
        };

        /**
         * Creates a plain object from a ServerConfig message. Also converts values to other types if specified.
         * @function toObject
         * @memberof matrixserver.ServerConfig
         * @static
         * @param {matrixserver.ServerConfig} message ServerConfig
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ServerConfig.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.screenInfo = [];
            if (options.defaults) {
                object.assemblyType = options.enums === String ? "defaultAssemblyType" : 0;
                object.globalScreenBrightness = 0;
                object.serverConnection = null;
                object.serverName = "";
            }
            if (message.screenInfo && message.screenInfo.length) {
                object.screenInfo = [];
                for (var j = 0; j < message.screenInfo.length; ++j)
                    object.screenInfo[j] = $root.matrixserver.ScreenInfo.toObject(message.screenInfo[j], options);
            }
            if (message.assemblyType != null && message.hasOwnProperty("assemblyType"))
                object.assemblyType = options.enums === String ? $root.matrixserver.ServerConfig.AssemblyType[message.assemblyType] : message.assemblyType;
            if (message.globalScreenBrightness != null && message.hasOwnProperty("globalScreenBrightness"))
                object.globalScreenBrightness = message.globalScreenBrightness;
            if (message.serverConnection != null && message.hasOwnProperty("serverConnection"))
                object.serverConnection = $root.matrixserver.Connection.toObject(message.serverConnection, options);
            if (message.serverName != null && message.hasOwnProperty("serverName"))
                object.serverName = message.serverName;
            return object;
        };

        /**
         * Converts this ServerConfig to JSON.
         * @function toJSON
         * @memberof matrixserver.ServerConfig
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ServerConfig.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * AssemblyType enum.
         * @name matrixserver.ServerConfig.AssemblyType
         * @enum {string}
         * @property {number} defaultAssemblyType=0 defaultAssemblyType value
         * @property {number} flat=1 flat value
         * @property {number} cube=2 cube value
         */
        ServerConfig.AssemblyType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "defaultAssemblyType"] = 0;
            values[valuesById[1] = "flat"] = 1;
            values[valuesById[2] = "cube"] = 2;
            return values;
        })();

        return ServerConfig;
    })();

    matrixserver.Connection = (function() {

        /**
         * Properties of a Connection.
         * @memberof matrixserver
         * @interface IConnection
         * @property {string|null} [serverAddress] Connection serverAddress
         * @property {string|null} [serverPort] Connection serverPort
         * @property {matrixserver.Connection.ConnectionType|null} [connectionType] Connection connectionType
         */

        /**
         * Constructs a new Connection.
         * @memberof matrixserver
         * @classdesc Represents a Connection.
         * @implements IConnection
         * @constructor
         * @param {matrixserver.IConnection=} [properties] Properties to set
         */
        function Connection(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Connection serverAddress.
         * @member {string} serverAddress
         * @memberof matrixserver.Connection
         * @instance
         */
        Connection.prototype.serverAddress = "";

        /**
         * Connection serverPort.
         * @member {string} serverPort
         * @memberof matrixserver.Connection
         * @instance
         */
        Connection.prototype.serverPort = "";

        /**
         * Connection connectionType.
         * @member {matrixserver.Connection.ConnectionType} connectionType
         * @memberof matrixserver.Connection
         * @instance
         */
        Connection.prototype.connectionType = 0;

        /**
         * Creates a new Connection instance using the specified properties.
         * @function create
         * @memberof matrixserver.Connection
         * @static
         * @param {matrixserver.IConnection=} [properties] Properties to set
         * @returns {matrixserver.Connection} Connection instance
         */
        Connection.create = function create(properties) {
            return new Connection(properties);
        };

        /**
         * Encodes the specified Connection message. Does not implicitly {@link matrixserver.Connection.verify|verify} messages.
         * @function encode
         * @memberof matrixserver.Connection
         * @static
         * @param {matrixserver.IConnection} message Connection message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Connection.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.serverAddress != null && message.hasOwnProperty("serverAddress"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.serverAddress);
            if (message.serverPort != null && message.hasOwnProperty("serverPort"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.serverPort);
            if (message.connectionType != null && message.hasOwnProperty("connectionType"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.connectionType);
            return writer;
        };

        /**
         * Encodes the specified Connection message, length delimited. Does not implicitly {@link matrixserver.Connection.verify|verify} messages.
         * @function encodeDelimited
         * @memberof matrixserver.Connection
         * @static
         * @param {matrixserver.IConnection} message Connection message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Connection.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Connection message from the specified reader or buffer.
         * @function decode
         * @memberof matrixserver.Connection
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {matrixserver.Connection} Connection
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Connection.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.matrixserver.Connection();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.serverAddress = reader.string();
                    break;
                case 2:
                    message.serverPort = reader.string();
                    break;
                case 3:
                    message.connectionType = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Connection message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof matrixserver.Connection
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {matrixserver.Connection} Connection
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Connection.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Connection message.
         * @function verify
         * @memberof matrixserver.Connection
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Connection.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.serverAddress != null && message.hasOwnProperty("serverAddress"))
                if (!$util.isString(message.serverAddress))
                    return "serverAddress: string expected";
            if (message.serverPort != null && message.hasOwnProperty("serverPort"))
                if (!$util.isString(message.serverPort))
                    return "serverPort: string expected";
            if (message.connectionType != null && message.hasOwnProperty("connectionType"))
                switch (message.connectionType) {
                default:
                    return "connectionType: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            return null;
        };

        /**
         * Creates a Connection message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof matrixserver.Connection
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {matrixserver.Connection} Connection
         */
        Connection.fromObject = function fromObject(object) {
            if (object instanceof $root.matrixserver.Connection)
                return object;
            var message = new $root.matrixserver.Connection();
            if (object.serverAddress != null)
                message.serverAddress = String(object.serverAddress);
            if (object.serverPort != null)
                message.serverPort = String(object.serverPort);
            switch (object.connectionType) {
            case "defaultConnectionType":
            case 0:
                message.connectionType = 0;
                break;
            case "tcp":
            case 1:
                message.connectionType = 1;
                break;
            case "udp":
            case 2:
                message.connectionType = 2;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a Connection message. Also converts values to other types if specified.
         * @function toObject
         * @memberof matrixserver.Connection
         * @static
         * @param {matrixserver.Connection} message Connection
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Connection.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.serverAddress = "";
                object.serverPort = "";
                object.connectionType = options.enums === String ? "defaultConnectionType" : 0;
            }
            if (message.serverAddress != null && message.hasOwnProperty("serverAddress"))
                object.serverAddress = message.serverAddress;
            if (message.serverPort != null && message.hasOwnProperty("serverPort"))
                object.serverPort = message.serverPort;
            if (message.connectionType != null && message.hasOwnProperty("connectionType"))
                object.connectionType = options.enums === String ? $root.matrixserver.Connection.ConnectionType[message.connectionType] : message.connectionType;
            return object;
        };

        /**
         * Converts this Connection to JSON.
         * @function toJSON
         * @memberof matrixserver.Connection
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Connection.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * ConnectionType enum.
         * @name matrixserver.Connection.ConnectionType
         * @enum {string}
         * @property {number} defaultConnectionType=0 defaultConnectionType value
         * @property {number} tcp=1 tcp value
         * @property {number} udp=2 udp value
         */
        Connection.ConnectionType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "defaultConnectionType"] = 0;
            values[valuesById[1] = "tcp"] = 1;
            values[valuesById[2] = "udp"] = 2;
            return values;
        })();

        return Connection;
    })();

    matrixserver.ScreenInfo = (function() {

        /**
         * Properties of a ScreenInfo.
         * @memberof matrixserver
         * @interface IScreenInfo
         * @property {number|null} [screenID] ScreenInfo screenID
         * @property {number|null} [width] ScreenInfo width
         * @property {number|null} [height] ScreenInfo height
         * @property {boolean|null} [available] ScreenInfo available
         * @property {matrixserver.ScreenInfo.ScreenOrientation|null} [screenOrientation] ScreenInfo screenOrientation
         * @property {matrixserver.ScreenInfo.ScreenRotation|null} [screenRotation] ScreenInfo screenRotation
         * @property {number|null} [offsetX] ScreenInfo offsetX
         * @property {number|null} [offsetY] ScreenInfo offsetY
         */

        /**
         * Constructs a new ScreenInfo.
         * @memberof matrixserver
         * @classdesc Represents a ScreenInfo.
         * @implements IScreenInfo
         * @constructor
         * @param {matrixserver.IScreenInfo=} [properties] Properties to set
         */
        function ScreenInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ScreenInfo screenID.
         * @member {number} screenID
         * @memberof matrixserver.ScreenInfo
         * @instance
         */
        ScreenInfo.prototype.screenID = 0;

        /**
         * ScreenInfo width.
         * @member {number} width
         * @memberof matrixserver.ScreenInfo
         * @instance
         */
        ScreenInfo.prototype.width = 0;

        /**
         * ScreenInfo height.
         * @member {number} height
         * @memberof matrixserver.ScreenInfo
         * @instance
         */
        ScreenInfo.prototype.height = 0;

        /**
         * ScreenInfo available.
         * @member {boolean} available
         * @memberof matrixserver.ScreenInfo
         * @instance
         */
        ScreenInfo.prototype.available = false;

        /**
         * ScreenInfo screenOrientation.
         * @member {matrixserver.ScreenInfo.ScreenOrientation} screenOrientation
         * @memberof matrixserver.ScreenInfo
         * @instance
         */
        ScreenInfo.prototype.screenOrientation = 0;

        /**
         * ScreenInfo screenRotation.
         * @member {matrixserver.ScreenInfo.ScreenRotation} screenRotation
         * @memberof matrixserver.ScreenInfo
         * @instance
         */
        ScreenInfo.prototype.screenRotation = 0;

        /**
         * ScreenInfo offsetX.
         * @member {number} offsetX
         * @memberof matrixserver.ScreenInfo
         * @instance
         */
        ScreenInfo.prototype.offsetX = 0;

        /**
         * ScreenInfo offsetY.
         * @member {number} offsetY
         * @memberof matrixserver.ScreenInfo
         * @instance
         */
        ScreenInfo.prototype.offsetY = 0;

        /**
         * Creates a new ScreenInfo instance using the specified properties.
         * @function create
         * @memberof matrixserver.ScreenInfo
         * @static
         * @param {matrixserver.IScreenInfo=} [properties] Properties to set
         * @returns {matrixserver.ScreenInfo} ScreenInfo instance
         */
        ScreenInfo.create = function create(properties) {
            return new ScreenInfo(properties);
        };

        /**
         * Encodes the specified ScreenInfo message. Does not implicitly {@link matrixserver.ScreenInfo.verify|verify} messages.
         * @function encode
         * @memberof matrixserver.ScreenInfo
         * @static
         * @param {matrixserver.IScreenInfo} message ScreenInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ScreenInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.screenID != null && message.hasOwnProperty("screenID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.screenID);
            if (message.width != null && message.hasOwnProperty("width"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.width);
            if (message.height != null && message.hasOwnProperty("height"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.height);
            if (message.available != null && message.hasOwnProperty("available"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.available);
            if (message.screenOrientation != null && message.hasOwnProperty("screenOrientation"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.screenOrientation);
            if (message.screenRotation != null && message.hasOwnProperty("screenRotation"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.screenRotation);
            if (message.offsetX != null && message.hasOwnProperty("offsetX"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.offsetX);
            if (message.offsetY != null && message.hasOwnProperty("offsetY"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.offsetY);
            return writer;
        };

        /**
         * Encodes the specified ScreenInfo message, length delimited. Does not implicitly {@link matrixserver.ScreenInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof matrixserver.ScreenInfo
         * @static
         * @param {matrixserver.IScreenInfo} message ScreenInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ScreenInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ScreenInfo message from the specified reader or buffer.
         * @function decode
         * @memberof matrixserver.ScreenInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {matrixserver.ScreenInfo} ScreenInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ScreenInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.matrixserver.ScreenInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.screenID = reader.int32();
                    break;
                case 2:
                    message.width = reader.int32();
                    break;
                case 3:
                    message.height = reader.int32();
                    break;
                case 4:
                    message.available = reader.bool();
                    break;
                case 5:
                    message.screenOrientation = reader.int32();
                    break;
                case 6:
                    message.screenRotation = reader.int32();
                    break;
                case 7:
                    message.offsetX = reader.int32();
                    break;
                case 8:
                    message.offsetY = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ScreenInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof matrixserver.ScreenInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {matrixserver.ScreenInfo} ScreenInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ScreenInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ScreenInfo message.
         * @function verify
         * @memberof matrixserver.ScreenInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ScreenInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.screenID != null && message.hasOwnProperty("screenID"))
                if (!$util.isInteger(message.screenID))
                    return "screenID: integer expected";
            if (message.width != null && message.hasOwnProperty("width"))
                if (!$util.isInteger(message.width))
                    return "width: integer expected";
            if (message.height != null && message.hasOwnProperty("height"))
                if (!$util.isInteger(message.height))
                    return "height: integer expected";
            if (message.available != null && message.hasOwnProperty("available"))
                if (typeof message.available !== "boolean")
                    return "available: boolean expected";
            if (message.screenOrientation != null && message.hasOwnProperty("screenOrientation"))
                switch (message.screenOrientation) {
                default:
                    return "screenOrientation: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 10:
                    break;
                }
            if (message.screenRotation != null && message.hasOwnProperty("screenRotation"))
                switch (message.screenRotation) {
                default:
                    return "screenRotation: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.offsetX != null && message.hasOwnProperty("offsetX"))
                if (!$util.isInteger(message.offsetX))
                    return "offsetX: integer expected";
            if (message.offsetY != null && message.hasOwnProperty("offsetY"))
                if (!$util.isInteger(message.offsetY))
                    return "offsetY: integer expected";
            return null;
        };

        /**
         * Creates a ScreenInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof matrixserver.ScreenInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {matrixserver.ScreenInfo} ScreenInfo
         */
        ScreenInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.matrixserver.ScreenInfo)
                return object;
            var message = new $root.matrixserver.ScreenInfo();
            if (object.screenID != null)
                message.screenID = object.screenID | 0;
            if (object.width != null)
                message.width = object.width | 0;
            if (object.height != null)
                message.height = object.height | 0;
            if (object.available != null)
                message.available = Boolean(object.available);
            switch (object.screenOrientation) {
            case "defaultScreenOrientation":
            case 0:
                message.screenOrientation = 0;
                break;
            case "front":
            case 1:
                message.screenOrientation = 1;
                break;
            case "right":
            case 2:
                message.screenOrientation = 2;
                break;
            case "back":
            case 3:
                message.screenOrientation = 3;
                break;
            case "left":
            case 4:
                message.screenOrientation = 4;
                break;
            case "top":
            case 5:
                message.screenOrientation = 5;
                break;
            case "bottom":
            case 6:
                message.screenOrientation = 6;
                break;
            case "anyScreen":
            case 10:
                message.screenOrientation = 10;
                break;
            }
            switch (object.screenRotation) {
            case "rot0":
            case 0:
                message.screenRotation = 0;
                break;
            case "rot90":
            case 1:
                message.screenRotation = 1;
                break;
            case "rot180":
            case 2:
                message.screenRotation = 2;
                break;
            case "rot270":
            case 3:
                message.screenRotation = 3;
                break;
            }
            if (object.offsetX != null)
                message.offsetX = object.offsetX | 0;
            if (object.offsetY != null)
                message.offsetY = object.offsetY | 0;
            return message;
        };

        /**
         * Creates a plain object from a ScreenInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof matrixserver.ScreenInfo
         * @static
         * @param {matrixserver.ScreenInfo} message ScreenInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ScreenInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.screenID = 0;
                object.width = 0;
                object.height = 0;
                object.available = false;
                object.screenOrientation = options.enums === String ? "defaultScreenOrientation" : 0;
                object.screenRotation = options.enums === String ? "rot0" : 0;
                object.offsetX = 0;
                object.offsetY = 0;
            }
            if (message.screenID != null && message.hasOwnProperty("screenID"))
                object.screenID = message.screenID;
            if (message.width != null && message.hasOwnProperty("width"))
                object.width = message.width;
            if (message.height != null && message.hasOwnProperty("height"))
                object.height = message.height;
            if (message.available != null && message.hasOwnProperty("available"))
                object.available = message.available;
            if (message.screenOrientation != null && message.hasOwnProperty("screenOrientation"))
                object.screenOrientation = options.enums === String ? $root.matrixserver.ScreenInfo.ScreenOrientation[message.screenOrientation] : message.screenOrientation;
            if (message.screenRotation != null && message.hasOwnProperty("screenRotation"))
                object.screenRotation = options.enums === String ? $root.matrixserver.ScreenInfo.ScreenRotation[message.screenRotation] : message.screenRotation;
            if (message.offsetX != null && message.hasOwnProperty("offsetX"))
                object.offsetX = message.offsetX;
            if (message.offsetY != null && message.hasOwnProperty("offsetY"))
                object.offsetY = message.offsetY;
            return object;
        };

        /**
         * Converts this ScreenInfo to JSON.
         * @function toJSON
         * @memberof matrixserver.ScreenInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ScreenInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * ScreenOrientation enum.
         * @name matrixserver.ScreenInfo.ScreenOrientation
         * @enum {string}
         * @property {number} defaultScreenOrientation=0 defaultScreenOrientation value
         * @property {number} front=1 front value
         * @property {number} right=2 right value
         * @property {number} back=3 back value
         * @property {number} left=4 left value
         * @property {number} top=5 top value
         * @property {number} bottom=6 bottom value
         * @property {number} anyScreen=10 anyScreen value
         */
        ScreenInfo.ScreenOrientation = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "defaultScreenOrientation"] = 0;
            values[valuesById[1] = "front"] = 1;
            values[valuesById[2] = "right"] = 2;
            values[valuesById[3] = "back"] = 3;
            values[valuesById[4] = "left"] = 4;
            values[valuesById[5] = "top"] = 5;
            values[valuesById[6] = "bottom"] = 6;
            values[valuesById[10] = "anyScreen"] = 10;
            return values;
        })();

        /**
         * ScreenRotation enum.
         * @name matrixserver.ScreenInfo.ScreenRotation
         * @enum {string}
         * @property {number} rot0=0 rot0 value
         * @property {number} rot90=1 rot90 value
         * @property {number} rot180=2 rot180 value
         * @property {number} rot270=3 rot270 value
         */
        ScreenInfo.ScreenRotation = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "rot0"] = 0;
            values[valuesById[1] = "rot90"] = 1;
            values[valuesById[2] = "rot180"] = 2;
            values[valuesById[3] = "rot270"] = 3;
            return values;
        })();

        return ScreenInfo;
    })();

    return matrixserver;
})();

module.exports = $root;
