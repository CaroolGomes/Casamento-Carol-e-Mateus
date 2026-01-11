// =====================================
// Script principal - Caroline & Mateus
// =====================================

document.addEventListener("DOMContentLoaded", () => {
  console.log("💍 Site Caroline & Mateus carregado com sucesso");

  // Verifica se está na página de presente
  if (window.location.pathname.includes("presente.html")) {
    tratarPaginaPresente();
  }
});

function tratarPaginaPresente() {
  const params = new URLSearchParams(window.location.search);

  const nome = params.get("nome");
  const valor = params.get("valor");
  const qr = params.get("qr");
  const cartao = params.get("cartao");

  const titulo = document.getElementById("titulo-presente");
  const imagemQR = document.getElementById("qr-pix");
  const linkCartao = document.getElementById("link-cartao");

  // Se faltar algum dado essencial, mostra aviso
  if (!nome || !valor || !qr) {
    titulo.innerText = "Presente não identificado";
    imagemQR.style.display = "none";
    linkCartao.style.display = "none";
    return;
  }

  titulo.innerText = `${nome} — R$ ${valor}`;
  imagemQR.src = qr;

  // Cartão é opcional
  if (cartao && cartao !== "#


