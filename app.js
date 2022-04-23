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

const saludar = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Hola mundo. Soy llamado desde una promesa');
    reject('Ha fallado la promesa');
  }, 2000);
})

console.log(saludar)

saludar.then((res) => {
  console.log(res)
}).catch((err) => {
  console.log(err)
})




