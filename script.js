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
    console.log(key);
}

let userChoice = prompt("Type: Rock, Paper or Scissor");
let userChoiceStandard = userChoice.toLowerCase();
console.log(userChoiceStandard);