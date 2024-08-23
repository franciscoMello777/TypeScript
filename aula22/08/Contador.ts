export class Contador {
    num: number
    constructor(num: number) {
        this.num = num
}
zerar(): void {
    this.num = 0
    console.log(this.num)
}
incrementar(): void {
    this.num += 1
    console.log(this.num)
}
valor(): number {
    return this.num
}
}