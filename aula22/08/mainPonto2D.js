"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Ponto2D_1 = require("./Ponto2D");
var rl = require('readline-sync');
var pontoteste = new Ponto2D_1.Ponto2D();
var menu = true;
while (menu) {
    console.log("\n        0 - Finalizar\n        1 - get\n        2 - set x\n        3 - set y\n        4 - movimenta\u00E7\u00E3o  \n        5- equals\n        6- toString\n        7- distancia\n        8- clone     ");
    var option = rl.questionInt('Escolha:');
    switch (option) {
        case 1:
            console.log(pontoteste.getPonto2D());
            break;
        case 2:
            pontoteste.setX();
            break;
        case 3:
            pontoteste.setY();
            break;
        case 4:
            pontoteste.mover();
            break;
        case 5:
            console.log(pontoteste.equals(pontoteste));
            break;
        case 6:
            console.log(pontoteste.toString());
            break;
        case 7:
            console.log(pontoteste.distancia(pontoteste));
            break;
        case 8:
            console.log(pontoteste.clone());
            break;
        case 0:
            process.exit(0);
        default:
            console.log('Opcao invalida');
            break;
    }
}
