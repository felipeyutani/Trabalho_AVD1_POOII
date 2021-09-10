
/* 2) Crie uma classe Veiculos com os atributos modelo, marca, ano, valorLocacao e
quantidade de dias. Crie os getters e setters. 
No setters crie validações para não aceitar modelo, marca, ano, valorLocacao e quantidade em branco ou com valor
zero. Crie um método passeio para receber a quantidade de dias e o valor da
locação. O sistema calcule o total que será a multiplicação da quantidade de dias
pelo valor da locação. */


class Veiculos {
    constructor(
        public _modelos: string,
        public _marca: string,
        public _ano: number,
        public _valorLocacao: number,
        public _qt_dias: number
    ) {}

    get modelos(){
        return this._modelos
    }

    get marca(){
        return this._marca
    }

    get ano(){
        return this._ano
    }

    get valorLocacao(){
        return this._valorLocacao
    }

    get qt_dias(){
        return this._qt_dias
    }

    set modelos(modelos: string) {
        if(modelos === '') {
            throw new Error('Modelo inválido, preencha o campo!')
        }
        this._modelos = modelos
    }

    set marca(marca: string) {
        if(marca === '') {
            throw new Error('Marca inválida, preencha o campo!')
        }
        this._marca = marca
    }

    set ano(ano: number) {
        if(ano === 0) {
            throw new Error('Ano inválido, preencha o campo corretamente!')
        }
        this._ano = ano
    }

    set valorLocacao(valorLocacao: number) {
        if(valorLocacao === 0) {
            throw new Error('Valor de locação inválido, preencha o campo corretamente!')
        }
        this._valorLocacao = valorLocacao
    }

    set qt_dias(qt_dias: number) {
        if(qt_dias === 0) {
            throw new Error('Quantidade de dias inválida, preencha o campo corretamente!')
        }
        this._qt_dias = qt_dias
    }

    public passeio() {
        return `O valor da alocação do carro será de ${this.qt_dias * this.valorLocacao} reais`
    }
}


let veiculos = new Veiculos('Golf', 'Volkswagen', 2003, 100, 3)

console.log(`Modelo do carro: ${veiculos.modelos}`)
console.log(`Quantidade de dias: ${veiculos.qt_dias}`)
console.log(`Valor da locação: ${veiculos.valorLocacao}`)
console.log(veiculos.passeio())

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