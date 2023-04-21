const computerChoice = {
    a: "rock",
    b: "paper",
    c: "scissors",
};

function getComputerChoice () {  
    const keys = Object.keys(computerChoice);
    const len = keys.length;
    const rnd = Math.floor(Math.random() * len);
    const key = computerChoice[keys[rnd]];
    return key;
}

function getUserChoice () {
    let userChoice = prompt("Type: Rock, Paper or Scissors");
    let userChoiceStandard = userChoice.toLowerCase();
    return userChoiceStandard;
}


function game (pc, user) {

    let times = prompt("How many times do you want to play?");
    let times1 = parseInt(times);

    for (i = 1; i <= times1; i++) {
        var won = 1;
        var tied = 1;
        var lost = 1;

        user = getUserChoice();
        pc = getComputerChoice();

        if (user == 'rock' && pc == 'rock' ) {
            alert('Tie');
            tied = tied++;
        }
        else if (user == 'rock' && pc == 'paper' ) {
            alert('You Lose! Paper beats Rock');
            lost = lost++;
        }
        else if (user == 'rock' && pc == 'scissors' ) {
            alert('You Win! Rock beats Scissors');
            won = won++;
        }
        else if (user == 'paper' && pc == 'paper' ) {
            alert('Tie');
            tied = tied++;
        }
        else if (user == 'paper' && pc == 'scissors' ) {
            alert('You Lose! Scissors beats Paper');
            lost = lost++;
        }
        else if (user == 'paper' && pc == 'Rock' ) {
            alert('You Win! Paper beats Rock');
            won = won++;
        }
        else if (user == 'scissors' && pc == 'paper' ) {
            alert('You Win! scissors beats Paper');
            won = won++;
        }
        else if (user == 'scissors' && pc == 'scissors' ) {
            alert('Tie');
            tied = tied++;
        }
        else if (user == 'scissors' && pc == 'Rock' ) {
            alert('You Lose! Rock beats Scissors');
            lost = lost++;
        }
        
        else {
            alert('Not valid');
        }
    }

    console.log(`Youve won ${won-1} times, lost ${lost-1} times and tied ${tied-1} times`)
}

game();