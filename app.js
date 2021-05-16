/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/



/* Section 4 1st code
var socres,roundscore,activePlayer,dice;

socres=[0,0];
roundscore=0;
activePlayer=0;

dice=Math.floor(Math.random()*6)+1;
//console.log(dice);

document.querySelector('#current-'+activePlayer).textContent=dice;
/*HTML CHANGE
document.querySelector('#current-1').innerHTML= '<em>' + dice + '</em>';
*/
/*Read
var reader=document.querySelector('#score-1').textContent;
console.log(reader);


document.querySelector('.dice').style.display='none';
*/


var socres,roundscore,activeplayer,dice,gameplaying,inputvalue;



intial();
document.querySelector('.dice').style.display='none';



//ROLL BOTTON
document.querySelector('.btn-roll').addEventListener('click',function(){
    
    if(gameplaying){
        dice=Math.floor(Math.random()*6)+1;

        var diceDom=document.querySelector('.dice');
        diceDom.style.display='block';
        diceDom.src='dice-'+ dice + '.png';
    
    
        if(dice!==1){
          roundscore+=dice;
          document.querySelector('#current-'+ activeplayer).textContent=roundscore;
    
        }
        else{
              NextPlayer();
    
        }

    }
    
    

}
);
/*document.querySelector('#current-'+activeplayer).textContent=dice;
var x= document.querySelector('#score-'+activeplayer).textContent;
console.log(x);
*/

//HOLD BOTTON
document.querySelector('.btn-hold').addEventListener('click',function(){
if(gameplaying){

    socres[activeplayer] +=roundscore;
document.querySelector('#score-' + activeplayer).textContent=socres[activeplayer];
inputvalue=document.querySelector('.final-score').value;
var winningscore;
if(inputvalue){
 winningscore=inputvalue;
}
else{
 winningscore=100;

}
if(socres[activeplayer]>=winningscore){
document.querySelector('#name-' + activeplayer).textContent='You Win!';
document.querySelector('.dice').style.display= 'none';
document.querySelector('.player-'+ activeplayer +'-panel').classList.add('winner');
document.querySelector('.player-'+ activeplayer +'-panel').classList.remove('active');
gameplaying=false;

}else{
  NextPlayer();

}


}


}

);


function NextPlayer(){
    activeplayer === 0 ? activeplayer= 1 : activeplayer=0;
    roundscore=0;
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';
    
    /*document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.add('active');   
    */
   document.querySelector('.player-0-panel').classList.toggle('active');
   document.querySelector('.player-1-panel').classList.toggle('active');
   document.querySelector('.dice').style.display= 'none';


}

//NEW BOTTON
document.querySelector('.btn-new').addEventListener('click',intial);

function intial(){

    socres=[0,0];
    roundscore=0;
    activeplayer=0;
    gameplaying=true;
    document.getElementById('score-0').textContent='0';
    document.getElementById('score-1').textContent='0';
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';
    document.getElementById('name-0').textContent='Player 1';
    document.getElementById('name-1').textContent='Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    inputvalue=document.querySelector('.final-score').value='';


    
    

}
