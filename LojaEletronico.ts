var leitor = require('readline-sync')

class Produto {
    public nome: string
    public preco: number
    public marca: string
    private compraPreço : number

    constructor(nome: string, preço:number, marca: string, compraPreço: number){
        this.nome = nome
        this.preco = preço
        this.marca = marca
        this.compraPreço = compraPreço

    }

    calcularLucro(): void{
        let lucro = (this.preco - this.compraPreço) 
        console.log('esse é seu lucro:', lucro)
    }

    public getProduto(): void{
        console.log(`Nome: ${this.nome} \nPreço: ${this.preco} \n marca:${this.marca}`)
    }

    public setProduto(): void{
    let nomeUp = leitor.question('Qual o nome do Produto? ')
    let precoUp = leitor.questionInt('Qual o preco do Produto? ')
    let marcaUp = leitor.question('Qual a marca do Produto? ')
    this.nome = nomeUp
    this.preco = precoUp
    this.marca = marcaUp
    
    }
}

class Venda {
public produto:Produto
public quantidade: number
public valor: number
public data: string

    constructor(produto: Produto, quantidade: number, valor: number, data: string){
        this.produto = produto
        this.quantidade = quantidade
        this.valor = valor 
        this.data = data

    }

    valorTotal(): void{
        this.valor = this.valor * this.quantidade
        console.log('o valor dessa compra foi de:', this.valor)
    }

    descontos(): void{
        this.valor = this.valor - (this.valor * 0.1)
        console.log('o desconto dessa compra foi o total de:', this.valor )
    }

    informacoesVenda(): void{
        console.log(`Produto: ${this.produto} \nQuantidade: ${this.quantidade}`)

}

public getVenda(): void{
    console.log(`Produto: ${this.produto.nome} \n Quantidade: ${this.quantidade} \n Valor :${this.valor} \n Data: ${this.data}`)

}

public setVenda(): void{
    let produtoUp = leitor.question('Qual o Produto? ')
    let quantidadeUp = leitor.questionInt('Qual a quantidade do Produto? ')
    let valorUp = leitor.question('Qual o valor do Produto? ')
    let dataUp = leitor.question('Qual a data da compra? ')
    this.produto = produtoUp
    this.quantidade = quantidadeUp
    this.valor = valorUp
    this.data = dataUp
    
}
}

let produto1 = new Produto ('TV 4k', 3800, 'TCL', 3400)
let produto2 = new Produto ('Notebook', 8000, 'ASUS', 5000)
let produto3 = new Produto ('Smartphone', 2500, 'Samsung', 2000)
let venda1 = new Venda(produto1, 1, produto1.preco, "27/06/2024")
let venda2 = new Venda(produto2, 1, produto2.preco, "27/06/2024")
let venda3 = new Venda(produto3, 2, produto3.preco * 2, "27/06/2024")

produto1.getProduto()
produto1.calcularLucro()
venda1.getVenda()
venda1.valorTotal()