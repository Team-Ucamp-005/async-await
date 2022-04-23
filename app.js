console.log('Hola Mundo');


const imprimirPalabra = (palabra) => {
  console.log(palabra)
}

const saludar = (funcionCallback, str) => {
  const palabra = str.toUpperCase()
  return funcionCallback(palabra)
}

saludar(imprimirPalabra, 'holi crayoli')


setTimeout(() => {
  console.log('despues de 4 segundos')
}, 4000);