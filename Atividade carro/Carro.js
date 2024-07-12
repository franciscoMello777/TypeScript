"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Garragem = exports.Carro = void 0;
var rl = require('readline-sync');
var Carro = /** @class */ (function () {
    function Carro(carro, gasolina, marca, kmL) {
        this.carro = carro;
        this.gasolina = gasolina;
        this.marca = marca;
        this.kmL = kmL;
    }
    Carro.prototype.andar = function (km) {
        var anda = this.gasolina - (km / this.kmL);
        if (anda <= 0) {
            console.log("O carro não pode andar");
        }
        else {
            this.gasolina = anda;
            console.log("Sobrou ".concat(this.gasolina, " litros de gasosa"));
        }
    };
    Carro.prototype.getCarro = function () {
        console.log("Carro: ".concat(this.carro, " \nMarca: ").concat(this.marca, " \nGasolina: ").concat(this.gasolina, " \nkmL: ").concat(this.kmL));
    };
    Carro.prototype.abastecer = function (valor) {
        this.gasolina += valor;
    };
    Carro.prototype.setGasolina = function () {
        var carroUp = rl.question('qual e o carro? ');
        var marcaUp = rl.question('Qual é a marca do carro? ');
        var gasolinaUp = rl.questionInt('Quanto de gasolina voce tem? ');
        var kmLUp = rl.questionInt('Quantos km/L seu carro faz? ');
        this.carro = carroUp;
        this.marca = marcaUp;
        this.gasolina = gasolinaUp;
        this.kmL = kmLUp;
    };
    return Carro;
}());
exports.Carro = Carro;
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
