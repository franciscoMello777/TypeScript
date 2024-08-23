var leitor = require('readline-sync')
class Aluno{
    nome: string
    nota: Array<number>

constructor(nome: string){
    this.nome = nome
    this.nota = []
}

registroNota(): void{
    let nota1 = leitor.questionInt("insira a primeira nota: ")
    let nota2 = leitor.questionInt("insira a segunda nota: ")

    this.nota.push(nota1)
    this.nota.push(nota2)
}

calcularMedia(): void{
    let media = (this.nota[0] + this.nota[1]) /2
    console.log(`A media dos valores e ${media}`)
}
}

let novoAluno = leitor.question("qual o nome do aluno que gostaria de verificar sua media ? ")

let alunoNovo = new Aluno(novoAluno)

alunoNovo.registroNota()
alunoNovo.calcularMedia() 