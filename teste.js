// Produto.ts
var Produto = /** @class */ (function () {
    function Produto(nome, preco, marca, custo) {
        this.nome = nome;
        this.preco = preco;
        this.marca = marca;
        this.custo = custo;
    }
    Produto.prototype.getNome = function () {
        return this.nome;
    };
    Produto.prototype.getPreco = function () {
        return this.preco;
    };
    Produto.prototype.getMarca = function () {
        return this.marca;
    };
    Produto.prototype.getCusto = function () {
        return this.custo;
    };
    Produto.prototype.getInfos = function () {
        return "Nome: ".concat(this.nome, ", Pre\u00E7o: R$").concat(this.preco.toFixed(2), ", Marca: ").concat(this.marca);
    };
    Produto.prototype.calcularLucro = function () {
        return this.preco - this.custo;
    };
    return Produto;
}());
// Venda.ts
var Venda = /** @class */ (function () {
    function Venda(produto, quantidade, data) {
        this.produto = produto;
        this.quantidade = quantidade;
        this.data = data;
        this.valorTotal = produto.getPreco() * quantidade;
    }
    Venda.prototype.getProduto = function () {
        return this.produto;
    };
    Venda.prototype.getQuantidade = function () {
        return this.quantidade;
    };
    Venda.prototype.getData = function () {
        return this.data;
    };
    Venda.prototype.getValorTotal = function () {
        return this.valorTotal;
    };
    Venda.prototype.getInfos = function () {
        return "Produto: ".concat(this.produto.getNome(), ", Quantidade: ").concat(this.quantidade, ", Data: ").concat(this.data.toLocaleDateString(), ", Valor Total: R$").concat(this.valorTotal.toFixed(2));
    };
    Venda.prototype.aplicarDesconto = function (desconto) {
        this.valorTotal *= (1 - desconto / 100);
    };
    return Venda;
}());
// main.ts
var tv = new Produto("TV 4K", 2500.00, "Samsung", 1800.00);
var celular = new Produto("Celular X", 1500.00, "Apple", 1000.00);
var notebook = new Produto("Notebook Y", 3500.00, "Dell", 2500.00);
var venda1 = new Venda(tv, 2, new Date("2022-01-01"));
var venda2 = new Venda(celular, 3, new Date("2022-01-15"));
var venda3 = new Venda(notebook, 1, new Date("2022-02-01"));
console.log(tv.getInfos());
console.log("Lucro do produto ".concat(tv.getNome(), ": R$").concat(tv.calcularLucro().toFixed(2)));
console.log(venda1.getInfos());
var totalVendas = venda1.getValorTotal() + venda2.getValorTotal() + venda3.getValorTotal();
console.log("Total de vendas realizadas: R$".concat(totalVendas.toFixed(2)));
