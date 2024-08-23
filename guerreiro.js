"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guerreiro = void 0;
var Guerreiro = /** @class */ (function () {
    function Guerreiro(nome, tipo, forca) {
        this.nome = nome;
        this.tipo = tipo;
        this.forca = forca;
        this.saude = 100;
    }
    Guerreiro.prototype.ataca = function (meuMonstro) {
        var dano = this.forca;
        meuMonstro.recebeDano(this.forca);
        console.log("".concat(this.nome, " atacou com ").concat(this.forca, " de dano! "));
    };
    Guerreiro.prototype.recebeDano = function (dano) {
        this.saude -= dano;
    };
    Guerreiro.prototype.status = function () {
        console.log("O guerreiro ".concat(this.nome, " tem ").concat(this.saude, " de vida! "));
    };
    return Guerreiro;
}());
exports.Guerreiro = Guerreiro;
