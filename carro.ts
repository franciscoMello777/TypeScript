import { Readline } from "readline/promises"

/*
transpilar = typescript
interpilar = javascript
compilar = java

como tranpilar = npx tsc index.ts

 */ 
var reader = require('readline-sync')

class Carro {
    rodas: number
    motor: number
    cor: string
    modelo: string
    marca: string
    km: number

    constructor(rodas: number, motor: number, cor: string, modelo: string, marca: string, km: number){
this.rodas = rodas
this.motor = motor
this.cor = cor
this.modelo = modelo
this.marca = marca
this.km = km
    }
    acelerar(){
        console.log(`O ${this.modelo} chegou a ${this.km} km/h`)
    } 
    dirigir(){
        console.log(`Estou dirigindo meu ${this.marca} ${this.modelo} `)
    }
    frear(){
        console.log("Freiando")
    }
}

const meuCarro = new Carro(15,2.0,"azul","Fusca","volkswagen",200)

meuCarro.acelerar()
meuCarro.dirigir()
meuCarro.frear()

var rodas: number = reader.questionInt("qual o aro do carro?")
var motor: number = reader.questionInt("qual o motor do carro?")
var cor: string = reader.question("qual a cor do carro?")
var modelo: string = reader.question("qual o modelo do carro?")
var marca: string = reader.question("qual a marca do carro?")
var km: number = reader.questionInt("qual o km maximo do carro?")  

const novoCarro = new Carro(rodas,motor,cor,modelo,marca,km)
 