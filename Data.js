var Data = /** @class */ (function () {
    function Data(dia, mes, ano) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
    Data.prototype.dataDeNacimento = function () {
        console.log("Minha data de nacimento e ".concat(this.dia, "/").concat(this.mes, "/").concat(this.ano, "."));
    };
    return Data;
}());
var nascimento = new Data(26, 7, 2007);
nascimento.dataDeNacimento();
