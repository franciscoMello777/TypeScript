"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Voo = void 0;
var Voo = /** @class */ (function () {
    function Voo(numeroVoo, data) {
        this.cadeira = this.criarVoo();
        this.numeroVoo = numeroVoo;
        this.data = data;
    }
    Voo.prototype.criarVoo = function () {
        var cadeira = [];
        for (var i = 0; i < 101; i++) {
            cadeira.push(i);
        }
        return cadeira;
    };
    Voo.prototype.proximoLivre = function () {
        for (var i = 0; i < 100; i++) {
            if (this.cadeira[i] == 0) {
                console.log(i + 1);
            }
        }
    };
    Voo.prototype.verifica = function (cadeira) {
        if (this.cadeira[cadeira] == 0) {
            console.log(true);
        }
    };
    Voo.prototype.ocupa = function (cadeira) {
        this.cadeira[cadeira] = 1;
    };
    Voo.prototype.vagas = function () {
        var vagas = 100;
        return vagas;
    };
    Voo.prototype.getVoo = function () {
        console.log(this.numeroVoo, this.data);
    };
    Voo.prototype.getData = function () {
        console.log(this.data);
    };
    Voo.prototype.clone = function () {
        return new Voo(this.numeroVoo, this.data);
    };
    return Voo;
}());
exports.Voo = Voo;
var vooUm = new Voo("12a12", "09/08/24");
console.log(vooUm.clone());
vooUm.proximoLivre();
vooUm.verifica(87);
