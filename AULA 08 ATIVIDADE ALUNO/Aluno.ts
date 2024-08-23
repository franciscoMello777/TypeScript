import { Aluno } from "./AlunosMatriculados";

let reader = require('readline-sync')

let menu: boolean = true

let alunoExiste = false

let alunoNovo = new Aluno(0, '', 0, 0, 0)
while (menu) {
    console.log(
        `
        1 - Cadastrar Nome e Matrícula (Aluno)
        2 - Cadastrar Notas (Aluno)
        3 - Verificar Média das Provas (Aluno)
        4 - Verificar Média Final (Aluno)
        `
    );

    let option = reader.questionInt("Escolha: ")

    switch (option) {
        case 1:
            let nomeAluno = reader.question("Insira o nome do aluno: ")
            let matriculaAluno = reader.questionInt("Nº Matrícula: ")
            alunoNovo = inserirNotas(nomeAluno, matriculaAluno)
            alunoExiste = true
            break
        case 2:
            if (alunoExiste) {
                alunoNovo = inserirNotas(nomeAluno, matriculaAluno)
            } else {
                throw new Error(`O aluno não foi criado`)
            }
            break
        case 3:
            alunoNovo.media()
            break
        case 4:
            alunoNovo.final()
    }

}

function inserirNotas(nome: string, matricula: number): Aluno {
    let prova1 = reader.questionInt("Insira a nota da prova 1: ")
    let prova2 = reader.questionInt("Insira a nota da prova 2: ")
    let trabalho = reader.questionInt("Insira a nota do trabalho: ")
    let alunoNovo = new Aluno(matricula, nome, prova1, prova2, trabalho)
    return alunoNovo
}
