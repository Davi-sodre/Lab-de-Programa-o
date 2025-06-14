

function logout() {
  alert("Você saiu da conta.");
  window.location.href = "login.html";
}

function enviarMensagem() {
  const input = document.getElementById("mensagemInput");
  const texto = input.value.trim();

  if (texto !== "") {
    const chat = document.getElementById("chatMensagens");
    const nova = document.createElement("div");
    nova.className = "mensagem aluno";
    nova.textContent = texto;
    chat.appendChild(nova);
    input.value = "";

    chat.scrollTop = chat.scrollHeight;
  }
}
