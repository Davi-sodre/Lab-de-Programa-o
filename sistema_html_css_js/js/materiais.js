
const botoesAbrir = document.querySelectorAll(".abrir");

botoesAbrir.forEach(btn => {
  btn.addEventListener("click", () => {
    document.getElementById("modalMaterial").style.display = "flex";
  });
});

function fecharModalMaterial() {
  document.getElementById("modalMaterial").style.display = "none";
}
