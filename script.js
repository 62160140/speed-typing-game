const wordEl = document.getElementById('word')
const textEl = document.getElementById('text')
const scoreEl = document.getElementById('score')
const timeEl = document.getElementById('time')

const btnLevelEl = document.getElementById('level-btn')
const settingsEl = document.getElementById('settings')
const levelFormEl = document.getElementById('level-form')
const levelEl = document.getElementById('level')
const overBtnEl = document.getElementById('over-btn')


const words= ['เบส','ตาล','ตังค์','ตัน'];

let randomText;
let score = 0;
let time = 15; //easy=>15 , medium=>10 , hard="5"

function getRandomWord(){
  return words[Math.floor(Math.random()*words.length)]
}

function displayWordToUI(){
  randomText = getRandomWord();
  wordEl.innerHTML = randomText
}

displayWordToUI()