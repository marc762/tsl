'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.Console = void 0;
var Console = /** @class */ (function () {
    function Console() {
    }
    Console.prototype.handle = function (record, formatter) {
        process.stdout.write(formatter.format(record) + "\n");
        // TODO: handle stderr
    };
    return Console;
}());
exports.Console = Console;
