"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = void 0;
var Text = /** @class */ (function () {
    function Text() {
    }
    Text.prototype.format = function (record) {
        return record.message;
    };
    return Text;
}());
exports.Text = Text;
