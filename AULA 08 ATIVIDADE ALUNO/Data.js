"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Data = void 0;
var Data = /** @class */ (function () {
    function Data(dia, mes, ano) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
    Data.prototype.compara = function (outraData) {
        if (this.ano === outraData.ano) {
            console.log("O ano sao iguais");
        }
        else {
            console.log("o ano sao diferentes");
        }
        if (this.mes === outraData.mes) {
            console.log("O mes sao iguais");
        }
        else {
            console.log("o mes sao diferentes");
        }
        if (this.dia === outraData.dia) {
            console.log("O dia sao iguais");
        }
        else {
            console.log("o dia sao diferentes");
        }
    };
    Data.prototype.getDia = function () {
        return this.dia;
    };
    Data.prototype.getMes = function () {
        return this.mes;
    };
    Data.prototype.getMesExtenso = function () {
        switch (this.mes) {
            case 1:
                console.log("Janeiro");
                break;
            case 2:
                console.log("Fevereiro");
                break;
            case 3:
                console.log("Março");
                break;
            case 4:
                console.log("Abril");
                break;
            case 5:
                console.log("maio");
                break;
            case 6:
                console.log("junho");
                break;
            case 7:
                console.log("julho");
                break;
            case 8:
                console.log("agosto");
                break;
            case 9:
                console.log("setembro");
                break;
            case 10:
                console.log("Outubro");
                break;
            case 11:
                console.log("Novembro");
                break;
            case 12:
                console.log("Dezembro");
                break;
            default:
                console.log("Mes invalido");
                break;
        }
    };
    Data.prototype.getAno = function () {
        return this.ano;
    };
    Data.prototype.isBissexto = function () {
        if (this.ano == 2000 || this.ano == 1000 || this.ano == 0) {
            console.log("o ano e bissexto");
        }
        else if (this.ano % 4 === 0 && this.ano % 100 != 0) {
            console.log("o ano e bissexto");
        }
        else {
            console.log("o ano nao e bissexto");
        }
    };
    Data.prototype.clone = function () {
        return new Data(this.dia, this.mes, this.ano);
    };
    return Data;
}());
exports.Data = Data;
