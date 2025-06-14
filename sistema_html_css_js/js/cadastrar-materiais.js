document.getElementById('formMaterial').addEventListener('submit', function(event) {
  event.preventDefault(); // impede envio imediato
  document.getElementById('confirmBox').style.display = 'flex';
});

document.getElementById('btnOk').addEventListener('click', function() {
  // Agora realmente envia o formulário
  document.getElementById('confirmBox').style.display = 'none';
  document.getElementById('formMaterial').submit();
});

function fecharConfirm() {
  document.getElementById('confirmBox').style.display = 'none';
  window.location.href = "home-monitor.html";
}

