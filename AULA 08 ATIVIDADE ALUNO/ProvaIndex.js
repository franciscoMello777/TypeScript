"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rl = require('readline-Sync');
var menu = true;
while (menu) {
    console.log("Menu de Op\u00E7\u00F5es: \n        1 - Construir o Gabarito;\n        2 - Receber as respostas dos Alunos;\n        3 - Contabilizar os Acertos;\n        4 - Verificar Notas;\n        5 - Comparar Notas;\n        6 - Sair");
    var notas = 0;
    var notas2 = 0;
    var gabarito = [];
    var respostasAluno = [];
    var respostasAluno2 = [];
    while (true) {
        var option = rl.questionInt('\nEscolha: ');
        switch (option) {
            case 1:
                for (var i = 0; i < 15; i++) {
                    gabarito[i] = rl.question('DIGITE AS RESPOSTAS DO GABARITO: ');
                }
                console.log("Gabarito = ".concat(gabarito));
                break;
            case 2:
                for (var i = 0; i < 15; i++) {
                    respostasAluno[i] = rl.question('DIGITE AS SUAS RESPOSTAS 1: ');
                }
                console.log("Respostas = ".concat(respostasAluno));
                break;
            case 3:
                console.log('REVISANDO...');
                for (var i = 0; i < 10; i++) {
                    if (respostasAluno[i] == gabarito[i])
                        notas += 0.5;
                }
                for (var i = 10; i < 15; i++) {
                    if (respostasAluno[i] == gabarito[i]) {
                        notas += 1;
                    }
                }
                console.log(notas);
                break;
            case 4:
                console.log("Sua Nota foi: ".concat(notas));
                break;
            case 5:
                for (var i = 0; i < 15; i++) {
                    respostasAluno2[i] = rl.question('DIGITE AS SUAS RESPOSTAS 2: ');
                }
                for (var i = 0; i < 9; i++) {
                    if (respostasAluno2[i] == gabarito[i])
                        notas2 += 0, 5;
                }
                for (var i = 10; i < 15; i++) {
                    if (respostasAluno2[i] == gabarito[i]) {
                        notas2 += 1;
                    }
                }
                if (notas > notas2) {
                    console.log("A MAIOR NOTA FOI DO ALUNO1");
                }
                else if (notas < notas2) {
                    console.log("A MAIOR NOTA FOI DO ALUNO2");
                }
                break;
            case 6:
                process.exit(0);
                break;
            default:
                console.log('Opcao invalida');
                break;
        }
    }
}
