class Livro {
    titulo: string
    autor: string
    anoPublicacao: number

    constructor(titulo: string, autor: string, anoPublicacao: number){
        this.titulo = titulo
        this.autor = autor
        this.anoPublicacao = anoPublicacao
    }
    obterDetalhes(): void{
console.log(`O titulo do livro e ${this.titulo}, o autor que criou este livro e ${this.autor} e seu ano de publicacao foi em ${this.anoPublicacao}.`)
    }
}

let novoLivro = new Livro("Diario de Um Banana", "Jeff Kinney", 2007)
novoLivro.obterDetalhes()