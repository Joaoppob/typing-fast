let seg = 0;
let min = 0;
let minAux = 0;

let displaySeg = 1;
let displayMin = 0;

let segundos = $(".contador__segundos");
let parado = false;
let placar = new Placar();
let aux = true;
let a = 0;
function cronometro() {
  if (parado == false) {
    seg++;

    if (seg == 60) {
      min++;
      minAux++;
      seg = 0;
    }

    if (seg < 10) {
      displaySeg = "0" + seg.toString();
    } else {
      displaySeg = seg;
    }
    if (min < 10) {
      displayMin = "0" + min.toString();
    } else {
      displayMin = min;
    }
    segundos.html(displayMin + ":" + displaySeg);

    if (auxUm == true && min == 1) {
      reseta();
      if (aux) {
        colocaTemplate();
        aux = false;
        a = 1;
      }
      insereTabela();
    }
    if (auxTres == true && min == 3) {
      reseta();
      if (aux) {
        colocaTemplate();
        aux = false;
        a = 2;
      }
      insereTabela();
    }
    if (auxCinco == true && min == 5) {
      reseta();
      if (aux) {
        colocaTemplate();
        aux = false;
        a = 3;
      }
      insereTabela();
    }
  }
}
function colocaTemplate() {
  if (aux === true) {
    placar.colocaFixo();
    aux = false;
  }
}

function reseta() {
  areaDeTexto.attr("disabled", true);
  seg = 0;
  min = 0;
  parado = true;
  areaDeTexto.css("background:", "lightgrey");
  frase.css("color", "black");
  areaDeTexto.css("border", "solid 4px black");
  y = y + atCaracteresAux;
}

function insereTabela() {
  let linha = `<tbody>
  <tr>
    <td>${w / a}</th>
    <td>${k}</th>
  </tr>
</tbody>;`;

  $("table").prepend(linha);
}
