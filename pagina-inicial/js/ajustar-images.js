function ajustarTamanhoImagem() {
  var cards = document.querySelectorAll('.card');
  cards.forEach(function (card) {
    var imagem = card.querySelector('.card-image-top');
    var larguraCard = card.clientWidth;
    imagem.style.width = larguraCard + 'px';
    imagem.style.height = '200px';
  });
}
window.addEventListener('load', ajustarTamanhoImagem);
window.addEventListener('resize', ajustarTamanhoImagem);
