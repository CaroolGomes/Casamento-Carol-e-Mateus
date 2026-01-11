document.addEventListener("DOMContentLoaded", () => {

  if (!window.location.pathname.includes("presente.html")) return;

  const params = new URLSearchParams(window.location.search);

  const nome = params.get("nome");
  const valor = params.get("valor");
  const qr = params.get("qr");
  const cartao = params.get("cartao");

  const titulo = document.getElementById("titulo-presente");
  const imagemQR = document.getElementById("qr-pix");
  const linkCartao = document.getElementById("link-cartao");

  const basePath = window.location.origin + "/Casamento-Carol-e-Mateus/assets/";

  titulo.innerText = `${nome} — R$ ${valor}`;
  imagemQR.src = basePath + qr;

  if (cartao && cartao !== "#") {
    linkCartao.href = cartao;
    linkCartao.style.display = "inline-block";
  } else {
    linkCartao.style.display = "none";
  }
});
