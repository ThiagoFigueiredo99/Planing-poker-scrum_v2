(() => {
  document.addEventListener("DOMContentLoaded", function () {
    var splide = new Splide(".splide", {
      type: "slide",
      perPage: 3,
      perMove: 1,
      gap: "15px",
      width: "min(1200px, 100% - 60px)",
      // rewind     : true,
      breakpoints: {
        992: {
          perPage: 2,
        },
        480: {
          perPage: 1,
          rewind: true,
        },
      },
    });
    splide.mount();
  });

  const card = document.getElementsByClassName("card");
  let activeCard = null;

  // percorre o card (todos que existem na tela)
  for (let i = 0; i < card.length; i++) {
    // add os enventos de click em todos os cards
    card[i].addEventListener("click", function () {
      if (activeCard !== this) {
        //aqui e tudo oq acontece ao clicakar
        //Quando efetuar o click isso acontecera:
        this.classList.add("active");

        if (activeCard) {
          //aqui e tudo oq acontece ao sair do focu
          activeCard.classList.remove("active");
        }
        activeCard = this;
        console.log(this);
      }
    });
  }
})();
