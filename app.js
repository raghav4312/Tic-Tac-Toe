let turn,p1,p2,c1,c2,c3,c4,c5,c6,c7,c8,c9;
p1="";
p2="";
turn="X";
let b=false;
let count=0;

const btnPlayAgain = document.getElementById('btnPlayAgain');
const btnNewGame= document.getElementById('btnNewGame');
const buttons = document.querySelector('.box');
const players = document.getElementById('players');

btnPlayAgain.addEventListener('click',playAgain);
btnNewGame.addEventListener('click',newGame);
buttons.addEventListener('click',myTurn);
players.addEventListener('submit',person);

$(document).ready(function(){
  $(".grid").hide();
});
$(document).ready(function(){
  $(".turn-disp").hide();
});

/************** TURN FUNCTION *****************/
function myTurn(e)
{
    if(e.target.innerHTML==""){
      e.target.innerHTML=turn;
      count++;
      let a = checkWin();
      console.log(a);
        if(a===b){
          if(count==9){
            document.getElementById('turn-display').innerHTML="Match Draw :D";
            winReset();
          }
          else if(turn=="X"){
            turn="O";
            disp(p2);
          }
          else{
            turn='X';
            disp(p1);
          }

        }
        else
        {
          if(turn=="X")
            displayWinner(p1);
          else
            displayWinner(p2);

          winReset();
        }
    }
  
}

/*******************CHECK WINNER*********************/

function checkWin()
{
  getValues();
  if((c1==c2&&c2==c3&&c3!="")||(c1==c4&&c4==c7&&c7!="")||(c1==c5&&c5==c9&&c9!=""))
    return true;
  else if((c3==c5&&c5==c7&&c7!="")||(c3==c6&&c6==c9&&c9!="")||(c2==c5&&c5==c8&&c8!="")||(c4==c5&&c5==c6&&c6!="")||(c7==c8&&c8==c9&&c9!=""))
    return true;
  else
    return false;
}

/*********************GET THE CELL VALUES ********************/

function getValues()
{
  c1=document.getElementById('cell1').innerHTML;
  c2=document.getElementById('cell2').innerHTML;
  c3=document.getElementById('cell3').innerHTML;
  c4=document.getElementById('cell4').innerHTML;
  c5=document.getElementById('cell5').innerHTML;
  c6=document.getElementById('cell6').innerHTML;
  c7=document.getElementById('cell7').innerHTML;
  c8=document.getElementById('cell8').innerHTML;
  c9=document.getElementById('cell9').innerHTML;
}

/********************** GET THE PLAYER'S NAME ******************/
function person(e)
{
  if(document.getElementById("p1").value!=""&&document.getElementById("p2").value!=""){
    $(document).ready(function(){
      $(".rules").hide();
    });
    $(document).ready(function(){
      $(".grid").show();
    });

    reset();
    e.preventDefault();
    p1=document.getElementById("p1").value;
    p2=document.getElementById("p2").value;
    document.getElementById("p1").value="";
    document.getElementById("p2").value="";
    $(document).ready(function(){
      $(".player-name").hide();
    });
    $(document).ready(function(){
      $(".turn-disp").show();
    });
    disp(p1);
  }
  else{
    alert('Please enter the names');
  }
}

/********************** RESET THE GRID *************************/

function reset()
{
  let a = document.querySelectorAll('.btn');
  a.forEach(element => {
    element.innerHTML="";
  });
  turn = "X";
  count=0;
  p1="";
  p2="";
}

function playAgain(){
  let p1val = p1;
  let p2val = p2;
  reset();
  p1 = p1val;
  p2 = p2val;
  disp(p1);
}

function newGame(){
  p1="";
  p2="";
  window.location.reload();
}
/********************** PLAYER TURN DISPLAY *********************/

function disp(name)
{
  let disp = document.getElementById('turn-display');
  disp.innerHTML=`${name}'s Turn`;
}

function displayWinner(winner)
{
  let disp = document.getElementById('turn-display');
  disp.innerHTML=`${winner} Wins :)`; 
  //btnNewGame.setAttribute('style','visibility:visible');
  //btnPlayAgain.setAttribute('style','visibility:visible');
}

function winReset()
{
  document.getElementById('cell1').innerHTML="T";
  document.getElementById('cell2').innerHTML="I";
  document.getElementById('cell3').innerHTML="C";
  document.getElementById('cell4').innerHTML="T";
  document.getElementById('cell5').innerHTML="A";
  document.getElementById('cell6').innerHTML="C";
  document.getElementById('cell7').innerHTML="T";
  document.getElementById('cell8').innerHTML="O";
  document.getElementById('cell9').innerHTML="E";
  turn = "X";
  count=0;
}