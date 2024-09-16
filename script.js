document.addEventListener('DOMContentLoaded', function () {
  const rows = document.querySelectorAll('tbody tr');
  
  rows.forEach(row => {
    row.addEventListener('click', function() {
      // Exemplo: marcar/desmarcar a linha clicada
      this.classList.toggle('highlight');
    });
  });
});
