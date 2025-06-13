function Irparacadastro() {
      window.location.href = "cadastrar-monitoria.html";
  }

document.getElementById('formMonitoria').addEventListener('submit', function(event) {
  event.preventDefault(); // impede envio imediato
  document.getElementById('confirmBox').style.display = 'flex';
});

document.getElementById('btnOk').addEventListener('click', function() {
  // Agora realmente envia o formulário
  document.getElementById('confirmBox').style.display = 'none';
  document.getElementById('formMonitoria').submit();
});

function fecharConfirm() {
  document.getElementById('confirmBox').style.display = 'none';
  window.location.href = "home-monitor.html";
}

