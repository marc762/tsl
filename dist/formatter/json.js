"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Json = void 0;
var Json = /** @class */ (function () {
    function Json() {
    }
    Json.prototype.format = function (record) {
        var jsonRecord = {
            message: record.message,
            context: record.context,
        };
        return JSON.stringify(jsonRecord);
    };
    return Json;
}());
exports.Json = Json;
