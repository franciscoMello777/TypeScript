import { Monstro } from "./monstro"
export class Guerreiro {
    nome: string
    tipo: string
    forca: number
    saude: number

    constructor(nome: string, tipo: string, forca: number) {
    this.nome = nome
    this.tipo = tipo
    this.forca = forca
    this.saude = 100

    }
    ataca(meuMonstro:Monstro): void {
    const dano = this.forca
    meuMonstro.recebeDano(this.forca)
        console.log(`${this.nome} atacou com ${this.forca} de dano! `)
    }
    recebeDano(dano:number): void {
        this.saude -= dano
    }
    status():void{
        console.log(`O guerreiro ${this.nome} tem ${this.saude} de vida! `)
    }
}