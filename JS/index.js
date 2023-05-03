import LocalStorageManager from "./localStorageManager.js";

(() => {
  var selected_card;

  function loadModalInit() {
    document.querySelector(".content").classList.toggle("hidden-div");
  }

  function handlerCardsModal() {
    const selectCards = document.querySelectorAll("li .card");

    selectCards.forEach((elm) => {
      elm.addEventListener("click", () => {
        selected_card = elm
          .querySelector(".card__title")
          .getAttribute("data-value");
      });
    });
  }

  function renderCards() {
    const localStrg = new LocalStorageManager();
    const gameid = localStrg.find("game-now");
    const gameinfos = localStrg.find(gameid);

    gameinfos[1].votes.forEach((e) => {
      console.log(e.elm);
      if (e.selectedCard == "coffe") {
        e.selectedCard =
          '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-cup-hot" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M.5 6a.5.5 0 0 0-.488.608l1.652 7.434A2.5 2.5 0 0 0 4.104 16h5.792a2.5 2.5 0 0 0 2.44-1.958l.131-.59a3 3 0 0 0 1.3-5.854l.221-.99A.5.5 0 0 0 13.5 6H.5ZM13 12.5a2.01 2.01 0 0 1-.316-.025l.867-3.898A2.001 2.001 0 0 1 13 12.5ZM2.64 13.825 1.123 7h11.754l-1.517 6.825A1.5 1.5 0 0 1 9.896 15H4.104a1.5 1.5 0 0 1-1.464-1.175Z" /><path d="m4.4.8-.003.004-.014.019a4.167 4.167 0 0 0-.204.31 2.327 2.327 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.31 3.31 0 0 1-.202.388 5.444 5.444 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 3.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 3.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 3 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 4.4.8Zm3 0-.003.004-.014.019a4.167 4.167 0 0 0-.204.31 2.327 2.327 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.31 3.31 0 0 1-.202.388 5.444 5.444 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 6.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 6.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 6 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 7.4.8Zm3 0-.003.004-.014.019a4.077 4.077 0 0 0-.204.31 2.337 2.337 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.198 3.198 0 0 1-.202.388 5.385 5.385 0 0 1-.252.382l-.019.025-.005.008-.002.002A.5.5 0 0 1 9.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 9.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 9 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 10.4.8Z" /></svg>';
      }
      document.querySelector(`[aria-label='${e.elm}']`).innerHTML =
        e.selectedCard;
    });
  }

  function estimated() {
    const localStrg = new LocalStorageManager();
    const gameid = localStrg.find("game-now");
    const gameinfos = localStrg.find(gameid);

    const votes = gameinfos[1].votes;

    const itemVotes = {};
    votes.forEach((vote) => {
      const itemName = vote.selectedCard;
      if (!itemVotes[itemName]) {
        itemVotes[itemName] = [];
      }
      itemVotes[itemName].push(vote.elm);
    });

    const sortedVotes = Object.entries(itemVotes)
      .sort((a, b) => b[1].length - a[1].length)
      .slice(0, 4);

    const rank = [];

    const resultElements = document.querySelectorAll(".card-result");
    const votesPreviewElements = document.querySelectorAll(".votes-preview");

    sortedVotes.slice(0, 4).forEach(([itemName, voters], index) => {
      if (itemName == "coffe") {
        itemName =
          '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-cup-hot" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M.5 6a.5.5 0 0 0-.488.608l1.652 7.434A2.5 2.5 0 0 0 4.104 16h5.792a2.5 2.5 0 0 0 2.44-1.958l.131-.59a3 3 0 0 0 1.3-5.854l.221-.99A.5.5 0 0 0 13.5 6H.5ZM13 12.5a2.01 2.01 0 0 1-.316-.025l.867-3.898A2.001 2.001 0 0 1 13 12.5ZM2.64 13.825 1.123 7h11.754l-1.517 6.825A1.5 1.5 0 0 1 9.896 15H4.104a1.5 1.5 0 0 1-1.464-1.175Z" /><path d="m4.4.8-.003.004-.014.019a4.167 4.167 0 0 0-.204.31 2.327 2.327 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.31 3.31 0 0 1-.202.388 5.444 5.444 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 3.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 3.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 3 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 4.4.8Zm3 0-.003.004-.014.019a4.167 4.167 0 0 0-.204.31 2.327 2.327 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.31 3.31 0 0 1-.202.388 5.444 5.444 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 6.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 6.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 6 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 7.4.8Zm3 0-.003.004-.014.019a4.077 4.077 0 0 0-.204.31 2.337 2.337 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.198 3.198 0 0 1-.202.388 5.385 5.385 0 0 1-.252.382l-.019.025-.005.008-.002.002A.5.5 0 0 1 9.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 9.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 9 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 10.4.8Z" /></svg>';
        resultElements[index].innerHTML = itemName;
        votesPreviewElements[index].textContent = voters.join(", ");
      } else {
        resultElements[index].textContent = itemName;
        votesPreviewElements[index].textContent = voters.join(", ");
      }
    });
  }

  function registerVote() {
    let options = [
      "1",
      "2",
      "3",
      "5",
      "8",
      "13",
      "21",
      "34",
      "55",
      "89",
      "?",
      "coffe",
    ];
    let selected_numbers = [];
    let players = [];

    for (let i = 0; i < 8; i++) {
      const randomIndex = Math.floor(Math.random() * options.length);
      selected_numbers.push(options[randomIndex]);
    }

    const cards = document.querySelectorAll(".card-data .card .card-result");

    Array.from(cards)
      .filter((x) => x.getAttribute("aria-label"))
      .forEach((element) => {
        players.push(element.getAttribute("aria-label"));
      });

    const localStrg = new LocalStorageManager();
    const gamecode = localStrg.find("game-now");
    const game = localStrg.find(gamecode);

    players.forEach((elm, index) => {
      if (elm != "thigas") {
        const selectedCard = selected_numbers[index];
        game[1].votes.push({ elm, selectedCard });
      } else {
        let selectedCard = selected_card;
        game[1].votes.push({ elm, selectedCard });
      }
    });

    localStrg.put(gamecode, game);
    loadModalInit();

    const event = new Event("endvotes", { bubbles: true });
    window.dispatchEvent(event);
  }

  function makeid() {
    let dt = new Date().getTime();
    let uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        let r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
      }
    );
    return uuid;
  }

  function idExist(string) {
    const localStrg = new LocalStorageManager();

    if (localStrg.find(string) == null) {
      return false;
    } else {
      return true;
    }
  }

  function saveNewVote() {
    let gameid;

    while (true) {
      let genid = makeid();
      if (idExist(genid) == false) {
        gameid = genid;
        break;
      } else continue;
    }

    const title = document.querySelector(".inp-title").value;
    const description = document.querySelector(".inp-desc").value;

    const data = [{ infos: { title, description } }, { votes: [] }];

    const localStrg = new LocalStorageManager();
    localStrg.insert(gameid, data);
    localStrg.put("game-now", gameid);

    const newVotingModal = document.querySelector("#new-voting-modal");
    newVotingModal.classList.add("hidden");

    alert("Your game has created with success");

    const event = new Event("newgame", { bubbles: true });
    window.dispatchEvent(event);
  }

  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("confirmbtn-vote")) {
      saveNewVote();
    }

    if (e.target.classList.contains("start-button")) {
      loadModalInit();
      handlerCardsModal();
    }

    if (e.target.classList.contains("confirm-vote")) {
      registerVote();
    }
  });

  window.addEventListener("load", () => {
    const localStrg = new LocalStorageManager();
    localStrg.insert("game-now", undefined);
  });

  window.addEventListener("newgame", () => {
    const localStrg = new LocalStorageManager();
    const actualGame = localStrg.find("game-now");
    const infosGames = localStrg.find(actualGame);

    const title = (document.querySelector(".title-history").value =
      infosGames[0].infos.title);
    const description = (document.querySelector(".desc-history").value =
      infosGames[0].infos.description);
  });

  window.addEventListener("endvotes", () => {
    renderCards();
    estimated();
  });
})();
