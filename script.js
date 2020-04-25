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
const minutesBtn = document.getElementById("3MinBtn");
const score = document.getElementById("score");
const endBtn = document.getElementById("endBtn");
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
let receivedWrongWords = {};
let wrongWords = {};
let correct = 0;
let wrong = 0;
let wrongWordsTemp = {};
//puts data from LS to wrongWords
tenses.forEach((tense) => {
  wrongWordsTemp[tense] = JSON.parse(localStorage.getItem(tense));
  if (wrongWordsTemp[tense]) {
    wrongWords[tense] = wrongWordsTemp[tense];
  }
});

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
    if (wrongWords[window.currentTense]) {
      while (
        wrongWords[window.currentTense].indexOf(window.selectedVerb.inf) >= 0
      ) {
        wrongWords[window.currentTense].splice(
          wrongWords[window.currentTense].indexOf(window.selectedVerb.inf),
          1
        );
        localStorage.setItem(
          window.currentTense,
          JSON.stringify(wrongWords[window.currentTense])
        );
      }
    }
  } else {
    finalMessage.innerText = "Faux 🙀";
    finalMessageRevealWord.innerText = `La réponse correcte: ${currentWord}`;
    showNotification();

    window.currentTense = shownTense.innerHTML;

    if (!(window.currentTense in wrongWords)) {
      wrongWords[window.currentTense] = [];
    }
    wrongWords[window.currentTense].push(window.selectedVerb.inf);

    wrong++;
    score.textContent--;
  }
  addToLocalStorage();
  setTimeout(() => {
    if (notification.classList.contains("show")) reload();
  }, 2500);
}

// add data to LS
function addToLocalStorage() {
  if (window.currentTense in wrongWords) {
    localStorage.setItem(
      window.currentTense,
      JSON.stringify(wrongWords[window.currentTense])
    );
  }
}

// get data from LS and print it in body
function getFromLocalStorage() {
  tenses.forEach((tense) => {
    receivedWrongWords[tense] = JSON.parse(localStorage.getItem(tense));
    if (receivedWrongWords[tense]) {
      receivedWrongWords[tense] = frequencyCount(receivedWrongWords[tense]);
    }
  });

  resultsInTable();
}

function resultsInTable() {
  body.innerHTML = `<div class = "container1"><h3 id = "motsARevoir">Vos statistiques:</h3><br><table id = "tableResults"><tr>
  <th>Temps</th><th>Mot et nombre d'erreurs</th>
  
  </tr></table></div>`;
  console.log(receivedWrongWords);
  for (let [key, value] of Object.entries(receivedWrongWords)) {
    var target1 = document.getElementById("tableResults");
    var template = `<tr >
        <td>~tense~</td>
        <td id = "~id~"></td>
      
          </tr>`;
    target1.insertAdjacentHTML(
      "beforeend",
      template.replace(/~id~/g, key).replace(/~tense~/g, key)
    );

    console.log(key);
    for (let [key2, value2] of Object.entries(value)) {
      var target2 = document.getElementById(key);

      var template2 = `<tr>
      <ul><li> ~freq~ - ~mots~</li></ul>
      </tr>`;
      target2.insertAdjacentHTML(
        "beforeend",
        template2.replace(/~mots~/g, key2).replace(/~freq~/g, value2)
      );
    }
  }
  document
    .querySelector(".container1")
    .insertAdjacentHTML(
      "beforeend",
      '<button id="playAgain" onclick = "reloadPage()">Réessayer</button>'
    );
}

//show message if answer is correct or wrong
function showNotification() {
  notification.classList.add("show");
}

//show results in body
function endTraining() {
  body.innerHTML = `<h2 id="results">Voici vos résultats:</h2> <h3 id = "responseResults">réponses correctes: ${correct} <br><br> réponses fausses: ${wrong}</h3>   <button id="showErrorsBtn" onclick = "getFromLocalStorage()">Voir mes fautes</button><button id="playAgain" onclick = "reloadPage()">Réessayer</button>`;
  if (correct > wrong) {
    body.innerHTML += `<h3 id="bravo">BRAVO!</h3><img
    id="imgCorrect"
    src="https://media.tenor.com/images/96abbecd19b93eed75b7a92f46f2330c/tenor.gif"
  />`;
  } else {
    body.innerHTML += `<img
    id="imgCorrect"
    src="./pourquoi.jpg"
  />`;
  }

  console.log(receivedWrongWords);
}

//page reload
function reloadPage() {
  window.location.href = window.location.href;
}

// counts frequency of appearance in array
function frequencyCount(array) {
  var frequency = {};

  array.forEach(function (value) {
    if (frequency[value]) {
      ++frequency[value];
    } else {
      frequency[value] = 1;
    }
  });
  console.log(frequency);

  return Object.keys(frequency)
    .sort((a, b) => frequency[b] - frequency[a])
    .reduce(
      (_sortedObj, key) => ({
        ..._sortedObj,
        [key]: frequency[key],
      }),
      {}
    );

  // var uniques = this.filter(function (value) {
  //   return ++frequency[value] == 1;
  // });

  // return uniques.sort(function (a, b) {
  //   return frequency[b] - frequency[a];
  // });
}

//countdown on a button
function countdown(el, minutes, seconds) {
  // set time for the particular countdown
  var time = minutes * 60 + seconds;
  var interval = setInterval(function () {
    var minutes = Math.floor(time / 60);
    if (minutes < 10) minutes = "0" + minutes;
    var seconds = time % 60;
    if (seconds < 10) seconds = "0" + seconds;
    var text = minutes + ":" + seconds;
    el.innerText = text;
    time--;
  }, 1000);
}
//Event Listeners
characters.forEach((a) =>
  a.addEventListener("click", (e) => {
    input.value += e.target.textContent;
    input.focus();
  })
);

minutesBtn.addEventListener("click", () => {
  countdown(minutesBtn, 3, 0);
  setTimeout(() => {
    endTraining();
  }, 180000);
});

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
