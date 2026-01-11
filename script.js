<script>
  const valor = localStorage.getItem("valorPresente");
  document.getElementById("valor").innerText =
    `R$ ${parseFloat(valor).toFixed(2)}`;
</script>
