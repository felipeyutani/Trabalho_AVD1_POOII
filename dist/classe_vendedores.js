"use strict";
/* 5) Crie uma classe chamada Vendedores com os atributos nome, salario e valor da
venda. Crie os getters e setters e as validações. Crie um método desconto para
calcular 8% do salário.
Crie uma classe filha chamada Vendedor de Pessoa Física com o atributo região,
crie o getter e setter com validação para aceitar somente as regiões sul, sudeste,
centro-oeste, norte e nordeste. Crie um método para calcular a comissão. Se a
região for sul a comissão será de 10% sobre o valor da venda. Se a região for
sudeste a comissão será de 12% sobre o valor da venda, se a região for centrooeste a comissão será de 14% sobre o valor da venda, se a região for norte a
comissão será de 15% sobre o valor da venda, Se a região for nordeste a comissão
será de 17% sobre o valor da venda. Crie o método para calcular o salário total que
será o salario mais a comissão.
Crie uma classe filha chamada Pessoa Jurídica com os atributos nome da empresa,
total de funcionários, crie os getters, setters e as suas validações. Crie um método
para calcular a comissão. Se o valor da venda for menor que 5.000,00 o valor da
comissão será de 2% sobre o valor da venda. Se o valor da venda for maior ou igual
a 5.000,00 e menor que 10.000,00 o valor da comissão será de 4% sobre o valor da
venda. Se o valor da venda for maior ou igual a 10.000,00 o valor da comissão será
de 6% sobre o valor da venda. Crie um método salario Total que será a soma do
salario mais comissão e mais R$ 200,00 se o número de funcionários for menor que
100 ou mais R$ 300,00 se o número de funcionários for maior ou igual a 100.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vendedores = /** @class */ (function () {
    function Vendedores(nome, salario, valor_venda) {
        this._nome = nome,
            this._salario = salario,
            this._valor_venda = valor_venda;
    }
    Object.defineProperty(Vendedores.prototype, "nome", {
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
    Object.defineProperty(Vendedores.prototype, "salario", {
        get: function () {
            return this._salario;
        },
        set: function (salario) {
            if (salario === 0) {
                throw new Error('Salário inválido, preencha o campo!');
            }
            this._salario = salario;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vendedores.prototype, "valor_venda", {
        get: function () {
            return this._valor_venda;
        },
        set: function (valor_venda) {
            if (valor_venda === 0) {
                throw new Error('Valor de venda inválido, preencha o campo!');
            }
            this._valor_venda = valor_venda;
        },
        enumerable: false,
        configurable: true
    });
    Vendedores.prototype.desconto = function () {
        return this.salario * 0.08;
    };
    return Vendedores;
}());
var Vendedor_PF = /** @class */ (function (_super) {
    __extends(Vendedor_PF, _super);
    function Vendedor_PF(nome, salario, valor_venda, regiao) {
        var _this = _super.call(this, nome, salario, valor_venda) || this;
        _this._regiao = regiao;
        return _this;
    }
    Object.defineProperty(Vendedor_PF.prototype, "regiao", {
        get: function () {
            return this._regiao;
        },
        set: function (regiao) {
            if (!Vendedor_PF.REGIOES.includes(regiao)) {
                throw new Error('Região Inválida!');
            }
            this._regiao = regiao;
        },
        enumerable: false,
        configurable: true
    });
    Vendedor_PF.prototype.comissao = function () {
        if (this.regiao === 'sul') {
            return this.valor_venda * 0.10;
        }
        else if (this.regiao === 'sudeste') {
            return this.valor_venda * 0.12;
        }
        else if (this.regiao === 'centro-oeste') {
            return this.valor_venda * 0.14;
        }
        else if (this.regiao === 'norte') {
            return this.valor_venda * 0.15;
        }
        else if (this.regiao === 'nordeste') {
            return this.valor_venda * 0.17;
        }
        else { }
    };
    Vendedor_PF.prototype.salarioTotal = function () {
        if (this.regiao === 'sul') {
            return this.valor_venda * 0.10 + this.salario;
        }
        else if (this.regiao === 'sudeste') {
            return this.valor_venda * 0.12 + this.salario;
        }
        else if (this.regiao === 'centro-oeste') {
            return this.valor_venda * 0.14 + this.salario;
        }
        else if (this.regiao === 'norte') {
            return this.valor_venda * 0.15 + this.salario;
        }
        else if (this.regiao === 'nordeste') {
            return this.valor_venda * 0.17 + this.salario;
        }
        else { }
    };
    Vendedor_PF.REGIOES = ['sul', 'sudeste', 'centro-oeste', 'norte', 'nordeste'];
    return Vendedor_PF;
}(Vendedores));
var Pessoajuridica = /** @class */ (function (_super) {
    __extends(Pessoajuridica, _super);
    function Pessoajuridica(nome, salario, valor_venda, nome_empresa, total_func) {
        var _this = _super.call(this, nome, salario, valor_venda) || this;
        _this._nome_empresa = nome_empresa;
        _this._total_func = total_func;
        return _this;
    }
    Object.defineProperty(Pessoajuridica.prototype, "nome_empresa", {
        get: function () {
            return this._nome_empresa;
        },
        set: function (nome_empresa) {
            if (nome_empresa === '') {
                throw new Error('Nome da empresa inválido, preencha o campo!');
            }
            this._nome_empresa = nome_empresa;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pessoajuridica.prototype, "total_func", {
        get: function () {
            return this._total_func;
        },
        set: function (total_func) {
            if (total_func === 0) {
                throw new Error('Total de funcionários inválido, preencha o campo!');
            }
            this._total_func = total_func;
        },
        enumerable: false,
        configurable: true
    });
    Pessoajuridica.prototype.comissaoPJ = function () {
        if (this.valor_venda < 5000) {
            return this.valor_venda * 0.02;
        }
        else if (this.valor_venda >= 5000 && this.valor_venda < 10000) {
            return this.valor_venda * 0.04;
        }
        else if (this.valor_venda >= 10000) {
            return this.valor_venda * 0.06;
        }
        else { }
        return this.valor_venda;
    };
    Pessoajuridica.prototype.salarioTotalPJ = function () {
        if (this.total_func < 100) {
            return this.comissaoPJ() + this.salario + 200;
        }
        else if (this.total_func >= 100) {
            return this.comissaoPJ() + this.salario + 300;
        }
        else { }
    };
    return Pessoajuridica;
}(Vendedores));
var vendedores = new Vendedores('João', 10000, 500);
var vendedorpf = new Vendedor_PF('Pedro', 20000, 3000, 'nordeste');
var pessoajuridica = new Pessoajuridica('Josefina', 20000, 4000, 'Google', 100);
console.log("Desconto: " + vendedores.desconto());
console.log("Comiss\u00E3o pela regi\u00E3o: " + vendedorpf.comissao());
console.log("Sal\u00E1rio total: " + vendedorpf.salarioTotal());
console.log("Comiss\u00E3o pelo valor de venda: " + pessoajuridica.comissaoPJ());
console.log("Sal\u00E1rio total pelo total de funcion\u00E1rios: " + pessoajuridica.salarioTotalPJ());
/* try {
    vendedores.nome = ''
    console.log(vendedores)
} catch(error) {
    console.log(error.message)
}

try {
    vendedores.salario = 0
    console.log(vendedores)
} catch(error) {
    console.log(error.message)
}

try {
    vendedores.valor_venda = 0
    console.log(vendedores)
} catch(error) {
    console.log(error.message)
}

try {
    vendedorpf.regiao = ''
    console.log(pessoa_fisica)
} catch(error) {
    console.log(error.message)
}

try {
    pessoajuridica.nome_empresa = ''
    console.log(pessoajuridica)
} catch(error) {
    console.log(error.message)
}

try {
    pessoajuridica.total_func = 0
    console.log(pessoajuridica)
} catch(error) {
    console.log(error.message)
} */ 
