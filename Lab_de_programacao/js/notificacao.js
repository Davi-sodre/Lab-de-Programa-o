
//Teste
let notificacoes = [
  { tipo: "chat", texto: "Nova mensagem de Monitor A", link: "chat.html" },
  { tipo: "material", texto: "Novo material: Lista de Exercícios", link: "materiais.html" }
];

function alternarNotificacoes() {
  const box = document.getElementById("notificacoesBox");
  box.style.display = box.style.display === "block" ? "none" : "block";

  // Se abrir, consideramos que viu as notificações
  document.getElementById("indicadorNotificacao").style.display = "none";
}

function preencherNotificacoes() {
  const lista = document.getElementById("listaNotificacoes");
  notificacoes.forEach(notif => {
    const li = document.createElement("li");
    li.innerHTML = `<a href="${notif.link}">${notif.texto}</a>`;
    lista.appendChild(li);
  });

  // Exibe ponto vermelho se tiver algo
  if (notificacoes.length > 0) {
    document.getElementById("indicadorNotificacao").style.display = "block";
  }
}

// Chamar quando carregar a página
document.addEventListener("DOMContentLoaded", preencherNotificacoes);
