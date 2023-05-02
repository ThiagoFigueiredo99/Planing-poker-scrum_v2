const cards = document.getElementById("cards");
const card = document.querySelectorAll("#cards .card");

let idx = 0;

function nextCard() {
  idx++;

  if (idx > card.lenght - 1) {
    idx = 0;
  }

  cards.style.transform = `translateX(${-idx * 300}px)`;
}

function previousCard() {
  idx--;

  if (idx < 0) {
    idx = card.lenght - 1;
  }

  cards.style.transform = `translateX(${idx * 300}px)`;
}

const newVotingButton = document.querySelector("#new-voting-button");
const newVotingModal = document.querySelector("#new-voting-modal");

newVotingButton.addEventListener("click", () => {
  newVotingModal.classList.toggle("hidden");
});

const dangerButton = document.querySelector(".danger-button");
dangerButton.addEventListener("click", () => {
  newVotingModal.classList.add("hidden");
});

const foreshadowModal = document.querySelector("#foreshadow-modal");

const foreshadowButton = document.querySelector("#foreshadow-button");
foreshadowButton.addEventListener("click", () => {
  foreshadowModal.classList.toggle("hidden");
});

const closeForeshadowModalButton = document.querySelector(
  "#close-foreshadow-modal"
);
closeForeshadowModalButton.addEventListener("click", () => {
  foreshadowModal.classList.add("hidden");
});

const votingHistoryButton = document.querySelector("#voting-history-button");
const votingHistoryModal = document.querySelector("#voting-history-modal");

const closeVotingHistorywModalButton = document.querySelector(
  "#close-voting-history-modal"
);

closeVotingHistorywModalButton.addEventListener("click", () => {
  votingHistoryModal.classList.add("hidden");
});

votingHistoryButton.addEventListener("click", () => {
  votingHistoryModal.classList.toggle("hidden");
});

let cache = {};

const fibonacci = (n) => {
  if (n <= 1) {
    return n;
  }

  if (cache[n]) {
    return cache[n];
  }

  const result = fibonacci(n - 1) + fibonacci(n - 2);

  cache[n] = result;

  return result;
};

const startButton = document.querySelector("#start-button");
startButton.addEventListener("click", () => {
  cardResults.forEach((el, idx) => {
    console.log(idx);
    el.innerText = fibonacci(idx);
  });
});

const cardResults = document.querySelectorAll(".card-result");
