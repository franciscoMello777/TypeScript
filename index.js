"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cachorro_1 = require("./cachorro");
var coruja_1 = require("./coruja");
var meuCachorro = new cachorro_1.Cachorro('lili', 10, 'linguica');
var minhaCoruja = new coruja_1.Coruja('sthurt', 3);
meuCachorro.latir();
minhaCoruja.voar(20);
console.log(minhaCoruja.nome);
