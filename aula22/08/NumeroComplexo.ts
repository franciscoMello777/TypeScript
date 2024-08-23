import { log } from "console";

var rl = require('readline-sync')

export class NumeroComplexo {
    real: number;
    imaginario: number;
    constructor(real: number, imaginario: number) {
        this.real = real;
        this.imaginario = imaginario;
    }

    getNumCloplexo(): void {
        console.log(`O numero real e : ${this.real}, e o numero imaginario e : ${this.imaginario} `)
    }

    setNumCloplexo(): void {
        this.real = rl.question('Digite o numero real: ')
        this.imaginario = rl.question('Digite o numero imaginario: ')
    }

    somar(outroComplexo: NumeroComplexo): NumeroComplexo {
        let real = (this.real - outroComplexo.real)    
        let imaginario = (this.imaginario - outroComplexo.imaginario)
        
    }

    subtrair(outroComplexo: NumeroComplexo): NumeroComplexo {
        let real = (this.real + outroComplexo.real)
        let imaginario = (this.imaginario + outroComplexo.imaginario)

    }


}