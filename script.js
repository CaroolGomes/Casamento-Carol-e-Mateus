function presentear(valor) {
  localStorage.setItem("valorPresente", valor);
  window.location.href = "presente.html";
}

function carregarPresente() {
  const valor = localStorage.getItem("valorPresente");

  const valorElemento = document.getElementById("valor-presente");
  const qrCode = document.getElementById("qrCode");
  const linkPagamento = document.getElementById("linkPagamento");

  if (!valor || !valorElemento) return;

  valorElemento.innerText =
    "R$ " + parseFloat(valor).toFixed(2).replace(".", ",");

  if (qrCode) qrCode.src = `qrcodes/pix-${valor}.png`;
  if (linkPagamento)
    linkPagamento.href = `https://seulinkdepagamento.com/valor-${valor}`;
}

document.addEventListener("DOMContentLoaded", carregarPresente);
