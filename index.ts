import { Cachorro } from "./cachorro";
import { Coruja } from "./coruja";



const meuCachorro:Cachorro = new Cachorro('lili', 10, 'linguica')
const minhaCoruja:Coruja = new Coruja('sthurt', 3)

meuCachorro.latir()
minhaCoruja.voar(20)
console.log(minhaCoruja.nome)
