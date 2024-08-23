class Pessoa{
    nome: string
    idade: number

    constructor(nome: string, idade: number){
        this.nome = nome
        this.idade = idade
    }
    comprimentar(): void{
    }
}

class Jeferson extends Pessoa{
    comprimentar(): void {
        console.log(`Ola meu nome é ${this.nome} e tenho ${this.idade} anos e voce? `)
    }
}

let jeff = new Jeferson("Paulo",16)
jeff.comprimentar()

class Crianca extends Pessoa{
    comprimentar(): void {
        console.log(`Ola meu nome é ${this.nome} e tenho ${this.idade} anos e voce? `)
    }
}

let Cria = new Jeferson("Pedro",2)
Cria.comprimentar()

class Adulto extends Pessoa{
    comprimentar(): void {
        console.log(`Ola meu nome é ${this.nome} e tenho ${this.idade} anos e voce? `)
    }
}

let Dulto = new Jeferson("Iuri",25)
Dulto.comprimentar()

class Idoso extends Pessoa{
    comprimentar(): void {
        console.log(`Ola meu nome é ${this.nome} e tenho ${this.idade} anos e voce? `)
    }
}

let Doso = new Jeferson("Jose",70)
Doso.comprimentar()