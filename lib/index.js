"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapEnv = void 0;
function keyExists(key) {
    return !(process.env[key] === undefined || (process.env[key] && process.env[key].toString().trim() === ''));
}
var MapEnv = /** @class */ (function () {
    function MapEnv() {
    }
    MapEnv.get = function (key) {
        if (!keyExists(key)) {
            throw new Error("A vari\u00E1vel de ambiente '" + key + "' n\u00E3o est\u00E1 definida.");
        }
        return JSON.parse(process.env[key].toString());
    };
    return MapEnv;
}());
exports.MapEnv = MapEnv;
