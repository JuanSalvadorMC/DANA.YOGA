document.addEventListener('DOMContentLoaded', () => {
  const elementosCarousel = document.querySelectorAll('.carousel');
  M.Carousel.init(elementosCarousel, {
    duration: 1500,
    dist: -80,
    shift: 5,
    padding: 5,
    numVisible: 6,
    indicators: true,
    noWrap: false
  });
});