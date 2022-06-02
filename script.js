


const container = document.querySelector('.container');
const info = document.getElementById("info");
const puzzle =document.getElementById("word");
let words = ["ulifetbau","ssnuhein", "lofewr", "lckha", "erernotag", "urnqineata", "xalgya"]

//document.addEventListener("click", check(userGuess, word));
let correct = ["beautiful", "sunshine", "flower", "chalk", "generator", "quarantine", "galazy"]
lolz = reload()
function reload(){
  var wordpick = Math.floor(Math.random()*6) ;
  let correctWord = correct[wordpick];
  
  puzzle.textContent = (words[wordpick]);
  return correctWord;

}
function check(){
  
  const userGuess = document.getElementById("user-guess");
  userLower = userGuess.value.toLowerCase();
  if(userLower==lolz){
    lolz = reload()
    info.innerHTML =  "<span> Correct!</span>";
     
    
  }
  else{
    info.innerHTML =  "<span> That's not right!</span>";
  }
  
    
}

