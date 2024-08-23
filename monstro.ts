import { Guerreiro } from "./guerreiro"
export class Monstro {
    nome: string
    forca: number
    saude: number

    constructor(nome: string) {
    this.nome = nome
    this.forca = 50
    this.saude = 10

    }
    atacar(): void {
        console.log(`${this.nome} ataca com ${this.forca} de dano! `)
    }
    recebeDano(dano:number): void {
        this.saude -= dano
    }
    status(): void {
        console.log(`O monstro ${this.nome} tem ${this.saude} de vida! `)
    }
}