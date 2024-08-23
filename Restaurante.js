var leitor = require('readline-sync');
var Cozinheiro = /** @class */ (function () {
    function Cozinheiro(nome, idade, ano_xp) {
        this.nome = nome;
        this.idade = idade;
        this.ano_xp = ano_xp;
    }
    Cozinheiro.prototype.getCozinheiro = function () {
        console.log("ola meu nome e ".concat(this.nome, ", tenho ").concat(this.idade, " anos e sou chef ha ").concat(this.ano_xp, " anos. "));
    };
    Cozinheiro.prototype.setCozinheiro = function () {
        var nomeUp = leitor.question("Qual e o nome do cozinheiro? ");
        var idadeUp = leitor.question("Qual e a idade do cozinheiro? ");
        var ano_xpUp = leitor.question("Qual e o tempo de xp do cozinheiro? ");
        this.nome = nomeUp;
        this.idade = idadeUp;
        this.ano_xp = ano_xpUp;
    };
    return Cozinheiro;
}());
var Restaurante = /** @class */ (function () {
    function Restaurante(cz, nome, endereco, num_end) {
        this.cz = cz;
        this.nome = nome;
        this.endereco = endereco;
        this.num_end = num_end;
    }
    Restaurante.prototype.getrestaurante = function () {
        console.log("nome do restaurante: ".concat(this.nome, ", Endereco: ").concat(this.endereco, ", ").concat(this.num_end, ", chefe: ").concat(this.cz.nome, " "));
    };
    Restaurante.prototype.setCozinheiro = function () {
        this.cz.setCozinheiro();
        var nomeUP = leitor.question("Qual o nome do restaurante? ");
        var enderecoUp = leitor.question("Qual o endereco do restaurante? ");
        var num_endUp = leitor.question("E o numero? ");
        this.nome = nomeUP;
        this.endereco = enderecoUp;
        this.num_end = num_endUp;
    };
    return Restaurante;
}());
//instancia da classe cozinheiro
var chefThalles = new Cozinheiro("Thalles", 35, 15);
//instancia da classe restaurante agregado o objeto da classe cozinheiro
var Variatto = new Restaurante(chefThalles, "Variatto", "Av. Imperatriz", 500);
console.log(Variatto.cz);
var chefeNovo = new Cozinheiro("Paulo", 50, 20);
chefeNovo.getCozinheiro();
chefeNovo.setCozinheiro();
chefeNovo.getCozinheiro();
var chefeTeste = new Cozinheiro("Iuri", 60, 20);
var restauranteNovo = new Restaurante(chefeTeste, "Mega Pizza", "Av. Unisinos", 200);
restauranteNovo.getrestaurante();
restauranteNovo.setCozinheiro();
restauranteNovo.getrestaurante();
