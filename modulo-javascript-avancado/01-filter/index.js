let pessoas = [
    {nome: 'Rhuan', idade: 28},
    {nome: 'Marahma', idade: 28},
    {nome: 'Joana', idade: 64}
]

// let pessoasComIdadeDe28Anos = []
// for(let i = 0; i < pessoas.length; i++){
//     if(pessoas[i].idade === 28){
//         pessoasComIdadeDe28Anos.push(pessoas[i])
//     }
// }

let pessoasComIdadeDe28Anos = pessoas.filter(function(pessoa){
    return pessoa.idade === 28
})

// Com Arrow Function, em uma linha
// let pessoasComIdadeDe28Anos = pessoas.filter((pessoa) => pessoa.idade === 28
// )

console.log(pessoasComIdadeDe28Anos)