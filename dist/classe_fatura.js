"use strict";
/* 3) Crie uma classe Fatura com os atributos números, descrição, quantidade
Comprada e preço. Crie um método valor da Fatura para multiplicar a quantidade
comprada pelo preço. */
var Fatura = /** @class */ (function () {
    function Fatura(numero, descricao, quantidade_comprada, preco) {
        this.numero = numero,
            this.descricao = descricao,
            this.quantidade_comprada = quantidade_comprada,
            this.preco = preco;
    }
    Fatura.prototype.valorFatura = function () {
        return this.quantidade_comprada * this.preco;
    };
    return Fatura;
}());
var fatura = new Fatura(5, 'Pão de batata', 3, 5.50);
console.log("A quantidade comprada foi: " + fatura.quantidade_comprada);
console.log("O pre\u00E7o do produtor \u00E9: " + fatura.preco);
console.log("Valor da fatura: " + fatura.valorFatura());
