const guess = document.querySelector('#guessField');


const lowOrHigh = document.querySelector('.lowOrHigh');
const submit = document.querySelector('#subt');
const prevG = [];
const guesses = document.querySelector('.guesses');
const remG = document.querySelector('.lastResult');
let remain = 5;

let playGame = true;
while(remain!=0 && playGame==true){
    const no = (Math.random() * 100 + 1).toFixed(0);
    console.log(no);
 submit.addEventListener('click', (e) => {
 
  e.preventDefault();
  console.log(guess.value);
  prevG.push(guess.value);
  //console.log(prevG);
  guesses.innerHTML = prevG;
  if(guess.value==no){
    display('congratulations!! You got it')
    playGame=false;
  }else{
    let msg=''
    if(guess.value<no){
      msg=`your guess is smaller ,${guess.value}`
    }else{
        msg=`your guess is bigger ,${guess.value}`
    }
  display(msg); 

  }
 });
 remain=remain-1;
 console.log(remain)
 remG.innerHTML=remain
}
if(remain==0){
    display(`End game`)
    prevG=[]
    remain=5
    
}

function display(msg) {
  lowOrHigh.innerHTML = msg;
}
