const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const counter = document.getElementById("counter");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// questions here
let questions = [
  {
    question: "Why the Sky is blue?",
    choiceA: "The 'Atmospheric refraction' of the Sun.",
    choiceB: "The 'Atmospheric reflection' of the Sun.",
    choiceC: "The 'Rayleigh Scattering'.",
    choiceD: "None of above",
    correct: "C",
  },
  {
    question: "Why are clouds white?",
    choiceA: "The atmosphere refract all other visable colors except white.",
    choiceB: "Because the water is clear, if form by dirty water, clouds will be black.",
    choiceC: "Because the 'Mie Scattering'.",
    choiceD: "None of above",
    correct: "C",
  },
  {
    question: "The largest OCEAN ANIMAL is?",
    choiceA: "Mola Mola",
    choiceB: "Blue Whale",
    choiceC: "Colossal Squid",
    choiceD: "None of above",
    correct: "B",
  },
  {
    question: "The tallest montain is?",
    choiceA: "Mount Everest",
    choiceB: "K2 (Chogori / Qogir)",
    choiceC: "Kanchenjunga",
    choiceD: "None of above",
    correct: "A",
  },
  {
    question: "There are ... Oceans and ... Continents on the Earth. (Please select the appopriate ONE)",
    choiceA: "7 ... 5",
    choiceB: "6 ... 7",
    choiceC: "5 ... 7",
    choiceD: "9 ... 8",
    correct: "C",
  },
  {
    question: "The Largest LAND ANIMAL is?",
    choiceA: "Hippo",
    choiceB: "Elephant",
    choiceC: "Giraffe",
    choiceD: "None of above",
    correct: "B",
  },
  {
    question: "The Largest Ocean is?",
    choiceA: "Indian Ocean",
    choiceB: "Arctic Ocean ",
    choiceC: "Atlantic Ocean",
    choiceD: "Pacific Ocean",
    correct: "D",
  },
  {
    question: "The Largest Continents is?",
    choiceA: "Asia",
    choiceB: "Antarctica",
    choiceC: "North America",
    choiceD: "Europe",
    correct: "A",
  },
  {
    question: "The Largest Hot Desert is?",
    choiceA: "Great Australian",
    choiceB: "Sahara",
    choiceC: "Arabian Desert",
    choiceD: "Gobi Desert",
    correct: "B",
  },
  {
    question: "The Largest Rainforest is?",
    choiceA: "Congo Rainforest",
    choiceB: "Amazon",
    choiceC: "Southeast Asian Rainforest",
    choiceD: "Daintree Rainforest",
    correct: "B",
  },
  {
    question: "How many Cold Desert(s) on the Earth?",
    choiceA: "4",
    choiceB: "3",
    choiceC: "2",
    choiceD: "1",
    correct: "C",
  },
  {
    question: "Which Country has the longest coastline?",
    choiceA: "Norway",
    choiceB: "Indonesia",
    choiceC: "Australia",
    choiceD: "Canada",
    correct: "D",
  },
  {
    question: "How 'big' is the Earth's radius?",
    choiceA: "1,000~ miles",
    choiceB: "2,000~ miles",
    choiceC: "3,000~ miles",
    choiceD: "4,000~ miles",
    correct: "D",
  },
  {
    question: "From the largest to smallest, Earth is the ... in Solar System?",
    choiceA: "4th",
    choiceB: "5th",
    choiceC: "6th",
    choiceD: "7th",
    correct: "B",
  },
  {
    question: "What makes up nearly 80% of atmosphere?",
    choiceA: "Nitrogen",
    choiceB: "Oxygen",
    choiceC: "Carbon dioxide",
    choiceD: "None of above",
    correct: "A",
  },
  {
    question: "How many layers does Earth have?",
    choiceA: "Six",
    choiceB: "Five",
    choiceC: "Four",
    choiceD: "Three",
    correct: "C",
  },
  {
    question: "Our neigbour planets in the Solar System are?",
    choiceA: "Mars and Jupiter",
    choiceB: "Venus and Mars",
    choiceC: "Mercury and Venus",
    choiceD: "Moon and Mars",
    correct: "B",
  },
  {
    question: "How big the Moon compare with the Earth in size",
    choiceA: "One quarter",
    choiceB: "Three quarter",
    choiceC: "One Third",
    choiceD: "One Half",
    correct: "A",
  },
  {
    question: "How long have we been calling this planet 'Earth'",
    choiceA: "At least 700 years",
    choiceB: "At least 900 years",
    choiceC: "At least 1000 years",
    choiceD: "At least 2000 years",
    correct: "C",
  },
  {
    question: "How old our Earth?",
    choiceA: "4.54 billion years old",
    choiceB: "3.14 billion years old",
    choiceC: "2.81 billion years old",
    choiceD: "1.44 billion years old",
    correct: "A",
  },
];
// ==questions ending==

// basic settings

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 60; // 30s
let TIMER;
let score = 0;

var myVar;

function myLoader() {
  myVar = setTimeout(showPage, 10000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
}

// render question
function renderQuestion() {
  let q = questions[runningQuestion];

  question.innerHTML = "<p>" + q.question + "</p>";
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
  choiceD.innerHTML = q.choiceD;
}

start.addEventListener("click", startQuiz);

// starting
function startQuiz() {
  start.style.display = "none";
  renderQuestion();
  quiz.style.display = "block";
  renderProgress();
  renderCounter();
  TIMER = setInterval(renderCounter, 1000); // 1000ms = 1s
}

// render progress
function renderProgress() {
  for (let qIndex = 0; qIndex <= lastQuestion; qIndex++) {
    progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
  }
}

// counter render

function renderCounter() {
  if (count <= questionTime) {
    counter.innerHTML = count;

    count++;
  } else {
    count = 0;
    // times up change progress color to red 
    answerIsWrong();
    if (runningQuestion < lastQuestion) {
      runningQuestion++;
      renderQuestion();
    } else {
      // end quiz and display score box
      clearInterval(TIMER);
      scoreRender();
    }
  }
}

// answer checker

function checkAnswer(answer) {
  if (answer == questions[runningQuestion].correct) {
    score++;
    answerIsCorrect();
  } else {
    answerIsWrong();
  }
  count = 0;
  if (runningQuestion < lastQuestion) {
    runningQuestion++;
    renderQuestion();
  } else {
    clearInterval(TIMER);
    scoreRender();
  }
}

// change color when answer is correct
function answerIsCorrect() {
  document.getElementById(runningQuestion).style.backgroundColor = "green";
}

// change color when answer is Wrong
function answerIsWrong() {
  document.getElementById(runningQuestion).style.backgroundColor = "grey";
}

// score render
function scoreRender() {
  scoreDiv.style.display = "block";

  // calculate percent answered
  const scorePerCent = Math.round((100 * score) / questions.length);

  // render the image based on the score
  let img =
    scorePerCent >= 80
      ? "Components/80.png"
      : scorePerCent >= 60
        ? "Components/60.png"
        : scorePerCent >= 40
          ? "Components/40.png"
          : scorePerCent >= 20
            ? "Components/20.png"
            : "Components/0.png";

  scoreDiv.innerHTML = "<img src=" + img + ">";
  scoreDiv.innerHTML += "<p>" + scorePerCent + "%</p>";
}