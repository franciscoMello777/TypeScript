var leitor = require('readline-sync');
var Produto = /** @class */ (function () {
    function Produto(nome, preço, marca, compraPreço) {
        this.nome = nome;
        this.preco = preço;
        this.marca = marca;
        this.compraPreço = compraPreço;
    }
    Produto.prototype.calcularLucro = function () {
        var lucro = (this.preco - this.compraPreço);
        console.log('esse é seu lucro:', lucro);
    };
    Produto.prototype.getProduto = function () {
        console.log("Nome: ".concat(this.nome, " \nPre\u00E7o: ").concat(this.preco, " \n marca:").concat(this.marca));
    };
    Produto.prototype.setProduto = function () {
        var nomeUp = leitor.question('Qual o nome do Produto? ');
        var precoUp = leitor.questionInt('Qual o preco do Produto? ');
        var marcaUp = leitor.question('Qual a marca do Produto? ');
        this.nome = nomeUp;
        this.preco = precoUp;
        this.marca = marcaUp;
    };
    return Produto;
}());
var Venda = /** @class */ (function () {
    function Venda(produto, quantidade, valor, data) {
        this.produto = produto;
        this.quantidade = quantidade;
        this.valor = valor;
        this.data = data;
    }
    Venda.prototype.valorTotal = function () {
        this.valor = this.valor * this.quantidade;
        console.log('o valor dessa compra foi de:', this.valor);
    };
    Venda.prototype.descontos = function () {
        this.valor = this.valor - (this.valor * 0.1);
        console.log('o desconto dessa compra foi o total de:', this.valor);
    };
    Venda.prototype.informacoesVenda = function () {
        console.log("Produto: ".concat(this.produto, " \nQuantidade: ").concat(this.quantidade));
    };
    Venda.prototype.getVenda = function () {
        console.log("Produto: ".concat(this.produto.nome, " \n Quantidade: ").concat(this.quantidade, " \n Valor :").concat(this.valor, " \n Data: ").concat(this.data));
    };
    Venda.prototype.setVenda = function () {
        var produtoUp = leitor.question('Qual o Produto? ');
        var quantidadeUp = leitor.questionInt('Qual a quantidade do Produto? ');
        var valorUp = leitor.question('Qual o valor do Produto? ');
        var dataUp = leitor.question('Qual a data da compra? ');
        this.produto = produtoUp;
        this.quantidade = quantidadeUp;
        this.valor = valorUp;
        this.data = dataUp;
    };
    return Venda;
}());
var produto1 = new Produto('TV 4k', 3800, 'TCL', 3400);
var produto2 = new Produto('Notebook', 8000, 'ASUS', 5000);
var produto3 = new Produto('Smartphone', 2500, 'Samsung', 2000);
var venda1 = new Venda(produto1, 1, produto1.preco, "27/06/2024");
var venda2 = new Venda(produto2, 1, produto2.preco, "27/06/2024");
var venda3 = new Venda(produto3, 2, produto3.preco * 2, "27/06/2024");
venda1.getVenda();
venda2.getVenda();
venda3.getVenda();
venda1.setVenda();
