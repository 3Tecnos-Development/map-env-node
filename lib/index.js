"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapEnv = void 0;
/**
 * MapEnv -> Class that provide the mapping of environment variables easy
 */
var MapEnv = /** @class */ (function () {
    function MapEnv() {
    }
    /**
     * Method to check is exists the environment variable
     * @param {string} key variable name
     */
    MapEnv.keyExists = function (key) {
        return !(process.env[key] === undefined ||
            (process.env[key] && process.env[key].toString().trim() === ""));
    };
    /**
     * Method to get the value from environment variable
     * @param {string} key variable name
     */
    MapEnv.get = function (key) {
        if (!this.keyExists(key)) {
            throw new Error("The environment variable '" + key + "' is not defined.");
        }
        try {
            return JSON.parse(process.env[key].toString());
        }
        catch (_a) {
            throw new Error("The environment variable '" + key + "' is not a json format.");
        }
    };
    return MapEnv;
}());
exports.MapEnv = MapEnv;
