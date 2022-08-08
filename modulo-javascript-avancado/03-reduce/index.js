let ordens = [
    { cliente: 'Rhuan', tipo: 'compra', quantidade: 56, ativo: 'NFLX34' },
    { cliente: 'Marahma', tipo: 'compra', quantidade: 76, ativo: 'AAPL45' },
    { cliente: 'Joana', tipo: 'venda', quantidade: 21, ativo: 'GORW22' }
]

// let quantidadeDeOrdens = 0
// for(let i = 0; i < ordens.length; i++){
//     quantidadeDeOrdens += ordens[i].quantidade
// }

// console.log(quantidadeDeOrdens)

let quantidadeDeOrdens = ordens.reduce(function(somaDasOrdens, ordem){
    console.log('Ordem', somaDasOrdens, ordem)
    return somaDasOrdens + ordem.quantidade
}, 0)

console.log('Ordens', quantidadeDeOrdens)

// Com Arrow Function
// let quantidadeDeOrdens = ordens.reduce((somaDasOrdens, ordem) => somaDasOrdens + ordem.quantidade
// }, 0)