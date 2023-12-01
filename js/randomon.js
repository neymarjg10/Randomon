alert("Bienvenidos a Randomon")

function aleatorio(min, max) {

  return Math.floor(Math.random() * (max - min + 1) + min)

}

async function traerPokemon(texto1, texto2) {

  let min = 1
  let max = 1010

  let numeroAleatorio = aleatorio(min, max)

  /// API
  const Http = new XMLHttpRequest();
  const url = 'https://pokeapi.co/api/v2/pokemon/' + numeroAleatorio;
  Http.open("GET", url);
  Http.send();
  Http.onreadystatechange = (e) => {
    if (Http.readyState === XMLHttpRequest.DONE && Http.status === 200) {
      let data = JSON.parse(Http.responseText)
      const container = document.querySelector(texto1);
      const img = document.createElement("img");
      img.src = data.sprites.front_default;
      img.alt = "Logo Javascript";
      container.appendChild(img);
      document.getElementById(texto2).style.display = 'none'

    }
  }
  /// END API

}

function Refrescar(){
  location.reload()
}
function SelectionbotonREINICIAR(){
  if ( boton6, onclick) {
    botonREINICIAR.style.display = "block" 
  }  
}

