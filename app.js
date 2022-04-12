const form = document.querySelector('.quiz');
const currentQuestion = document.querySelector('.question');
const currentChoiceA = document.querySelector('#choiceA');
const currentChoiceB = document.querySelector('#choiceB');
const submit = document.querySelector('.quiz-submit');

let questions = [
  'Who is the better waifu?', 
  'Which anime studio is the most goated?', 
  'Which anime has the best opening?'
];
let choices = [
  ['Marin Kitagawa', 'Miranjo'],
  ['Kyoto Animation', 'P.A. Works'],
  ['Ousama Ranking', 'Rent-a-Girlfriend']
];
let answers = ['A', 'A', 'A', 'B'];

let questionCounter = 0
let answerCounter = 0

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (form.radioQuestion.value === answers[answerCounter]){
    console.log('correct')
  } else {
    console.log('false')
  }
  answerCounter += 1
  if (submit.getAttribute('value') === 'Next') {
    
    currentQuestion.textContent = questions[questionCounter];
    currentChoiceA.textContent = choices[questionCounter][0];
    currentChoiceB.textContent = choices[questionCounter][1];
    
    if (questionCounter === 2) {
      submit.setAttribute('value', 'Finish'); 
    } else {
      questionCounter += 1;
    }
    
    document.querySelector('input[name="radioQuestion"]:checked').checked = false;
  } else {
    console.log('done')
    answerCounter = 0
  } 
  
})

