function logout() {
  alert("Você saiu da conta.");
  window.location.href = "login.html";
}

function voltarPaginaAnterior() {
  history.back();
}

function excluirSessao() {
  document.getElementById("modalExclusao").style.display = "flex";
}

function fecharModal() {
  document.getElementById("modalExclusao").style.display = "none";
  window.location.href = "sessao-aluno.html";
}

function abrirChat() {
  window.location.href = "chat.html";
}

function acessarMateriais() {
  window.location.href = "materiais-apoio.html";
}