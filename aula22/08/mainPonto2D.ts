import { Ponto2D } from "./Ponto2D";

var rl = require('readline-sync')

let pontoteste = new Ponto2D()

let menu: boolean = true

while (menu) {
    console.log(
        `
        0 - Finalizar
        1 - Get
        2 - Set x
        3 - Set y
        4 - Movimentação  
        5 - Equals
        6 - ToString
        7 - Distancia
        8 - Clone     `
    );

    let option = rl.questionInt('Escolha:')

    switch (option) {
        case 1:
            console.log(pontoteste.getPonto2D())
            break
        case 2:
            pontoteste.setX()
            break
        case 3:
            pontoteste.setY()
            break
        case 4:
            pontoteste.mover()
            break
        case 5:
            console.log(pontoteste.equals(pontoteste))
            break
        case 6:
            console.log(pontoteste.toString())
            break
        case 7:
            console.log(pontoteste.distancia(pontoteste))
            break
        case 8:
            console.log(pontoteste.clone())
            break
        case 0:
            process.exit(0)
        default:
            console.log('Opcao invalida');
            break
    }

}