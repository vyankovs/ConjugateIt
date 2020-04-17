const word = document.getElementById("word");
const input = document.getElementById("myInput");
const btn = document.getElementById("btn");
const pronom = document.getElementById("pronom");
const shownTense = document.getElementById("tense");
const characters = document.querySelectorAll(".character");
const notification = document.getElementById("notification-container");
const finalMessage = document.getElementById("final-message");
const nextBtn = document.getElementById("nextBtn");
const correct = document.getElementById("correct");
const wrong = document.getElementById("wrong");

const finalMessageRevealWord = document.getElementById(
  "final-message-reveal-word"
);
const tenses = [
  "present",
  "imparfait",
  "passé composé",
  "conditionnel",
  "futur simple",
];

reload();

function reload() {
  input.value = "";
  notification.classList.remove("show");

  switch (tenses[Math.floor(Math.random() * tenses.length)]) {
    case "present":
      selectWord(wordsPresent, "present");
      break;
    case "imparfait":
      selectWord(wordsImparfait, "imparfait");
      break;
    case "passé composé":
      selectWord(wordsPasse, "passé composé");
      break;
    case "conditionnel":
      selectWord(wordsCond, "conditionnel");
      break;
    case "futur simple":
      selectWord(wordsFutur, "futur simple");
  }
}

function selectWord(tense, tenseText) {
  window.x = tense[Math.floor(Math.random() * tense.length)];
  window.y = pronoms[Math.floor(Math.random() * pronoms.length)];
  word.innerText = window.x.inf;
  pronom.innerText = window.y;
  shownTense.innerHTML = tenseText;
}
function compareWords() {
  if (input.value == window.x[window.y]) {
    correct.innerText++;
    finalMessage.innerText = "Correct! 😺";
    showNotification();
    if (correct.innerText % 5 == 0) {
      imgCorrect.style.display = "block";
    }
    finalMessageRevealWord.innerText = "";
  } else {
    finalMessage.innerText = "Wrong 🙀";
    finalMessageRevealWord.innerText = `Correct answer is: ${
      window.x[window.y]
    }`;
    showNotification();

    wrong.textContent++;
  }
}

function showNotification() {
  notification.classList.add("show");

  setTimeout(() => {
    notification.classList.remove("show");
  }, 6000);
}

characters.forEach((a) =>
  a.addEventListener("click", (e) => {
    input.value += e.target.textContent;
  })
);

nextBtn.addEventListener("click", () => {
  reload();
});
btn.addEventListener("click", compareWords);
window.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    compareWords();
  }
});
