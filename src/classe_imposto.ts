/* 4) Crie uma classe para calcular o imposto de renda. Crie uma classe Pai com os
atributos nome e renda anual. Crie os getters e setters com as suas validações. Crie
uma classe filha Pessoa Física para herdar da classe Pai e com o atributo gastos
com saúde, crie os getter e setter com a validação. Crie uma classe filha Pessoa
Jurídica para herdar da classe Pai e com o atributo número de funcionários. Crie o
getter e o setter com a validação.
Regras para os cálculos
Pessoa Física: Pessoas cuja renda foi abaixo de 20.000,00 pagam 15% de imposto.
Pessoas com renda maior ou igual a 20.000,00 pagam imposto de 25%. Se a
pessoa teve gastos com saúde, 50% destes gastos são abatidos no imposto.
Exemplo: Se uma pessoa cuja renda foi de 50.000,00 e teve 2.000,00 em gastos
com saúde, o imposto fica: (50.000,00 * 25%) - (2000 * 50%) = 11.500,00
Pessoa Jurídica: Pessoas jurídicas pagam 16% de imposto, porém, se a empresa
possuir mais de 10 funcionários, ela paga 14% de imposto. Exemplo: Uma empresa
Trabalho de POO II 2
cuja renda foi de 400.000,00 e possui 25 funcionários, o imposto fica: 400.000,00 *
14% = 56.000,00 */

class Imposto {
    private _nome: string;
    private _renda_anual: number;

    constructor(nome: string, renda_anual: number) {
        this._nome = nome;
        this._renda_anual = renda_anual;
    }

    get nome(){
        return this._nome
    }

    get renda_anual(){
        return this._renda_anual
    }

    set nome(nome: string) {
        if(nome === '') {
            throw new Error('Nome inválido, preencha o campo!')
        }
        this._nome = nome
    }

    set renda_anual(renda_anual: number) {
        if(renda_anual === 0) {
            throw new Error('Renda anual inválida, preencha o campo!')
        }
        this._renda_anual = renda_anual
    }
}

class Pessoa_fisica extends Imposto {
    public _gasto_saude: number;

    constructor(nome: string, renda_anual: number, gasto_saude: number) {
        super(nome, renda_anual);
        this._gasto_saude = gasto_saude;
    }

    get gasto_saude(){
        return this._gasto_saude
    }

    set gasto_saude(gasto_saude: number) {
        if(gasto_saude = 0) {
            throw new Error('Gasto com saúde inválida, preencha o campo!')
        }
        this._gasto_saude = gasto_saude
    }

    public calculoImpostoFI() {
        if(this.renda_anual <= 20000) {
            return (this.renda_anual*0.15) - (this.gasto_saude*0.5)
        } else {
            return (this.renda_anual*0.25) - (this.gasto_saude*0.5)
        }
    }
}

class Pessoa_juridica extends Imposto {
    public _numero_func: number;

    constructor(nome: string, renda_anual: number, numero_func: number) {
        super(nome, renda_anual);
        this._numero_func = numero_func
    }

    get numero_func() {
        return this._numero_func
    }

    set numero_func(numero_func: number) {
        if(numero_func = 0) {
            throw new Error('Numero de funcionários inválido, preencha o campo corretamente!')
        }
        this._numero_func = numero_func
    }

    public calculoImpostoJR() {
        if(this.numero_func <= 10) {
            return this.renda_anual*0.16
        } else {
            return this.renda_anual*0.14
        }
    }
}

let imposto = new Imposto('José', 20000)
let pessoa_fisica = new Pessoa_fisica('Maria', 50000, 2000)
let pessoa_juridica = new Pessoa_juridica('Vanderson', 400000, 50)

console.log(`Imposto pessoa fisica: ${pessoa_fisica.calculoImpostoFI()}`)
console.log(`Imposto pessoa juridica: ${pessoa_juridica.calculoImpostoJR()}`)

/* try {
    imposto.nome = 'ss'
    console.log(imposto)
} catch(error) {
    console.log(error.message)
}

try {
    imposto.renda_anual = 5
    console.log(imposto)
} catch(error) {
    console.log(error.message)
}

try {
    pessoa_fisica.gasto_saude = 5
    console.log(pessoa_fisica)
} catch(error) {
    console.log(error.message)
}

try {
    pessoa_juridica.numero_func = 5
    console.log(pessoa_juridica)
} catch(error) {
    console.log(error.message)
} */