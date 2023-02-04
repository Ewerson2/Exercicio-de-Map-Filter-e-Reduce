//Map
//Dobre os numeros
var n1 = [5, 50, 80, 1, 2, 32, 5, 8, 7, 11, 15, 22, 27]
const numerosEmDobro = n1.map(function (valor) {
    return valor * 2
})
console.log("O valor dos números dobrados são: " + numerosEmDobro)

//Map
//Para cada elemento retorne apenas uma string com o nome da pessoa

const pessoas = [
    { nome: `Luiz`, idade: 62 },
    { nome: `Maria`, idade: 23 },
    { nome: `Eduardo`, idade: 55 },
    { nome: `Leticia`, idade: 19 },
    { nome: `Rosana`, idade: 32 },
    { nome: `Wallace`, idade: 47 },
]
const nomePessoa = pessoas.map(function (valor) {
    return valor.nome
})
console.log("O nome das pessoas são: " + nomePessoa)

//Remova apenas a chave `nome` do objeto
const pessoas1 = [
    { nome: `Luiz`, idade: 62 },
    { nome: `Maria`, idade: 23 },
    { nome: `Eduardo`, idade: 55 },
    { nome: `Leticia`, idade: 19 },
    { nome: `Rosana`, idade: 32 },
    { nome: `Wallace`, idade: 47 },
]
const idadePessoa = pessoas1.map(function (valor) {
    delete valor.nome
    return valor.idade
})
console.log("A idade das pessoas são: " + idadePessoa)

//Adicione uma chave Id em cada objeto

const pessoas2 = [
    { nome: `Luiz`, idade: 62 },
    { nome: `Maria`, idade: 23 },
    { nome: `Eduardo`, idade: 55 },
    { nome: `Leticia`, idade: 19 },
    { nome: `Rosana`, idade: 32 },
    { nome: `Wallace`, idade: 47 },
]

const chaveId = pessoas2.map(function (valor, indice) {
    valor.id = indice + 1
    return valor
})

console.log(chaveId)


//Retorne as pessoas que tem o nome com 5 letras ou mais
const pessoas3 = [
    { nome: `Luiz`, idade: 62 },
    { nome: `Maria`, idade: 23 },
    { nome: `Eduardo`, idade: 55 },
    { nome: `Leticia`, idade: 19 },
    { nome: `Rosana`, idade: 32 },
    { nome: `Wallace`, idade: 47 },
]
const PessoasNomes = pessoas3.filter(function (obj) {
    return obj.nome.length >= 5
})

console.log(PessoasNomes)

//Retorne as pessoas com mais de 50 anos
const pessoas4 = [
    { nome: `Luiz`, idade: 62 },
    { nome: `Maria`, idade: 23 },
    { nome: `Eduardo`, idade: 55 },
    { nome: `Leticia`, idade: 19 },
    { nome: `Rosana`, idade: 32 },
    { nome: `Wallace`, idade: 47 },
]
const PessoasIdade = pessoas4.filter(function (obj) {
    return obj.idade > 50
})

 console.log(PessoasIdade)

//Retorne as pessoa cujo nome termina com A

const pessoas5 = [
    { nome: `Luiz`, idade: 62 },
    { nome: `Maria`, idade: 23 },
    { nome: `Eduardo`, idade: 55 },
    { nome: `Leticia`, idade: 19 },
    { nome: `Rosana`, idade: 32 },
    { nome: `Wallace`, idade: 47 },
]

const pessoasUltima = pessoas5.filter(function (obj) {
    return obj.nome.toLowerCase().endsWith("a")
})

console.log(pessoasUltima)


// Reduce
// Some todos os valores do array

const n2 = [5, 50, 80, 1, 2, 32, 5, 8, 7, 11, 15, 22, 27]

const total = n2.reduce(function (acumulador, valor) {
    acumulador = acumulador + valor
    return acumulador
}, 0)
console.log("A soma de todos os números são: " + total)

//Retorne um array com os pares(filter)

const n3 = [5, 50, 80, 1, 2, 32, 53, 8, 7, 11, 15, 22, 27]

const pares = n3.filter(function (valor) {
    if (valor % 2 == 0) {
        return valor
    }
})
console.log("Esses valores são números pares: " + pares)

//retorne um array com o dobro dos valores(map)

const n4 = [5, 50, 80, 1, 2, 32, 53, 8, 7, 11, 15, 22, 27]

const dobro = n4.map(function (obj) {
    return obj * 2
})

console.log("Esses valores são o dobro do array: " + dobro)

//retorne a pessoa mais velha(Reduce)

const pessoas6 = [
    { nome: `Luiz`, idade: 62 },
    { nome: `Maria`, idade: 23 },
    { nome: `Eduardo`, idade: 55 },
    { nome: `Leticia`, idade: 19 },
    { nome: `Rosana`, idade: 32 },
    { nome: `Wallace`, idade: 85 },
]
const maisVelha = pessoas6.reduce(function (acumulador, valor) {
    if (acumulador.idade > valor.idade) {
        return acumulador
    }
    return valor
})
console.log(maisVelha)


//Retorne a soma do dobro de todos os pares usando  Filter+Map+Reduce
//Filtra números pares (filter)
//Multiplicar por dois (Map)
////Somar todos ele (Reduce)

const num = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const result = num.filter(function (valor) {
    return valor % 2 == 0
}).map(function (valor) {
    return valor * 2
}).reduce(function (contador, valor) {
    return contador += valor
})

console.log("A soma do dobro de todos os pares é: " + result)
