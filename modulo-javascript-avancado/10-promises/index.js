/*
    Pendente
    Realizada Resolve
    Recusada Reject
    Estabelecida
*/

// new Promise((resolve, reject) => {

// })

let chaleiraEstaNoFogao = true
let fogaoEstaLigado = false

let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaLigado) => {
    return new Promise((resolve, reject) => {
        if(chaleiraEstaNoFogao && fogaoEstaLigado){
            console.log('começando o processo de ferver água')
            resolve()
        }else{
            console.log('é necessário ligar o fogão e colocar a chaleira no fogão para ferver a água')
            reject()
        }
    })
}


ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
console.log('fazendo café')