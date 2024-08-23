import { Prova } from './Prova'

const rl = require('readline-Sync');

let menu: boolean = true

while (menu) {
    console.log(
        `Menu de Opções: 
        1 - Construir o Gabarito;
        2 - Receber as respostas dos Alunos;
        3 - Contabilizar os Acertos;
        4 - Verificar Notas;
        5 - Comparar Notas;
        6 - Sair`
    );


    let notas = 0
    let notas2 = 0
    let gabarito: string[] = []
    let respostasAluno: string[] = []
    let respostasAluno2: string[] = []

    while (true) {
        let option = rl.questionInt('\nEscolha: ');
        switch (option) {
            case 1:
                for (let i = 0; i < 15; i++) {
                    gabarito[i] = rl.question('DIGITE AS RESPOSTAS DO GABARITO: ')
                }
                console.log(`Gabarito = ${gabarito}`)
                break;
            case 2:
                for (let i = 0; i < 15; i++) {
                    respostasAluno[i] = rl.question('DIGITE AS SUAS RESPOSTAS 1: ')
                }
                console.log(`Respostas = ${respostasAluno}`)
                break;
            case 3:
                console.log('REVISANDO...')
                for (let i = 0; i < 10; i++) {
                    if (respostasAluno[i] == gabarito[i])
                        notas += 0.5
                }
                for (let i = 10; i < 15; i++) {
                    if (respostasAluno[i] == gabarito[i]) {
                        notas += 1
                    }
                }
                console.log(notas)
                break;
            case 4:
                console.log(`Sua Nota foi: ${notas}`)
                break;
            case 5:
                for (let i = 0; i < 15; i++) {
                    respostasAluno2[i] = rl.question('DIGITE AS SUAS RESPOSTAS 2: ')
                }
                for (let i = 0; i < 9; i++) {
                    if (respostasAluno2[i] == gabarito[i])
                        notas2 += 0,5
                }
                for (let i = 10; i < 15; i++) {
                    if (respostasAluno2[i] == gabarito[i]) {
                        notas2 += 1
                    }
                }
                if (notas > notas2) {
                    console.log(`A MAIOR NOTA FOI DO ALUNO1`)
                }
                else if (notas < notas2) {
                    console.log(`A MAIOR NOTA FOI DO ALUNO2`)
                }
                break;
            case 6:
                process.exit(0)
                break;
            default:
                console.log('Opcao invalida')
                break
        }
    }
}