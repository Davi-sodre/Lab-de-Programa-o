function buscarMonitorias() {
  const disciplina = document.getElementById("inputDisciplina").value.trim();
  const monitor = document.getElementById("inputMonitor").value.trim();
  const resultadoDiv = document.getElementById("resultadoBusca");

  // Simulação de resultado (futuramente virá de uma API)
  if (disciplina || monitor) {
    resultadoDiv.innerHTML = `
      <div class="card-monitoria">
        <div class="info">
          <h3>Laboratório de Programação</h3>
          <p>Monitor: João Silva</p>
        </div>
        <a href="detalhe-monitoria.html" class="acessar">
          <img src="https://img.icons8.com/ios-filled/24/000000/view-details.png" alt="Ver detalhes" />
        </a>
      </div>
    `;
  } else {
    resultadoDiv.innerHTML = `<p>Digite algum critério para buscar monitorias.</p>`;
  }
}
