"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ponto2D = void 0;
var rl = require('readline-sync');
var Ponto2D = /** @class */ (function () {
    function Ponto2D() {
        this.x = 0;
        this.y = 0;
    }
    Ponto2D.prototype.getPonto2D = function () {
        console.log("Ponto 2D: (" + this.x + ", " + this.y + ")");
    };
    Ponto2D.prototype.setX = function () {
        this.x = rl.questionInt("Digite o valor de x: ");
    };
    Ponto2D.prototype.setY = function () {
        this.y = rl.questionInt("Digite o valor de y: ");
    };
    Ponto2D.prototype.mover = function () {
        this.x = rl.questionInt("Digite o valor de x: ");
        this.y = rl.questionInt("Digite o valor de y: ");
    };
    Ponto2D.prototype.equals = function (outroPonto) {
        if (Math.sqrt(outroPonto.x - this.x) * 2 + (outroPonto.y - this.y) * 2) {
            return true;
        }
        else {
            return false;
        }
    };
    Ponto2D.prototype.toString = function () {
        return "Ponto X: ".concat(this.x, ", Ponto y: ").concat(this.y);
    };
    Ponto2D.prototype.distancia = function (outroPonto) {
        return Math.sqrt((outroPonto.x - this.x) * 2 + (outroPonto.y - this.y) * 2);
    };
    Ponto2D.prototype.clone = function () {
        var clone = new PontoD2comcoordenadas(this.x, this.y);
        return clone;
    };
    return Ponto2D;
}());
exports.Ponto2D = Ponto2D;
var PontoD2comcoordenadas = /** @class */ (function (_super) {
    __extends(PontoD2comcoordenadas, _super);
    function PontoD2comcoordenadas(x, y) {
        var _this = _super.call(this) || this;
        _this.x = x;
        _this.y = y;
        return _this;
    }
    PontoD2comcoordenadas.prototype.getPontoD2comcoordenadas = function () {
        console.log("Ponto2Dcomcoordenadas: (" + this.x + ", " + this.y + ")");
    };
    PontoD2comcoordenadas.prototype.setPontoD2comcoordenadas = function () {
        this.x = rl.questionInt("Digite o valor de x: ");
        this.y = rl.questionInt("Digite o valor de y: ");
    };
    PontoD2comcoordenadas.prototype.mover = function () {
        this.x = rl.questionInt("Digite o valor de x: ");
        this.y = rl.questionInt("Digite o valor de y: ");
    };
    return PontoD2comcoordenadas;
}(Ponto2D));
var PontoD2comcoordenadas2 = /** @class */ (function (_super) {
    __extends(PontoD2comcoordenadas2, _super);
    function PontoD2comcoordenadas2(outroPonto) {
        var _this = _super.call(this) || this;
        _this.x = outroPonto.x;
        return _this;
    }
    PontoD2comcoordenadas2.prototype.getPontoD2comcoordenadas2 = function () {
        console.log("Ponto2Dcomcoordenadas: (" + this.x + ", " + this.y + ")");
    };
    PontoD2comcoordenadas2.prototype.setPontoD2comcoordenadas2 = function () {
        this.x = rl.questionInt("Digite o valor de x: ");
        this.y = rl.questionInt("Digite o valor de y: ");
    };
    PontoD2comcoordenadas2.prototype.mover = function () {
        this.x = rl.questionInt("Digite o valor de x: ");
        this.y = rl.questionInt("Digite o valor de y: ");
    };
    return PontoD2comcoordenadas2;
}(Ponto2D));
