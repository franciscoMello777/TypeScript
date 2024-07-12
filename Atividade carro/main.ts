import { Carro } from "./Carro";
import { Garragem } from "./Carro";

let meuCarro: Carro = new Carro("GTR R35", 20, "Nissan", 5)
let minhaGarragem: Garragem = new Garragem()
minhaGarragem.addCarros(meuCarro)
meuCarro.andar(100)
meuCarro.andar(10)
meuCarro.abastecer(5)
meuCarro.getCarro()
meuCarro.setCarro()
meuCarro.getCarro()