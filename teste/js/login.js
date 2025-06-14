function nextStep(step,id) {
  idEsc = id;  
  for (let i = 1; i <= 2; i++) {
    document.getElementById('step' + i).classList.remove('active');
  }
  document.getElementById('step' + step).classList.add('active');
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
