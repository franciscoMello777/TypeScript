import { Guerreiro } from "./guerreiro";
import { Monstro } from "./monstro";

const meuGuerreiro:Guerreiro = new Guerreiro("cidade", "arqueiro", 10)
const meuMonstro:Monstro = new Monstro("zumbi")

meuMonstro.status()
meuGuerreiro.ataca(meuMonstro)
meuMonstro.status()