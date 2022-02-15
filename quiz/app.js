let questionsAndAnswers = [
  {
    "Where did we first kiss?": [
      `Movie theater?`, `At a rodeo?`, `At a One Direction concert?`, `At the Snow?`, `We've never kissed!`
    ]
  },
  {
    "What is Jair's favorite game of all time?": [
      `League of Legends?`, `Zelda?`, `Hamster Ball?`, `Super-Mario?`, `World of Warcraft?`
    ]
  },
  {
    "How does Jair like his coffee": [
      `Black?`, `2 sugars and 2 creamers?`, `He hates coffee?`, `Creamer with a little coffee?`, `Green?`
    ]
  },
  {
    "What movie were we watching when we first kissed?": [
      `Ralph Breaks the Internet?`, `Harry Potter and the Prisoner of Azkaban?`, `Shawshank Redemption?`, `We don't watch movies!`, `Clueless?`
    ]
  }
]
const questionDiv = document.querySelector('.question-container')
const answerDiv = document.querySelector('.answers-container')
const letter = document.querySelector('.letter-container')
// we want to display one of objects properties at a time
// when the user has selected the correct option, we can change the question

// we want to display one of the options
// then when the user has chosen an answer, add "next question" at bottom

let alpha = ['A', 'B', 'C', 'D', 'E']
let index = 0;
let answer;
function renderQuestion() {
  // we want to render current question and answers
  if (index >= questionsAndAnswers.length || index < 0) {
    alert('No more questions!')
    return;
  }
  let currentQuestion = questionsAndAnswers[index];
  let question = Object.keys(currentQuestion)[0]
  let arrayOfAnswers = currentQuestion[question]
  answer = arrayOfAnswers[0];
  let shuffledAnswers = shuffle(arrayOfAnswers)

  questionDiv.textContent = question;

  for (let i = 0; i < shuffledAnswers.length; i++) {
    let div = document.createElement('div')
    let answer = document.createElement('div');

    let idName = `${alpha[i]}`
    let classAnswerName = `answer`

    div.setAttribute('id', idName)
    answer.classList.add(classAnswerName)

    div.textContent = shuffledAnswers[i];
    answer.textContent = alpha[i];

    letter.append(answer)
    answerDiv.append(div)
  }
}
renderQuestion()

function shuffle(array) {
  let currentIndex = array.length, randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

function eventListeners() {
  const guessLetter = document.querySelectorAll('.answer')
  guessLetter.forEach(el => el.addEventListener('click', event => {
    let guessClicked = event.target.textContent
    let target = event.target
    let guessedAnswer = document.getElementById(guessClicked)
    let text = guessedAnswer.textContent
    if (text === answer) {
      target.style.backgroundColor = 'rgb(0, 255, 0)'
      alert('CORRECT!! <3')
    } else {
      alert('INCORRECT :(')
    }
  }));
}
eventListeners()

const next = document.querySelector('#next')
next.addEventListener('click', () => {
  index++;
  while (answerDiv.firstChild) {
    answerDiv.removeChild(answerDiv.lastChild)
    letter.removeChild(letter.lastChild)
  }
  renderQuestion()
  eventListeners()
})

const prev = document.querySelector('#prev')
prev.addEventListener('click', () => {
  index--;
  while (answerDiv.firstChild) {
    answerDiv.removeChild(answerDiv.lastChild)
    letter.removeChild(letter.lastChild)
  }
  renderQuestion()
  eventListeners()
})