document.addEventListener("DOMContentLoaded", () => {
  if (window.location.pathname.includes("presente.html")) {
    const params = new URLSearchParams(window.location.search);

    const nome = params.get("nome");
    const valor = params.get("valor");
    const qr = params.get("qr");
    const cartao = params.get("cartao");

    document.getElementById("titulo-presente").innerText = `${nome} — R$ ${valor}`;
    document.getElementById("qr-pix").src = qr;
    document.getElementById("link-cartao").href = cartao;
  }
});


