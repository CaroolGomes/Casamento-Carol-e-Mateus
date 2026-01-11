function copiarPix() {
  const pix = document.getElementById("pix-chave").innerText;
  navigator.clipboard.writeText(pix);
  alert("Chave PIX copiada com sucesso 💕");
}
