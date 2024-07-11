import { Jogos } from "./Jogo"
var rl = require('readline-sync')
export class BibliotecaDeJogos{
    Jogos: Jogos[]
    constructor(){
        this.Jogos = []
}

public addJogos(jogo: Jogos): void{
    this.Jogos.push(jogo)
}

public removerJogo(): void{
    console.log(this.Jogos)
    let titulo = rl.question('Insira o titulo para excluir o jogo: ')
    this.Jogos = this.Jogos.filter(jogo => jogo.titulo !== titulo)
}
 public listarJogos(): void{
    console.log(this.Jogos)
 }
    
}
