"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Data_1 = require("./Data");
var leitor = require("readline-sync");
var menu = true;
while (menu) {
    console.log(" Menu de Op\u00E7\u00F5es:\n    1 - criar a data;\n    2 - comparar datas;\n    3 - print do dia / mes / ano;\n    4 - verificar se \u00E9 bissexto;\n    5 - clonar data.\n    6 - sair ");
    var opcion = leitor.questionInt("Escolha: ");
    switch (opcion) {
        case 1:
            var dia = leitor.question("Dia: ");
            var mes = leitor.question("Mês: ");
            var ano = leitor.question("Ano: ");
            var dataa = new Data_1.Data(dia, mes, ano);
            console.log(dataa);
            break;
        case 2:
            console.log(dataa);
            var data2 = new Data_1.Data(leitor.question("Dia: "), leitor.question("Mês: "), leitor.question("Ano: "));
            dataa.compara(data2);
            break;
        case 3:
            console.log(dataa);
            break;
        case 4:
            dataa.isBissexto();
            break;
        case 5:
            var dataClone = dataa.clone();
            console.log(dataClone);
            break;
        case 6:
            process.exit(0);
            break;
        default:
            console.log("Opção invalida");
            break;
    }
}
