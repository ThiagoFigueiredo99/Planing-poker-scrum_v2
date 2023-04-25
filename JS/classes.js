class Loader {
  constructor(selector) {
    this.elemento = document.querySelector(selector);
  }
  render(novaVotação) {
    fetch(novaVotação)
      .then((response) => response.text())
      .then((html) => {
        this.elemento.innerHTML = html;
      });
  }

  limpar() {
    this.elemento.innerHTML = "";
  }
}
