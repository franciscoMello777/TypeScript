"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Garragem = void 0;
var rl = require('readline-sync');
var Garragem = /** @class */ (function () {
    function Garragem() {
        this.carros = [];
    }
    Garragem.prototype.addCarros = function (carro) {
        this.carros.push(carro);
        if (this.carros.length >= 10) {
            console.log("A garagem está cheia");
        }
        else {
            console.log("Carro adicionado com sucesso");
        }
    };
    Garragem.prototype.getCarros = function () {
        for (var i = 0; i < this.carros.length; i++) {
        }
    };
    return Garragem;
}());
exports.Garragem = Garragem;
