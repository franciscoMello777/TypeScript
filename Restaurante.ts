var leitor = require('readline-sync')

class Cozinheiro{
    nome: string
    idade: number
    ano_xp: number

constructor(nome: string, idade: number, ano_xp: number){
    this.nome = nome
    this.idade = idade
    this.ano_xp = ano_xp
}
getCozinheiro(): void{
    console.log(`ola meu nome e ${this.nome}, tenho ${this.idade} anos e sou chef ha ${this.ano_xp} anos. `);
}
setCozinheiro(): void {
    let nomeUp = leitor.question("Qual e o nome do cozinheiro? ")
    let idadeUp = leitor.question("Qual e a idade do cozinheiro? ")
    let ano_xpUp = leitor.question("Qual e o tempo de xp do cozinheiro? ")
    this.nome = nomeUp
    this.idade = idadeUp
    this.ano_xp = ano_xpUp
}
}

class Restaurante{
    cz: Cozinheiro
    nome: string
    endereco: string
    num_end: number

    constructor(cz:Cozinheiro, nome: string, endereco: string, num_end: number){
        this.cz = cz
        this.nome = nome
        this.endereco = endereco
        this.num_end = num_end
    }
    getrestaurante(): void{
        console.log(`nome do restaurante: ${this.nome}, Endereco: ${this.endereco}, ${this.num_end}, chefe: ${this.cz.nome} `);
}
setCozinheiro(): void {
    this.cz.setCozinheiro()
    let nomeUP = leitor.question("Qual o nome do restaurante? ")
    let enderecoUp = leitor.question("Qual o endereco do restaurante? ")
    let num_endUp = leitor.question("E o numero? ")
    this.nome = nomeUP
    this.endereco = enderecoUp
    this.num_end = num_endUp
}

}

//instancia da classe cozinheiro
let chefThalles = new Cozinheiro("Thalles", 35, 15)

//instancia da classe restaurante agregado o objeto da classe cozinheiro
let Variatto = new Restaurante(chefThalles, "Variatto", "Av. Imperatriz", 500)

console.log(Variatto.cz);

let chefeNovo = new Cozinheiro("Paulo", 50, 20)

chefeNovo.getCozinheiro()

chefeNovo.setCozinheiro()

chefeNovo.getCozinheiro()

let chefeTeste = new Cozinheiro("Iuri", 60 , 20)
let restauranteNovo = new Restaurante(chefeTeste, "Mega Pizza", "Av. Unisinos", 200)

restauranteNovo.getrestaurante()
restauranteNovo.setCozinheiro()
restauranteNovo.getrestaurante()