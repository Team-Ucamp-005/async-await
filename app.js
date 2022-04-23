console.log('Hola Mundo');


// const imprimirPalabra = (palabra) => {
//   console.log(palabra)
// }

// const saludar = (funcionCallback, str) => {
//   const palabra = str.toUpperCase()
//   return funcionCallback(palabra)
// }

// saludar(imprimirPalabra, 'holi crayoli')


// setTimeout(() => {
//   console.log('despues de 4 segundos')
// }, 4000);

// const saludar = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Hola mundo. Soy llamado desde una promesa');
//     reject('Ha fallado la promesa');
//   }, 2000);
// })

// console.log(saludar)

// saludar.then((res) => {
//   console.log(res)
// }).catch((err) => {
//   console.log(err)
// })

// const statuss = new Promise((resolve, reject) => {
//   let valor = 5;
//   if (valor > 5) {
//     resolve('La variable es mayor a 5');
//   } else {
//     reject('Es menor a 5');
//   }
// })

// console.log(statuss)
// statuss.then((res) => {
//   console.log(res)
// }).catch((err) => {
//   console.log(err)
// })

// statuss
// .then((res) => console.log(res))
// .catch((err) => console.log(err))

// statuss
//   .then(console.log)
//   .catch(console.log)



function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function uppercaseString(s) {
  // tu código va aquí
  await sleep(500)
  return s.toUpperCase()
}

uppercaseString("edward").then(console.log);
