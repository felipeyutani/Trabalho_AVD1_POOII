"use strict";
/* 6) Crie uma interface chamado IEndereço com os seguintes atributos rua, numero,
bairro e cidade. Crie um variável do endereço que seja do tipo da interface
endereço. Atribua um endereço uma rua, numero, bairro e cidade para a variável
endereço que é do mesmo tipo da interface. Utilize o console.log para exibir o
conteúdo da variável endereço. */
var Endereco = /** @class */ (function () {
    function Endereco(rua, numero, bairro, cidade) {
        this.rua = rua;
        this.numero = numero;
        this.bairro = bairro;
        this.cidade = cidade;
    }
    Endereco.cep = function (_a) {
        var rua = _a.rua, numero = _a.numero, bairro = _a.bairro, cidade = _a.cidade;
        return new Endereco(rua, numero, bairro, cidade);
    };
    return Endereco;
}());
var endereco = Endereco.cep({
    rua: 'Rua dos Anjos',
    numero: 1001,
    bairro: 'Vila Velha',
    cidade: 'Santo Amaro'
});
console.log(endereco);
/* export function Endereco({ rua, numero, bairro, cidade }: IEndereco) {
    const cep = {
        rua,
        numero,
        bairro,
        cidade
    }
    return cep;
} */ 
