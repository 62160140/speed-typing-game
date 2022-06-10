const wordEl = document.getElementById('word')
const textEl = document.getElementById('text')
const scoreEl = document.getElementById('score')
const timeEl = document.getElementById('time')

const btnLevelEl = document.getElementById('level-btn')
const settingsEl = document.getElementById('settings')
const levelFormEl = document.getElementById('level-form')
const levelEl = document.getElementById('level')
const overBtnEl = document.getElementById('over-btn')



const words= ["monitor", "program", "application", "keyboard", "javascript", "gaming", "network"];

let randomText;
let score = 0;
let time = 10; //easy=>15 , medium=>10 , hard="5"

//ใช้งาน function updateTime ทุกๆ1วืนาที
const timeInterval = setInterval(updateTime,1000)

function getRandomWord(){
  return words[Math.floor(Math.random()*words.length)]
}

function displayWordToUI(){
  timeEl.innerHTML=`เวลา ${time} วินาที`
  randomText = getRandomWord();
  wordEl.innerHTML = randomText
}


textEl.addEventListener('input',e=>{
  const inputText = e.target.value;
  if(inputText  === randomText.trim()){
    displayWordToUI();
    updateScore();
    e.target.value = '';
    time+=5;
  }
})

function updateScore(){
  score+=10;
  scoreEl.innerHTML = `${score} คะแนน`
}

function updateTime(){
  time--;
  timeEl.innerHTML=`เวลา ${time} วินาที`
  if(time === 0){
    //หยุดใช้ตัวแปร timeInterval
    clearInterval(timeInterval)
    gameOver();
  }
  
}

function gameOver(){
  overBtnEl.style.display = 'flex'
  overBtnEl.innerHTML = `
  <h1>จบเกมส์แล้วนะครับ</h1>

  <h2>คะแนนที่ได้ ${score}</h2>
  

  <button onclick="location.reload()">เล่นอีกครั้ง</button>

  `

}

displayWordToUI()
textEl.focus();