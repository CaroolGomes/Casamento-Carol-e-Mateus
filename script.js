/* ================================
   SCRIPT – LISTA DE PRESENTES
   Caroline & Mateus
================================ */

/**
 * Função chamada ao clicar em "Presentear"
 * Salva o valor do presente e redireciona
 */
function presentear(valor) {
  localStorage.setItem("valorPresente", valor);
  window.location.href = "presente.html";
}

/**
 * Função para carregar os dados
 * Usada no presente.html
 */
function carregarPresente() {
  const valor = localStorage.getItem("valorPresente");

  const valorElemento = document.getElementById("valor-presente");
  const qrCode = document.getElementById("qrCode");
  const linkPagamento = document.getElementById("linkPagamento");

  // Se não houver valor salvo
  if (!valor || !valorElemento) {
    if (valorElemento) {
      valorElemento.innerText = "Nenhum presente selecionado 🤍";
    }
    if (qrCode) qrCode.style.display = "none";
    if (linkPagamento) linkPagamento.style.display = "none";
    return;
  }

  // Exibe valor formatado
  const valorFormatado = parseFloat(valor).toFixed(2).replace(".", ",");
  valorElemento.innerText = `R$ ${valorFormatado}`;

  // Define QR Code e link (AJUSTE AQUI)
  if (qrCode) {
    qrCode.src = `qrcodes/pix-${valor}.png`;
  }

  if (linkPagamento) {
    linkPagamento.href = `https://seulinkdepagamento.com/valor-${valor}`;
  }
}

/**
 * Executa automaticamente ao abrir a página
 */
document.addEventListener("DOMContentLoaded", carregarPresente);
