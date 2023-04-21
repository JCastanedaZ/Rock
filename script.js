const computerChoice = {
    a: "Rock",
    b: "Paper",
    c: "Scissors",
};

function getComputerChoice () {
    
    
    const keys = Object.keys(computerChoice);
    const len = keys.length;
    const rnd = Math.floor(Math.random() * len);
    const key = computerChoice[keys[rnd]];
    console.log(key);
}

getComputerChoice();