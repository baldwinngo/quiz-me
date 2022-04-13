const form = document.querySelector('.quiz');
const currentQuestion = document.querySelector('.question');
const currentChoiceA = document.querySelector('#choiceA');
const currentChoiceB = document.querySelector('#choiceB');
const submit = document.querySelector('.quiz-submit');
const scoreText = document.querySelector('.score-text');

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
let score = 0

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Check if answer is correct
  if (form.radioQuestion.value === answers[answerCounter]){
    score += 1;
    scoreText.textContent = `${score}/${answerCounter + 1}`
  } else {
    scoreText.textContent =`${score}/${answerCounter + 1}`
  }

  answerCounter += 1

  // Update questions
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
    console.log('done');
    answerCounter = 0 
  } 
  
  // Update submit button to finished once answerCounter resets back to 0
  if (answerCounter === 0) {
    submit.setAttribute('value', 'Finished');
    submit.setAttribute('disabled', '');
  }

})

