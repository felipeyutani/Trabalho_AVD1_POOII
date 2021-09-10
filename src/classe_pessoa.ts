/* 1) Crie uma classe Pessoa com os atributos nome, sexo e idade. Crie os getters e
setters. No setters valide se o nome for em branco retorne uma mensagem de nome
inválido. Se o sexo for diferente de Masculino ou Feminino retorne uma mensagem
inválida. Se a idade for 0 retorne uma mensagem de idade inválida. Crie um método
para receber a idade, se a idade for maior ou igual a 18 exibir a mensagem pessoa
maior de idade, caso contrário exibir a mensagem pessoa menor de idade. */

class Pessoas {
    static SEXOS = ['M', 'F', 'masculino', 'feminino']
    constructor(
        public _nome: string,
        public _sexo: string,
        public _idade: number
    ) {}

    get nome() {
        return this._nome
    }

    get sexo() {
        return this._sexo
    }

    get idade() {
        return this._idade
    }

    set nome(nome: string) {
        if (nome === '') {
            throw new Error('Nome inválido, preencha o campo!')
        }
        this._nome = nome
    }

    set sexo(sexo: string) {
        if(!Pessoas.SEXOS.includes(sexo)) {
            throw new Error('Sexo Inválido, digite M para masculino, e F para feminino')
        }
        this._sexo = sexo
    }

    set idade(idade: number) {
        if (idade === 0) {
            throw new Error('Idade inválida!')
        }
        this._idade = idade
    }

    public obtemIdade() {
        if (pessoas.idade >= 18) {
            console.log('Pessoa maior de idade!')
        } else {
            console.log('Pessoa menor de idade!')
        }
        return `A pessoa tem ${this.idade} anos`
    }
}

let pessoas = new Pessoas('João', 'M', 19)
console.log(pessoas.obtemIdade())

/* try {
    pessoas.nome = ''
    console.log(pessoas)
} catch(error) {
    console.log(error.message)
}

try {
    pessoas.sexo = ''
    console.log(pessoas)
} catch(error) {
    console.log(error.message)
}

try {
    pessoas.idade = 0
    console.log(pessoas)
} catch(error) {
    console.log(error.message)
} */
