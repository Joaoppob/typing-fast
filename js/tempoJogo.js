let umMin = $(".1min");
let tresMin = $(".3min");
let cincoMin = $(".5min");

let auxUm = false;
let auxTres = false;
let auxCinco = false;
function tempoDeJogo() {
  umMin.on("click", () => {
    verifica();
    auxUm = true;
    auxCinco = false;
    auxTres = false;
  });
  tresMin.on("click", () => {
    verifica();
    auxTres = true;
    auxCinco = false;
    auxUm = false;
  });
  cincoMin.on("click", () => {
    verifica();
    auxTres = false;
    auxCinco = true;
    auxUm = false;
  });
}

function verifica() {
  areaDeTexto.attr("disabled", false);
  areaDeTexto.focus();
  areaDeTexto.val("");
  parado = false;
  segundos.html("00" + ":" + "00");
  seg = 0;
  min = 0;
  atCaracteres.text("0");
  atPalavras.text("0");
  areaDeTexto.css("border", "solid 3px black");
  frase.css("color", "black");
  w = 0;
  erros = 0;
  y = 0;
  k = 0;
}
