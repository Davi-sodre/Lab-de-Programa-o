let selectedStars = 0;
const stars = document.querySelectorAll(".estrela");

stars.forEach((star) => {
  star.addEventListener("click", () => {
    selectedStars = parseInt(star.dataset.value);
    updateStars();
  });

  star.addEventListener("mouseover", () => {
    const val = parseInt(star.dataset.value);
    stars.forEach((s, i) => {
      s.classList.toggle("hovered", i < val);
    });
  });

  star.addEventListener("mouseout", () => {
    stars.forEach((s) => s.classList.remove("hovered"));
  });
});

function updateStars() {
  stars.forEach((s, i) => {
    s.classList.toggle("selecionada", i < selectedStars);
  });
}

function enviarAvaliacao() {
  alert(`Você avaliou com ${selectedStars} estrela(s). Obrigado pelo feedback!`);
  // salvar ou redirecionar
  window.location.href = "sessao-detalhes.html";
}

function avaliarSessao() {
  window.location.href = "avaliacao.html";
}