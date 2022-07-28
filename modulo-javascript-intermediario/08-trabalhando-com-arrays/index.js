let frutas = ['banana', 'maçã', 'laranja', 'pêra']
// let frutasTamanho = frutas.length

// for(let i = 0 ; i < frutasTamanho ; i++){
//     console.log('Fruta: ' + frutas[i])
// }

// frutas.forEach(function(item, indice, array){
//     console.log('Fruta: ' + item)
// })

frutas.unshift('morango') //adiciona no inicio da array
frutas.push('manga') //adiciona no fim da array
frutas.shift() //retira o elemento no ínicio da array
frutas.pop() //retira o elemento no final da array

let posicaoLaranja = frutas.indexOf('laranja')
console.log(posicaoLaranja)
