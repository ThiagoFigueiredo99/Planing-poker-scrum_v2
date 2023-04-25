class Loader {
    constructor(selector) {
        this.elemento = document.querySelector(selector);
    }
    render(caminhoDoArquivo) {
        fetch(caminhoDoArquivo)
            .then(response => response.text())
            .then(html => {
                this.elemento.innerHTML = html;
            });
    }

    limpar() {
        this.elemento.innerHTML = '';
    }
}
