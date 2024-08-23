"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Monstro = void 0;
var Monstro = /** @class */ (function () {
    function Monstro(nome) {
        this.nome = nome;
        this.forca = 50;
        this.saude = 10;
    }
    Monstro.prototype.atacar = function () {
        console.log("".concat(this.nome, " ataca com ").concat(this.forca, " de dano! "));
    };
    Monstro.prototype.recebeDano = function (dano) {
        this.saude -= dano;
    };
    Monstro.prototype.status = function () {
        console.log("O monstro ".concat(this.nome, " tem ").concat(this.saude, " de vida! "));
    };
    return Monstro;
}());
exports.Monstro = Monstro;
