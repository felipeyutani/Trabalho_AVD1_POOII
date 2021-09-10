"use strict";
/* 2) Crie uma classe Veiculos com os atributos modelo, marca, ano, valorLocacao e
quantidade de dias. Crie os getters e setters.
No setters crie validações para não aceitar modelo, marca, ano, valorLocacao e quantidade em branco ou com valor
zero. Crie um método passeio para receber a quantidade de dias e o valor da
locação. O sistema calcule o total que será a multiplicação da quantidade de dias
pelo valor da locação. */
var Veiculos = /** @class */ (function () {
    function Veiculos(_modelos, _marca, _ano, _valorLocacao, _qt_dias) {
        this._modelos = _modelos;
        this._marca = _marca;
        this._ano = _ano;
        this._valorLocacao = _valorLocacao;
        this._qt_dias = _qt_dias;
    }
    Object.defineProperty(Veiculos.prototype, "modelos", {
        get: function () {
            return this._modelos;
        },
        set: function (modelos) {
            if (modelos === '') {
                throw new Error('Modelo inválido, preencha o campo!');
            }
            this._modelos = modelos;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Veiculos.prototype, "marca", {
        get: function () {
            return this._marca;
        },
        set: function (marca) {
            if (marca === '') {
                throw new Error('Marca inválida, preencha o campo!');
            }
            this._marca = marca;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Veiculos.prototype, "ano", {
        get: function () {
            return this._ano;
        },
        set: function (ano) {
            if (ano === 0) {
                throw new Error('Ano inválido, preencha o campo corretamente!');
            }
            this._ano = ano;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Veiculos.prototype, "valorLocacao", {
        get: function () {
            return this._valorLocacao;
        },
        set: function (valorLocacao) {
            if (valorLocacao === 0) {
                throw new Error('Valor de locação inválido, preencha o campo corretamente!');
            }
            this._valorLocacao = valorLocacao;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Veiculos.prototype, "qt_dias", {
        get: function () {
            return this._qt_dias;
        },
        set: function (qt_dias) {
            if (qt_dias === 0) {
                throw new Error('Quantidade de dias inválida, preencha o campo corretamente!');
            }
            this._qt_dias = qt_dias;
        },
        enumerable: false,
        configurable: true
    });
    Veiculos.prototype.passeio = function () {
        return "O valor da aloca\u00E7\u00E3o do carro ser\u00E1 de " + this.qt_dias * this.valorLocacao + " reais";
    };
    return Veiculos;
}());
var veiculos = new Veiculos('Golf', 'Volkswagen', 2003, 100, 3);
console.log("Modelo do carro: " + veiculos.modelos);
console.log("Quantidade de dias: " + veiculos.qt_dias);
console.log("Valor da loca\u00E7\u00E3o: " + veiculos.valorLocacao);
console.log(veiculos.passeio());
/* try {
    veiculos.modelos = ''
    console.log(veiculos)
} catch(error) {
    console.log(error.message)
}

try {
    veiculos.marca = ''
    console.log(veiculos)
} catch(error) {
    console.log(error.message)
}

try {
    veiculos.ano = 0
    console.log(veiculos)
} catch(error) {
    console.log(error.message)
}

try {
    veiculos.valorLocacao = 0
    console.log(veiculos)
} catch(error) {
    console.log(error.message)
}

try {
    veiculos.qt_dias = 0
    console.log(veiculos)
} catch(error) {
    console.log(error.message)
} */ 
