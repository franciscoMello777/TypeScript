class Data {
    dia: number
    mes: number
    ano: number

    constructor(dia: number, mes: number, ano: number){
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }
    dataDeNacimento(): void{
        console.log(`Minha data de nacimento e ${this.dia}/${this.mes}/${this.ano}.`)
    }
}
let nascimento = new Data(26,7,2007)
nascimento.dataDeNacimento()