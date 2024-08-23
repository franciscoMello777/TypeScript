var leitor = require('readline-sync');
var Aluno = /** @class */ (function () {
    function Aluno(nome) {
        this.nome = nome;
        this.nota = [];
    }
    Aluno.prototype.registroNota = function () {
        var nota1 = leitor.questionInt("insira a primeira nota: ");
        var nota2 = leitor.questionInt("insira a segunda nota: ");
        this.nota.push(nota1);
        this.nota.push(nota2);
    };
    Aluno.prototype.calcularMedia = function () {
        var media = (this.nota[0] + this.nota[1]) / 2;
        console.log("A media dos valores e ".concat(media));
    };
    return Aluno;
}());
var novoAluno = leitor.question("qual o nome do aluno que gostaria de verificar sua media ? ");
var alunoNovo = new Aluno(novoAluno);
alunoNovo.registroNota();
alunoNovo.calcularMedia();
