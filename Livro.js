var Livro = /** @class */ (function () {
    function Livro(titulo, autor, anoPublicacao) {
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
    }
    Livro.prototype.obterDetalhes = function () {
        console.log("O titulo do livro e ".concat(this.titulo, ", o autor que criou este livro e ").concat(this.autor, " e seu ano de publicacao foi em ").concat(this.anoPublicacao, "."));
    };
    return Livro;
}());
var novoLivro = new Livro("Diario de Um Banana", "Jeff Kinney", 2007);
novoLivro.obterDetalhes();
