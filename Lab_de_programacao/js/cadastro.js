function nextStep(step) {
  for (let i = 1; i <= 3; i++) {
    document.getElementById('step' + i).classList.remove('active');
    document.getElementById('circle' + i).classList.remove('active');
  }
  document.getElementById('step' + step).classList.add('active');
  document.getElementById('circle' + step).classList.add('active');
}

function finalizar() {
    // Redireciona com base no ID salvo
    if (idEsc === "home-aluno") {
      window.location.href = "home-aluno.html";
    } else if (idEsc === "home-monitor") {
      window.location.href = "home-monitor.html";
    } else {
      alert("Erro: Nenhuma opção selecionada.");
    }
  }