document.addEventListener("DOMContentLoaded", function () {
  const botaoSair = document.querySelector(".bnt-Sair");

  if (botaoSair) {
    botaoSair.addEventListener("click", function () {
      const confirmar = confirm("Tem certeza que deseja sair?");
      if (confirmar) {
        // Aqui você pode limpar dados da sessão ou redirecionar
        localStorage.clear();
        sessionStorage.clear();
        window.location.href = "/login.html"; // ou a página desejada
      }
    });
  }
});
