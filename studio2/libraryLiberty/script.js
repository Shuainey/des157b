const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const title = document.getElementById("intro")
const txt = document.getElementById("tx")

let shuffledQuestions, currentQuestionIndex

var data = [
  {
      text: "Welcome!"
      
}, {
      text: "Learn about Davis!"
}, {
      text: "Can you solve all five?"
}, {
      text: "Let's see your trivia skills!"
}
];

var onLoad = anime({
  targets: '.intro',
  scale: 2,
  rotate: '1turn',
  duration: 2000,
});

var tx_conf = {
  infinit: true,
  effect: "flash", 
  timer: 2,
  //dir : "rtl"
  //stayIn: 1
}



startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  title.classList.add('hide')
  tx.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'What year did the Davis Centennial Seal get engraved in the ground?',
    answers: [
      { text: '2021', correct: true },
      { text: '1994', correct: false },
      { text: '2023', correct: false },
      { text: '2008', correct: false }
    ]
  },
  {
    question: 'Who is the author of the Davis Centennial Seal?',
    answers: [
      { text: 'Gary S. May', correct: false },
      { text: 'Tony Stark', correct: false },
      { text: 'Bob The Builder', correct: false },
      { text: 'Susan Shelton', correct: true }
    ]
  },
  {
    question: 'What is the purpose behind constructing the Davis Centennial Seal?',
    answers: [
      { text: '100th Year Anniversary of Davis', correct: false },
      { text: 'Artistic Display of Davis History', correct: false },
      { text: 'Passion of the Author', correct: false },
      { text: 'All of the Above', correct: true }
    ]
  },
  {
    question: 'Where is the Davis Centennial Seal located?',
    answers: [
      { text: 'In Front of the Memorial Union in UC Davis', correct: false },
      { text: 'Next to Mishka Cafe in Downtown', correct: true },
      { text: 'Next to Mishka Cafe in Downtown', correct: false },
      { text: 'Inside Jan Shrem and Maria Manetti Shrem Museum of Art', correct: false}
    ]
  }
]