"use strict";
/* 1) Crie uma classe Pessoa com os atributos nome, sexo e idade. Crie os getters e
setters. No setters valide se o nome for em branco retorne uma mensagem de nome
inválido. Se o sexo for diferente de Masculino ou Feminino retorne uma mensagem
inválida. Se a idade for 0 retorne uma mensagem de idade inválida. Crie um método
para receber a idade, se a idade for maior ou igual a 18 exibir a mensagem pessoa
maior de idade, caso contrário exibir a mensagem pessoa menor de idade. */
var Pessoas = /** @class */ (function () {
    function Pessoas(_nome, _sexo, _idade) {
        this._nome = _nome;
        this._sexo = _sexo;
        this._idade = _idade;
    }
    Object.defineProperty(Pessoas.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        set: function (nome) {
            if (nome === '') {
                throw new Error('Nome inválido, preencha o campo!');
            }
            this._nome = nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pessoas.prototype, "sexo", {
        get: function () {
            return this._sexo;
        },
        set: function (sexo) {
            if (!Pessoas.SEXOS.includes(sexo)) {
                throw new Error('Sexo Inválido, digite M para masculino, e F para feminino');
            }
            this._sexo = sexo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pessoas.prototype, "idade", {
        get: function () {
            return this._idade;
        },
        set: function (idade) {
            if (idade <= 0) {
                throw new Error('Idade inválida!');
            }
            this._idade = idade;
        },
        enumerable: false,
        configurable: true
    });
    Pessoas.prototype.obtemIdade = function () {
        if (pessoas.idade >= 18) {
            console.log('Pessoa maior de idade!');
        }
        else {
            console.log('Pessoa menor de idade!');
        }
        return "A pessoa tem " + this.idade + " anos";
    };
    Pessoas.SEXOS = ['M', 'F', 'masculino', 'feminino'];
    return Pessoas;
}());
var pessoas = new Pessoas('João', 'M', 19);
console.log(pessoas.obtemIdade());
/* try {
    pessoas.nome = ''
    console.log(pessoas.nome)
} catch(error) {
    console.log(error.message)
}

try {
    pessoas.sexo = ''
    console.log(pessoas.sexo)
} catch(error) {
    console.log(error.message)
}

try {
    pessoas.idade = 0
    console.log(pessoas.idade)
} catch(error) {
    console.log(error.message)
} */
