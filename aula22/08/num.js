"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumeroComplexo_1 = require("./NumeroComplexo");
var rl = require('readline-sync');
var teste = new NumeroComplexo_1.numeroComplexo(0, 0);
var teste2 = new NumeroComplexo_1.numeroComplexo(0, 0);
var menuzinho = true;
while (menuzinho) {
    console.log("\n        Menu de op\u00E7oes\n        \n        1- Gets \n        2- Sets \n        3- Soma\n        4- Subtrai\n        5- Multiplica\n        6- Divide\n        7- Equals \n        8- toString\n        9- modulo\n        0- Sair\n        \n        ");
    var option = rl.questionInt('Escolha:');
    switch (option) {
        case 1:
            teste.getNC();
            break;
        case 2:
            teste.setNC();
            break;
        case 3:
            console.log("Inserindo numero para soma:");
            teste2.setNC();
            console.log(teste.somar(teste2));
            break;
        case 4:
            console.log("Inserindo numero para subtrair: ");
            teste2.setNC();
            console.log(teste.subtrair(teste2));
            break;
        case 5:
            console.log("Inserindo numero para multiplicar: ");
            teste2.setNC();
            console.log(teste.multiplicar(teste2));
            break;
        case 6:
            console.log("Inserindo numero para dividir: ");
            teste2.setNC();
            console.log(teste.dividir(teste2));
            break;
        case 7:
            console.log(teste.equals(teste2));
            break;
        case 8:
            console.log(teste.toString());
            break;
        case 9:
            console.log(teste.modulo());
            break;
        case 0:
            process.exit(0);
        default:
            console.log('Opcao invalida');
            break;
    }
}
