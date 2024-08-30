"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.numeroComplexo = void 0;
var rl = require('readline-sync');
var numeroComplexo = /** @class */ (function () {
    function numeroComplexo(real, imaginario) {
        this.real = real;
        this.imaginario = imaginario;
    }
    numeroComplexo.prototype.getNC = function () {
        console.log("O n\u00FAmero complexo \u00E9: ".concat(this.real, " + ").concat(this.imaginario));
    };
    numeroComplexo.prototype.setNC = function () {
        this.real = rl.questionInt('adicione o numero real: ');
        this.imaginario = rl.questionInt('adicione o numero imaginario: ');
    };
    numeroComplexo.prototype.somar = function (outroComplexo) {
        var real = this.real + outroComplexo.real;
        var imaginario = this.imaginario + outroComplexo.imaginario;
        return "O resultado da soma \u00E9: ".concat(real, " + ").concat(imaginario, " i");
    };
    numeroComplexo.prototype.subtrair = function (outroComplexo) {
        var real = this.real - outroComplexo.real;
        var imaginario = this.imaginario - outroComplexo.imaginario;
        return "O resultado da subtra\u00E7\u00E3o \u00E9: ".concat(real, " + ").concat(imaginario, " i");
    };
    numeroComplexo.prototype.multiplicar = function (outroComplexo) {
        var real = (this.real * outroComplexo.real) - (this.imaginario * outroComplexo.imaginario);
        var imaginario = (this.real * outroComplexo.real) + (this.imaginario * outroComplexo.imaginario);
        return "O resultado da multiplica\u00E7\u00E3o \u00E9: ".concat(real, " + ").concat(imaginario, " i");
    };
    numeroComplexo.prototype.dividir = function (outroComplexo) {
        var real = ((this.real * outroComplexo.real) + (this.imaginario * outroComplexo.imaginario)) / (Math.pow(outroComplexo.real, 2 + Math.pow(outroComplexo.imaginario, 2)));
        var imaginario = ((this.imaginario * outroComplexo.real) - (this.real * outroComplexo.imaginario)) / (Math.pow(outroComplexo.real, 2 + Math.pow(outroComplexo.imaginario, 2)));
        return " resultado da divis\u00E3o \u00E9: ".concat(real, " + ").concat(imaginario, " i");
    };
    numeroComplexo.prototype.equals = function (outroComplexo) {
        if ((Math.sqrt((outroComplexo.real - this.real) * 2 + (outroComplexo.imaginario - this.imaginario) * 2)) == 0) {
            return true;
        }
        else {
            return false;
        }
    };
    numeroComplexo.prototype.toString = function () {
        return ("".concat(this.real, " + ").concat(this.imaginario, "i"));
    };
    numeroComplexo.prototype.modulo = function () {
        return Math.abs((this.real) + (this.imaginario));
    };
    return numeroComplexo;
}());
exports.numeroComplexo = numeroComplexo;
