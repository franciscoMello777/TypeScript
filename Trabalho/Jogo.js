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
var rl = require('readline-sync');
var Jogos = /** @class */ (function () {
    function Jogos(titulo, genero, classificacaoEtaria) {
        this.titulo = titulo;
        this.genero = genero;
        this.classificacaoEtaria = classificacaoEtaria;
    }
    Jogos.prototype.getDetalhes = function () {
        return ("Titulo: ".concat(this.titulo, " \nGenero: ").concat(this.genero, " \n Classifica\u00E7\u00E3o: ").concat(this.classificacaoEtaria));
    };
    Jogos.prototype.setDuvidas = function () {
        var tituloUp = rl.question('Qual é o título do jogo?');
        var generoUp = rl.question('Qual é o gênero do jogo?');
        var classificacaoUp = rl.question('Qual é a classificação etária do jogo?');
        this.titulo = tituloUp;
        this.genero = generoUp;
        this.classificacaoEtaria = classificacaoUp;
    };
    return Jogos;
}());
var JogoEletronico = /** @class */ (function (_super) {
    __extends(JogoEletronico, _super);
    function JogoEletronico() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JogoEletronico.prototype.super = function (titulo, genero, classificacaoEtaria, plataforma) {
        this.titulo = titulo;
        this.genero = genero;
        this.classificacaoEtaria = classificacaoEtaria;
        this.plataforma = plataforma;
    };
    JogoEletronico.prototype.getDetalhes = function () {
        return ("Titulo: ".concat(this.titulo, " \nGenero: ").concat(this.genero, " \n Classifica\u00E7\u00E3o: ").concat(this.classificacaoEtaria, " \n Plataforma: ").concat(this.plataforma));
    };
    JogoEletronico.prototype.setDuvidas = function () {
        var tituloUp = rl.question('Qual é o título do jogo?');
        var generoUp = rl.question('Qual é o gênero do jogo?');
        var classificacaoUp = rl.question('Qual é a classificação etária do jogo?');
        var plataformaUp = rl.question('Qual é a plataforma do jogo?');
        this.titulo = tituloUp;
        this.genero = generoUp;
        this.classificacaoEtaria = classificacaoUp;
        this.plataforma = plataformaUp;
    };
    return JogoEletronico;
}(Jogos));
var JogoDeTabuleiro = /** @class */ (function (_super) {
    __extends(JogoDeTabuleiro, _super);
    function JogoDeTabuleiro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JogoDeTabuleiro.prototype.super = function (titulo, genero, classificacaoEtaria, jogadores) {
        this.titulo = titulo;
        this.genero = genero;
        this.classificacaoEtaria = classificacaoEtaria;
        this.jogadores = jogadores;
    };
    JogoDeTabuleiro.prototype.getDetalhes = function () {
        return ("Titulo: ".concat(this.titulo, " \nGenero: ").concat(this.genero, " \n Classifica\u00E7\u00E3o: ").concat(this.classificacaoEtaria, " \n ").concat(this.jogadores));
    };
    JogoDeTabuleiro.prototype.setDuvidas = function () {
        var tituloUp = rl.question('Qual é o título do jogo?');
        var generoUp = rl.question('Qual é o gênero do jogo?');
        var classificacaoUp = rl.question('Qual é a classificação etária do jogo?');
        var jogadoresUp = rl.question('Qual é a quantidade de jogadores?');
        this.titulo = tituloUp;
        this.genero = generoUp;
        this.classificacaoEtaria = classificacaoUp;
        this.jogadores = jogadoresUp;
    };
    return JogoDeTabuleiro;
}(Jogos));
var Jogo = /** @class */ (function () {
    function Jogo() {
    }
    return Jogo;
}());
var BibliotecaDeJogos = /** @class */ (function () {
    function BibliotecaDeJogos() {
        this.Jogos = [];
    }
    BibliotecaDeJogos.prototype.addJogos = function (jogo) {
        this.Jogos.push(jogo);
    };
    BibliotecaDeJogos.prototype.removerJogo = function () {
        console.log(this.Jogos);
        var titulo = rl.question('Insira o titulo para excluir o jogo: ');
        this.Jogos = this.Jogos.filter(function (jogo) { return jogo.titulo !== titulo; });
    };
    return BibliotecaDeJogos;
}());
var jogoUm = new Jogo();
var estante = new BibliotecaDeJogos();
var testar = new Jogos('banana', 'chiclete', 23);
estante.addJogos(jogoUm);
testar.getDetalhes();
testar.setDuvidas();
