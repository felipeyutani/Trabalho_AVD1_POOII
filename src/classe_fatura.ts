/* 3) Crie uma classe Fatura com os atributos números, descrição, quantidade
Comprada e preço. Crie um método valor da Fatura para multiplicar a quantidade
comprada pelo preço. */

class Fatura {

    numero: number;
    descricao: string;
    quantidade_comprada: number;
    preco: number;

    constructor(
        numero: number,
        descricao: string,
        quantidade_comprada: number,
        preco: number
    ) {
        this.numero = numero,
        this.descricao = descricao,
        this.quantidade_comprada = quantidade_comprada,
        this.preco = preco
    }

    public valorFatura(){
        return this.quantidade_comprada * this.preco
    }
}

const fatura = new Fatura(5, 'Pão de batata', 3, 5.50)

console.log(`A quantidade comprada foi: ${fatura.quantidade_comprada}`)
console.log(`O preço do produtor é: ${fatura.preco}`)
console.log(`Valor da fatura: ${fatura.valorFatura()}`)
