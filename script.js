document.addEventListener("DOMContentLoaded", () => {
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

  if (!nome || !valor || !qr) {
    titulo.innerText = "Presente não identificado";
    imagemQR.style.display = "none";
    linkCartao.style.display = "none";
    return;
  }

  titulo.innerText = `${nome} — R$ ${valor}`;
  imagemQR.src = qr;

  if (cartao && cartao !== "#") {
    linkCartao.href = cartao;
  } else {
    linkCartao.style.display = "none";
  }
}


