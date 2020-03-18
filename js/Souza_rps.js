/*@ClaudiaSouza*/
/**
 * pick - displays the door button clicked by the user
 *
 *@param String -
 */
//call methods
function pick(userChoice) {
  //user choice 
  document.getElementById("result").innerHTML = "<strong>You</strong> threw  " + "<strong>" + userChoice + "</strong>";
  var computerChoice = get();
  compare(userChoice, computerChoice);
}

//computer choice
function get() {
  var computer = Math.floor((Math.random() * 3) + 1);
  if (computer === 1) {
    document.getElementById("computerChoice").innerHTML = "<strong>Computer</strong> threw <strong>Rock</strong>!";

  } else if (computer === 2) {
    document.getElementById("computerChoice").innerHTML = "<strong>Computer</strong> threw <strong>Paper</strong>!";

  } else {
    computer === 3;
    document.getElementById("computerChoice").innerHTML = "<strong>Computer</strong> threw <strong>Scissor<strong>!";
  }
  return computer;
}

//compare user choice and computer
function compare(userChoice, computer) {
  var winnerMessage = document.getElementById("winnerMessage");

  if ((userChoice == "Rock" && computer == 1) ||
    (userChoice == "Paper" && computer == 2) ||
    (userChoice == "Scissor" && computer == 3)) {
      winnerMessage.innerHTML = "The <strong>result</strong> is <strong>Tie</strong>!!";
  }
    
  else if (userChoice == "Rock") {
    if (computer == 3) {
      winnerMessage.innerHTML = "<strong>User wins!</strong>";
    } else {
      winnerMessage.innerHTML = "<strong>Computer Wins!</strong>";
    }
  }
  
  else if (userChoice == "paper") {
    if (computer == 1) {
      winnerMessage.innerHTML = "<strong>User wins!</strong>";
    } else {
      winnerMessage.innerHTML = "<strong>Computer Wins!</strong>";
    }
  }
    
  else if (computer == 1) {
      winnerMessage.innerHTML = "<strong>Computer Wins!</strong>";
  } else {
      winnerMessage.innerHTML = "<strong>User wins!</strong>";
  }
}
