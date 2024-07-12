import { Carro } from "./Carro";
import { Garragem } from "./Carro";

let meuCarro:Carro = new Carro("GTR R35", 20, "Nissan", 5)
let minhaGarragem:Garragem = new Garragem()
minhaGarragem.addCarros(meuCarro)