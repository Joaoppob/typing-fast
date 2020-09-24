let frase = $(".frase");
let palavras = $(".contador__palavras");

let areaDeTexto = $(".area__texto");
let atPalavras = $(".at__contador__palavras");
let atCaracteres = $(".at__contador__caracteres");

let atFrases = $(".at__contador__frases");
let k = -1;

let palavrasAux = 0;
let atFrasesAux = 0;
let atCaracteresAux = 0;

function contador() {
  areaDeTexto.on("input", () => {
    atPalavras.text(areaDeTexto.val().split(/\S+/).length - 1 + " ");
    palavrasAux = areaDeTexto.val().split(/\S+/).length - 1;
    atCaracteres.text(areaDeTexto.val().replace(/\s/g, "").length + "");
    atCaracteresAux = areaDeTexto.val().replace(/\s/g, "").length;
  });
  areaDeTexto.one("input", () => {
    setInterval(cronometro, 1000);
  });
}
let y = 0;
let x = 0;
let z = 0;
let w = 0;
let erros = 0;

areaDeTexto.on("input", () => {
  let digitado = areaDeTexto.val();
  let comparavel = frase.text().substr(0, digitado.length);

  let comparar1 = comparavel.split("").toString();
  let comparar2 = digitado.split("").toString();

  if (digitado == frase.text()) {
    salvaCaracter();
    salvaPalavras();
    fraseAleatoria();
    areaDeTexto.val("");
    areaDeTexto.focus();
    areaDeTexto.atFrasesAux++;
  }

  if (digitado != "") {
    if (comparar1 === comparar2) {
      frase.css("color", "black");
      areaDeTexto.css("border", "solid 3px green");
    } else {
      frase.css("color", "red");
      areaDeTexto.css("border", "solid 3px red");
      erros++;
    }
  }
});
function salvaCaracter() {
  x = parseInt(atCaracteresAux);
  y = y + x;
}
function salvaPalavras() {
  z = parseInt(palavrasAux);
  w = w + z;
}

function aumentaAreaDeTexto(palavra) {
  if (palavra > 14) {
    areaDeTexto.css("height", "40px");
  } else {
    areaDeTexto.css("height", "20px");  
  }
}
