class Placar {
  constructor() {}

  templateFixo() {
    return `
	<div class="tabela__placar">
        <span class="placar">
          <h3>Placar</h3>
          <table>
            <thead>
              <tr>
                <th>WPM(PPM)</th>
                <th>Frases</th>
              </tr>
            </thead>
          </table>
        </span>
      </div>
	  `;
  }
  colocaFixo() {
    $("main").append(this.templateFixo());
  }
}
