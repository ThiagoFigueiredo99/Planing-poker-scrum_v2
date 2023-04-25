(() => {
  const l = new Loader(".loader");

  function loadNewVote() {
    l.render("/modal-votacao.html");
  }

  function closeVote() {
    l.limpar();
  }

  function confirmButton() {
    const title = document.querySelector("#title").value;
    const description = document.querySelector("#description").value;

    let votes = localStorage.getItem("votes");

    if (votes === null) {
      votes = "[]";
      localStorage.setItem("votes", votes);
    }

    let jvotes = JSON.parse(votes);

    if (!Array.isArray(jvotes)) {
      jvotes = [];
    }

    const novoObjeto = { title, description };
    jvotes.push(novoObjeto);

    localStorage.setItem("votes", JSON.stringify(jvotes));

    l.limpar();
  }

  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("newVote")) {
      loadNewVote();
    }
    if (e.target.classList.contains("cancel")) {
      closeVote();
    }
    if (e.target.classList.contains("confirm")) {
      confirmButton();
    }
  });
})();
