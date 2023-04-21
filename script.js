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

    let lost = 1, won = 1, tied = 1;
    let times = prompt("How many times do you want to play?");
    let times1 = parseInt(times);

    for (i = 1; i <= times1; i++) {

        user = getUserChoice();
        pc = getComputerChoice();

        if (user == 'rock' && pc == 'rock' ) {
            tied++;
            alert('Tie');
        }
        else if (user == 'rock' && pc == 'paper' ) {
            lost++;
            alert('You Lose! Paper beats Rock');
        }
        else if (user == 'rock' && pc == 'scissors' ) {
            won++;
            alert('You Win! Rock beats Scissors');
        }
        else if (user == 'paper' && pc == 'paper' ) {
            tied++;
            alert('Tie');
        }
        else if (user == 'paper' && pc == 'scissors' ) {
            lost++;
            alert('You Lose! Scissors beats Paper');
        }
        else if (user == 'paper' && pc == 'Rock' ) {
            won++;
            alert('You Win! Paper beats Rock');
        }
        else if (user == 'scissors' && pc == 'paper' ) {
            won++;
            alert('You Win! scissors beats Paper');
        }
        else if (user == 'scissors' && pc == 'scissors' ) {
            tied++;
            alert('Tie');
        }
        else if (user == 'scissors' && pc == 'Rock' ) {
            lost++;
            alert('You Lose! Rock beats Scissors');
        }
        
        else {
            alert('Not valid');
            times1++
        }
    }

    console.log(`Youve won ${won-1} times, lost ${lost-1} times and tied ${tied-1} times`)
}

game();