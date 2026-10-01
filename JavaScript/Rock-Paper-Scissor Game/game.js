function getRandomChoice(){
let randomChoice = Math.floor(Math.random()*3+1);
return randomChoice;
  }
let score ={
   user:0,
   comp:0,
   tie:0,
   UpdateScore:function(){
      this.savescore();
document.getElementById('score').innerHTML=`
   You Win:${this.user}. <br> <br>
   Computer Win:${this.comp}.<br> <br>
   Tie:${this.tie}.<br> <br>`
   },
   savescore:function(){
     let scoreStr=JSON.stringify(this);
     localStorage.setItem('score',scoreStr);
   },
};
function initialize(){

   let scoreStr = localStorage.getItem('score');

   if(scoreStr){

      let scoreVal = JSON.parse(scoreStr);

      score.user = scoreVal.user;
      score.comp = scoreVal.comp;
      score.tie = scoreVal.tie;

      score.UpdateScore();
   
   }
}


   function reset(){

   score.user = 0;
   score.comp = 0;
   score.tie = 0;

   localStorage.removeItem('score');

   score.UpdateScore();

   document.getElementById('result').innerHTML = 'Game Reset';
}

function updateResult(userchoice,computerChoice,result){

  score.UpdateScore();
   document.getElementById('result').innerHTML=`You Choose ${userchoice}.<br><br> Computer Choose ${computerChoice}. <br> <br>The Result is: ${result}.`;
}

function getResult(userchoice,computerChoice){
   let result;
    
   if(computerChoice === userchoice){
      result='Tie';
      score.tie ++;
 
     } else if((computerChoice ===`✊ Rock` && userchoice === `✌️ Scissor`)||
      (computerChoice ===`✌️ Scissor` && userchoice === `✋ Paper` )||
      (computerChoice === `✋ Paper` && userchoice === `✊ Rock`))
      {
       result = 'I win';
       score.comp ++;
     
     } else {
      result = 'You Win';
      score.user ++;
      
     }
return result;
}

function computeComputerChoice(){
   let computerChoice = getRandomChoice(); 
  let computerChoiceText;
     if(computerChoice === 1){
          computerChoiceText = `✊ Rock`;
     } else if(computerChoice === 2) {
        computerChoiceText = `✋ Paper`;
     } else  {
        computerChoiceText = `✌️ Scissor`;
     }
     return computerChoiceText;
}


    function Rock(){
     const userchoice = '✊ Rock';
      let computerChoiceText = computeComputerChoice();
      let result = getResult(userchoice,computerChoiceText); 
     return updateResult(userchoice,computerChoiceText,result);
    }


    function Paper(){
      const userchoice = '✋ Paper';
     
      let computerChoiceText = computeComputerChoice();
      let result = getResult(userchoice,computerChoiceText);
      return updateResult(userchoice,computerChoiceText,result);
   }


    function Scissor(){
      const userchoice = '✌️ Scissor';
      let computerChoiceText = computeComputerChoice();
      let result = getResult(userchoice,computerChoiceText);
      return updateResult(userchoice,computerChoiceText,result);
   }
   initialize();