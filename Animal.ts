class Animal{
    nome: String

    constructor(nome: String){
        this.nome = nome
    }

    fazerBarulho(): void{}
}

class Cachorro extends Animal{
    fazerBarulho(): void {
        console.log(`${this.nome} faz: Au Au 🐶`)
    }
}

let meuCachorro = new Cachorro("teste")