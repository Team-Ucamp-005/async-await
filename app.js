const buscarFrase = () => {
  const res = fetch("https://api.chucknorris.io/jokes/random");

  console.log(res)

  const frase = res.json();

  console.log(frase);
};

buscarFrase();
