import { app, analytics } from "./firebase.js";

const imgInput = document.getElementById('imgInput');
const preview = document.getElementById('preview');
const optEls = [0,1,2,3].map(i=>document.getElementById('opt'+i));
const selectBtns = Array.from(document.getElementsByClassName('select-correct'));
const showBtn = document.getElementById('showBtn');
const clearBtn = document.getElementById('clearBtn');
const resetScoreBtn = document.getElementById('resetScore');

const builder = document.getElementById('builder');
const quizView = document.getElementById('quizView');
const qImage = document.getElementById('qImage');
const optionsArea = document.getElementById('optionsArea');
const afterAnswer = document.getElementById('afterAnswer');
const hostSelect = document.getElementById('hostSelect');
const markBtn = document.getElementById('markBtn');
const nextQBtn = document.getElementById('nextQBtn');
const resultEl = document.getElementById('result');
const scoreDisplay = document.getElementById('scoreDisplay');
const nameModal = document.getElementById('nameModal');
const playerNameInput = document.getElementById('playerNameInput');
const saveNameBtn = document.getElementById('saveNameBtn');
const playerBadge = document.getElementById('playerName');

let player = localStorage.getItem('jq_player_name') || '';
let score = Number(localStorage.getItem('jq_score') || 0);
let correctIndex = 0;
let currentQuestion = null;
let friendChoice = null;

function updatePlayerBadge(){
  playerBadge.textContent = player ? "Player: " + player : 'Player: —';
}
updatePlayerBadge();
scoreDisplay.textContent = 'Score: ' + score;

function openNameModal(){
  nameModal.style.display = 'flex';
  playerNameInput.value = player || '';
  playerNameInput.focus();
}
if(!player) openNameModal();

saveNameBtn.addEventListener('click', ()=>{
  const val = playerNameInput.value.trim();
  if(!val){ alert('Enter a name'); return; }
  player = val;
  localStorage.setItem('jq_player_name',
