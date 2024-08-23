"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contador = void 0;
var Contador = /** @class */ (function () {
    function Contador(num) {
        this.num = num;
    }
    Contador.prototype.zerar = function () {
        this.num = 0;
        console.log(this.num);
    };
    Contador.prototype.incrementar = function () {
        this.num += 1;
        console.log(this.num);
    };
    Contador.prototype.valor = function () {
        return this.num;
    };
    return Contador;
}());
exports.Contador = Contador;
