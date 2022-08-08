// setTimeout(() => {
//     alert('olá mundoooo')
// }, 1000)

// setInterval(() => {
//     console.log('executando a cada 2s')
// }, 2000);

// setTimeout(() => {
//     console.log('dentro do settimeout')
// }, 4000);

// console.log('depois do settimeout')

const idDoIntervalo = setInterval(() => {
    console.log('executando a cada 2s')
}, 2000)

console.log(idDoIntervalo)
clearInterval(idDoIntervalo)
clearTimeout()