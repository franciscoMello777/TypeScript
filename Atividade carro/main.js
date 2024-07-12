"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = require("./Carro");
var Carro_2 = require("./Carro");
var meuCarro = new Carro_1.Carro("GTR R35", 20, "Nissan", 5);
var minhaGarragem = new Carro_2.Garragem();
minhaGarragem.addCarros(meuCarro);
