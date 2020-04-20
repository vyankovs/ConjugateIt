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

// parameters to default, random select of tense and calling selectWord with the tense
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

//random select of verb and pronom and put it in html
function selectWord(tense, tenseText) {
  window.selectedVerb = tense[Math.floor(Math.random() * tense.length)];
  window.selectedPronom = pronoms[Math.floor(Math.random() * pronoms.length)];
  word.innerText = window.selectedVerb.inf;
  pronom.innerText = `${window.selectedPronom}    `;
  shownTense.innerHTML = tenseText;
}

//check if input and selected word match
function compareWords() {
  if (input.value.toLowerCase() == window.selectedVerb[window.selectedPronom]) {
    correct++;
    score.textContent++;
    finalMessageRevealWord.innerText = "";
    finalMessage.innerText = "Correct! 😺";
    showNotification();
  } else {
    finalMessage.innerText = "Faux 🙀";
    finalMessageRevealWord.innerText = `La réponse correcte: ${
      window.selectedVerb[window.selectedPronom]
    }`;
    showNotification();

    wrong++;
    score.textContent--;
  }
  setTimeout(() => {
    if (notification.classList.contains("show")) reload();
  }, 2500);
}

//show message if answer is correct or wrong
function showNotification() {
  notification.classList.add("show");
}

//show results in body
function endTraining() {
  body.innerHTML = `<h2 id="results">Voici vos résultats:</h2> <h3>réponses correctes: ${correct} <br><br> réponses fausses: ${wrong}</h3>  <button id="playAgain">Réessayer</button>`;
  if (correct > wrong) {
    body.innerHTML += `<h3 id="bravo">BRAVO!</h3><img
    id="imgCorrect"
    src="https://media.tenor.com/images/96abbecd19b93eed75b7a92f46f2330c/tenor.gif"
  />`;
  }
  const playAgainBtn = document.getElementById("playAgain");
  playAgainBtn.addEventListener("click", reload);
}

//Event Listeners

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
    if (notification.classList.contains("show")) {
      reload();
    } else if (input.value == null || input.value == "") {
      input.focus();
    } else {
      compareWords();
    }
  }
});

endBtn.addEventListener("click", endTraining);
