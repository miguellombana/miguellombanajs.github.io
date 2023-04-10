document.addEventListener('DOMContentLoaded', () => {
  const elementosCarousel = document.querySelectorAll('.carousel');
  M.Carousel.init(elementosCarousel, {
    duration: 150,
    dist: -80,
    shift: 5,
    padding: 5,
    numVisible: 3,
    indicators: true,
    noWrap: false
  });
});

iluminada = new Image(84,34)
iluminada.src = "img/iconocoche.png"
apagada = new Image(84,34)
apagada.src = "img/pulse.png"

onmouseover="window.document['imagen1'].src = iluminada.src"
onmouseout="window.document['imagen1'].src = apagada.src"
