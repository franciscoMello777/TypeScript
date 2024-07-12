var rl = require('readline-sync')

export class Carro{
    carro: string
    gasolina: number
    marca: string
    kmL: number
    constructor(carro: string, gasolina: number, marca: string, kmL: number){
        this.carro = carro
        this.gasolina = gasolina
        this.marca = marca
        this.kmL = kmL

}

andar(km: number): void{
    let anda = this.gasolina - (km / this.kmL)
    if(anda <= 0){
        console.log("O carro não pode andar")}
            else{
                this.gasolina = anda
                console.log(`Sobrou ${this.gasolina} litros de gasosa`)
        }
    }

    getCarro(): void{
        console.log(`Carro: ${this.carro} \nMarca: ${this.marca} \nGasolina: ${this.gasolina} \nkmL: ${this.kmL}`)
    }

    abastecer(valor: number): void{
        this.gasolina += valor

}

setGasolina(): void{   
    let carroUp = rl.question('qual e o carro? ')
    let marcaUp = rl.question('Qual é a marca do carro? ')
    let gasolinaUp = rl.question('Quanto de gasolina voce tem? ')
    let kmLUp = rl.question('Quantos km/L seu carro faz? ')
    this.carro = carroUp
    this.marca = marcaUp
    this.gasolina = gasolinaUp
    this.kmL = kmLUp

}
    
}



export class Garragem{
    carros: Carro[]
    constructor() {
        this.carros = []
    }

    public addCarros(carro: Carro): void {
        this.carros.push(carro)
        if(this.carros.length >= 10){
        console.log("A garagem está cheia")
    } else{
        console.log("Carro adicionado com sucesso")
    }

    }
    public getCarros(): void {
        for(let i = 0; i < this.carros.length; i++){
    }
    
}
}
