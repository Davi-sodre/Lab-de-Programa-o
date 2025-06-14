function logout() {
  alert("Você saiu da conta.");
  window.location.href = "login.html";
}


function abrirPerfil() {
  window.location.href = "perfil.html";
}

document.addEventListener("DOMContentLoaded", () => {
  // Simulação de resposta da API
  const usuario = {
    nome: "Edson Silva",
    email: "edson@discente.ufma.br",
    curso: "Engenharia de Software",
    matricula: "2021001234",
    cpf: "000.000.000-00",
    telefone: "(98) 91234-5678",
    tipo: "aluno" // ou "monitor"
  };

  preencherPerfil(usuario);
});

function preencherPerfil(dados) {
  document.getElementById("nome").value = dados.nome || "";
  document.getElementById("telefone").value = dados.telefone || "";

  document.getElementById("email").value = dados.email || "";
  document.getElementById("curso").value = dados.curso || "";
  document.getElementById("matricula").value = dados.matricula || "";
  document.getElementById("cpf").value = dados.cpf || "";

  // Atualiza o topo da página com nome e tipo
  const cabecalho = document.querySelector(".user");
  cabecalho.querySelector("span").textContent = dados.nome;
  cabecalho.querySelector("strong").textContent = dados.tipo.charAt(0).toUpperCase() + dados.tipo.slice(1);
}

function habilitarEdicao() {
  document.getElementById("nome").disabled = false;
  document.getElementById("telefone").disabled = false;
}

document.getElementById("perfilForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const nome = document.getElementById("nome").value;
  const telefone = document.getElementById("telefone").value;

  alert(`Dados atualizados com sucesso!\nNome: ${nome}\nTelefone: ${telefone}`);
  // enviar as alterações para o backend com um PUT ou PATCH
});

