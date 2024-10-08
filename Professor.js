var leitor = require('readline-sync');
var Professor = /** @class */ (function () {
    function Professor(nome, idade, ano_xp) {
        this.nome = nome;
        this.idade = idade;
        this.ano_xp = ano_xp;
    }
    Professor.prototype.getProfessor = function () {
        console.log("Ola meu nome \u00E9 ".concat(this.nome, ", tenho ").concat(this.idade, " anos e sou Professor a h\u00E1 ").concat(this.ano_xp, " anos."));
    };
    Professor.prototype.setProfessor = function () {
        var nomeUp = leitor.question('Qual o nome do Professor? ');
        var idadeUp = leitor.question('Qual a idade do Professor? ');
        var ano_xpUp = leitor.question('Qual o tempo de xp do Professor? ');
        this.nome = nomeUp;
        this.idade = idadeUp;
        this.ano_xp = ano_xpUp;
    };
    return Professor;
}());
var Escola = /** @class */ (function () {
    function Escola(prfs, nome, endereco, num_end) {
        this.pfrs = prfs;
        this.nome = nome;
        this.endereco = endereco;
        this.num_end = num_end;
    }
    Escola.prototype.setEscola = function () {
        var nomeUp = leitor.question('Qual nome da escola? ');
        var enderecoUp = leitor.question('Qual o endereco da escola? ');
        var num_endUp = leitor.question('Qual o numero do endereco da escola? ');
        this.nome = nomeUp;
        this.endereco = enderecoUp;
        this.num_end = num_endUp;
    };
    Escola.prototype.getEscola = function () {
        console.log("Ola a escola se chama ".concat(this.nome, ", e temos o a professor a que se chama ").concat(this.pfrs.nome, ", o endereco \u00E9 ").concat(this.endereco, " e o numero da rua \u00E9 ").concat(this.num_end, "."));
    };
    return Escola;
}());
function exibirMenu() {
    console.log('Menu de opções');
    console.log('1. Criar Professor');
    console.log('2. Criar Escola');
    console.log('3. Modificar Professor');
    console.log('4. Modificar Professor');
    console.log('5. Visualizar Professor');
    console.log('6. Visualizar Escola');
    console.log('7. Sair');
}
function main() {
    var encerrar = false;
    while (!encerrar) {
        exibirMenu();
        var opcao = leitor.question('Digite a opção desejada: ');
        encerrar = escolha(opcao);
    }
}
var testProfessor = new Professor("", 0, 0);
var escola = new Escola(testProfessor, "", "", 0);
main();
function escolha(opcao) {
    switch (opcao) {
        case '1':
            testProfessor.setProfessor();
            break;
        case '2':
            escola.setEscola();
            break;
        case '3':
            testProfessor.setProfessor();
            break;
        case '4':
            escola.setEscola();
            break;
        case '5':
            testProfessor.getProfessor();
            break;
        case '6':
            escola.getEscola();
        case '7':
            console.log('Encerrando programa...');
            return true;
        default:
            console.log('Opção inválida');
    }
    return false;
}
