const word = document.getElementById("word");
const body = document.querySelector("body");
const input = document.getElementById("myInput");
const btn = document.getElementById("btn");
const pronom = document.getElementById("pronom");
const shownTense = document.getElementById("tense");
const characters = document.querySelectorAll(".character");
const notification = document.getElementById("notification-container");
const finalMessage = document.getElementById("final-message");
const nextBtn = document.getElementById("nextBtn");
const score = document.getElementById("score");
const endBtn = document.getElementById("endBtn");

let correct = 0;
let wrong = 0;

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
  input.focus();

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
  pronom.innerText = `${window.y}    `;
  shownTense.innerHTML = tenseText;
}
function compareWords() {
  if (input.value.toLowerCase() == window.x[window.y]) {
    correct++;
    score.textContent++;
    finalMessage.innerText = "Correct! 😺";
    showNotification();
    if (correct.innerText % 5 == 0) {
      imgCorrect.style.display = "block";
    }
    finalMessageRevealWord.innerText = "";
  } else {
    finalMessage.innerText = "Faux 🙀";
    finalMessageRevealWord.innerText = `La réponse correcte: ${
      window.x[window.y]
    }`;
    showNotification();

    wrong++;
    score.textContent--;
  }
  setTimeout(reload, 2500);
}

function showNotification() {
  notification.classList.add("show");
}

function endTraining() {
  body.innerHTML = `<h2 id="results">Voici vos résultats:</h2> <h3>réponses correctes: ${correct} <br><br> réponses fausses: ${wrong}</h3>`;
  if (correct > wrong) {
    body.innerHTML += `<h3 id="bravo">BRAVO!</h3><img
    id="imgCorrect"
    src="https://media.tenor.com/images/96abbecd19b93eed75b7a92f46f2330c/tenor.gif"
  />`;
  }
}

characters.forEach((a) =>
  a.addEventListener("click", (e) => {
    input.value += e.target.textContent;
    input.focus();
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

endBtn.addEventListener("click", endTraining);
