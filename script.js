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
let wrongWords = new Set();

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
  let currentWord = window.selectedVerb[window.selectedPronom];
  if (input.value.toLowerCase() == currentWord) {
    correct++;
    score.textContent++;
    finalMessageRevealWord.innerText = "";
    finalMessage.innerText = "Correct! 😺";
    showNotification();
  } else {
    finalMessage.innerText = "Faux 🙀";
    finalMessageRevealWord.innerText = `La réponse correcte: ${currentWord}`;
    showNotification();

    wrongWords.add(window.selectedVerb.inf);
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
  body.innerHTML = `<h2 id="results">Voici vos résultats:</h2> <h3 id = "responseResults">réponses correctes: ${correct} <br><br> réponses fausses: ${wrong}</h3>  <button id="playAgain" onclick = "reloadPage()">Réessayer</button>`;
  if (correct > wrong) {
    body.innerHTML += `<h3 id="bravo">BRAVO!</h3><img
    id="imgCorrect"
    src="https://media.tenor.com/images/96abbecd19b93eed75b7a92f46f2330c/tenor.gif"
  />`;
  } else {
    var target2 = document.getElementById("responseResults");
    target2.insertAdjacentHTML(
      "afterend",
      '<h4 id = "motsARevoir">MOTS A REVOIR:</h4>'
    );
    var target1 = document.getElementById("motsARevoir");
    var template = "<h4>~id~</h4>";
    wrongWords.forEach((word) => {
      target1.insertAdjacentHTML("afterend", template.replace(/~id~/g, word));
    });
  }

  console.log(wrongWords);
}

//page reload
function reloadPage() {
  window.location.href = window.location.href;
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

//creating fake input to get focus and open keyboard on mobile

// function focusOnInput() {
//   // create invisible dummy input to receive the focus first
//   const fakeInput = document.createElement("input");
//   fakeInput.setAttribute("type", "text");
//   fakeInput.style.position = "absolute";
//   fakeInput.style.opacity = 0;
//   fakeInput.style.height = 0;
//   fakeInput.style.fontSize = "16px"; // disable auto zoom

//   // you may need to append to another element depending on the browser's auto
//   // zoom/scroll behavior
//   document.body.prepend(fakeInput);

//   // focus so that subsequent async focus will work
//   fakeInput.focus();

//   setTimeout(() => {
//     // now we can focus on the target input
//     input.focus();

//     // cleanup
//     fakeInput.remove();
//   }, 500);
//}
