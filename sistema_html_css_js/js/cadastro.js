function nextStep(step) {
  for (let i = 1; i <= 3; i++) {
    document.getElementById('step' + i).classList.remove('active');
    document.getElementById('circle' + i).classList.remove('active');
  }
  document.getElementById('step' + step).classList.add('active');
  document.getElementById('circle' + step).classList.add('active');
}

function finalizar() {
      window.location.href = "agendamento.html";
  }