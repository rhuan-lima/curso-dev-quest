// let videoGame = {
//     nome: 'xbox',
//     valor: 3000,
//     jogos: [
//         {nome: 'Final Fantasy'}, 
//         {nome: 'Fallout'}]
// }

// let jogo3 = {
//     nome: 'Fifa'
// }

// videoGame.jogos.push(jogo3)

// console.log(videoGame)

let cliente = {
    nome: 'rhuan',
    ultimoPedido: {
        produto: 'xbox',
        valor: 3000,
        jogos: [
            {nome: 'fifa'}
        ]
    }
}

console.log(cliente.ultimoPedido.jogos[0].nome)