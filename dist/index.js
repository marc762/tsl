'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = exports.init = void 0;
var console_1 = require("./handler/console");
var text_1 = require("./formatter/text");
var record_1 = require("./record");
var handler = new console_1.Console();
var formatter = new text_1.Text();
function init(options) {
    if (options.handler) {
        handler = options.handler;
    }
    if (options.formatter) {
        formatter = options.formatter;
    }
}
exports.init = init;
function log(level, message, context) {
    handler.handle(new record_1.Record(message, context), formatter);
}
exports.log = log;
