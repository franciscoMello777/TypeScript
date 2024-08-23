"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
transpilar = typescript
interpilar = javascript
compilar = java

como tranpilar = npx tsc index.ts

 */
var reader = require('readline-sync');
var Carro = /** @class */ (function () {
    function Carro(rodas, motor, cor, modelo, marca, km) {
        this.rodas = rodas;
        this.motor = motor;
        this.cor = cor;
        this.modelo = modelo;
        this.marca = marca;
        this.km = km;
    }
    Carro.prototype.acelerar = function () {
        console.log("O ".concat(this.modelo, " chegou a ").concat(this.km, " km/h"));
    };
    Carro.prototype.dirigir = function () {
        console.log("Estou dirigindo meu ".concat(this.marca, " ").concat(this.modelo, " "));
    };
    Carro.prototype.frear = function () {
        console.log("Freiando");
    };
    return Carro;
}());
var meuCarro = new Carro(15, 2.0, "azul", "Fusca", "volkswagen", 200);
meuCarro.acelerar();
meuCarro.dirigir();
meuCarro.frear();
var rodas = reader.questionInt("qual o aro do carro?");
var motor = reader.questionInt("qual o motor do carro?");
var cor = reader.question("qual a cor do carro?");
var modelo = reader.question("qual o modelo do carro?");
var marca = reader.question("qual a marca do carro?");
var km = reader.questionInt("qual o km maximo do carro?");
var novoCarro = new Carro(rodas, motor, cor, modelo, marca, km);
