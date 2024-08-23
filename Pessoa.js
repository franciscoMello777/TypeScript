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
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    Pessoa.prototype.comprimentar = function () {
    };
    return Pessoa;
}());
var Jeferson = /** @class */ (function (_super) {
    __extends(Jeferson, _super);
    function Jeferson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Jeferson.prototype.comprimentar = function () {
        console.log("Ola meu nome \u00E9 ".concat(this.nome, " e tenho ").concat(this.idade, " anos e voce? "));
    };
    return Jeferson;
}(Pessoa));
var jeff = new Jeferson("Paulo", 16);
jeff.comprimentar();
var Crianca = /** @class */ (function (_super) {
    __extends(Crianca, _super);
    function Crianca() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Crianca.prototype.comprimentar = function () {
        console.log("Ola meu nome \u00E9 ".concat(this.nome, " e tenho ").concat(this.idade, " anos e voce? "));
    };
    return Crianca;
}(Pessoa));
var Cria = new Jeferson("Pedro", 2);
Cria.comprimentar();
var Adulto = /** @class */ (function (_super) {
    __extends(Adulto, _super);
    function Adulto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Adulto.prototype.comprimentar = function () {
        console.log("Ola meu nome \u00E9 ".concat(this.nome, " e tenho ").concat(this.idade, " anos e voce? "));
    };
    return Adulto;
}(Pessoa));
var Dulto = new Jeferson("Iuri", 25);
Dulto.comprimentar();
var Idoso = /** @class */ (function (_super) {
    __extends(Idoso, _super);
    function Idoso() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Idoso.prototype.comprimentar = function () {
        console.log("Ola meu nome \u00E9 ".concat(this.nome, " e tenho ").concat(this.idade, " anos e voce? "));
    };
    return Idoso;
}(Pessoa));
var Doso = new Jeferson("Jose", 70);
Doso.comprimentar();
