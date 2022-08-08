let pessoas = [
    { nome:'Rhuan', idade: 28 },
    { nome:'Marahma', idade: 26 },
    { nome:'Joana', idade: 63 }
]

// let nomeDasPessoas = []
// for(let i = 0; i < pessoas.length; i++){
//     nomeDasPessoas.push(pessoas[i].nome)
// }

// console.log(nomeDasPessoas)

// let nomeDasPessoas = pessoas.map(function(pessoa){
//     return pessoa.nome + " tem " + pessoa.idade + " anos de idade"
// })

// Com Arrow Function
let nomeDasPessoas = pessoas.map(pessoa => pessoa.nome + " tem " + pessoa.idade + " anos de idade")

console.log(nomeDasPessoas)