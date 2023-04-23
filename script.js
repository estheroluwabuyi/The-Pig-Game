
  //select all elements
  let diceEl = document.querySelector(".dice");
  const btnRoll = document.querySelector(".btn--roll");
  let player0Score = document.getElementById("score--0");
  let player1Score = document.getElementById("score--1");
  let currentScore0 = document.getElementById('current--0');
  let currentScore1 = document.getElementById('current--1');
  const playerBg0 = document.querySelector(".player--0");
  const playerBg1 = document.querySelector(".player--1");
  const btnHold = document.querySelector(".btn--hold");
  const btnNew = document.querySelector(".btn--new");
  let playing, currentAdder, activePlayer, scores;
  
  const startGame = () => {
  const inIt = function () {
     //Starting Conditions
  activePlayer = 0;
  currentAdder = 0;
  scores = [0, 0];
  playing = true;
  
  diceEl.classList.add('hidden');
  player0Score.textContent = 0;
  player1Score.textContent = 0;
  currentScore0.textContent = 0;
  currentScore1.textContent = 0;
  
  playerBg0.classList.remove('player--winner');
  playerBg1.classList.remove('player--winner');
  playerBg0.classList.add('player--active');
  playerBg1.classList.remove('player--active');
  };
  inIt();
  
  const switchPlayer = () =>{
  document.getElementById(`current--${activePlayer}`).textContent = 0;
   currentAdder = 0;
   activePlayer = activePlayer === 0 ? 1 : 0;
   playerBg0.classList.toggle('player--active');
   playerBg1.classList.toggle('player--active');
    };
    
    const btnRoller = () =>{
    btnRoll.addEventListener("click", () =>{
    if (playing) {
    diceEl.classList.remove('hidden');
    const diceRandom = Math.trunc(Math.random()*6)+1;
    diceEl.src = `dice-${diceRandom}.png`;
    
    if (diceRandom != 1) {
      currentAdder = currentAdder + diceRandom;
      document.getElementById(`current--${activePlayer}`).textContent = currentAdder;
       
    } else {
     switchPlayer();
    }
  };
  });
  };
 
  const btnHolder = () =>{
    btnHold.addEventListener("click",() =>{
      if (playing) {
     scores[activePlayer] += currentAdder;
     document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
     
     if (scores[activePlayer] >= 100) {
       document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
       document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
       playing = false;
     } else {
       switchPlayer();
     };
    };
    } );
  };
  
  const newGame = () =>{
  btnNew.addEventListener("click", inIt);
  };
  
  btnRoller();
  btnHolder();
  newGame();
  };
  startGame();
  
  //  break project into smaller parts

/*genScore.forEach(gen =>{
     gen.textContent = 0;
   });*/
   
   /*document.getElementById(`score--${activePlayer}`).textContent = document.getElementById(`current--${activePlayer}`);*/