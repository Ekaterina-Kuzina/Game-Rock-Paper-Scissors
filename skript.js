let userScore = 0;
let computerScore = 0;

let userScore_span = document.getElementById('user-score');
let computerScore_span = document.getElementById('computer-score');
const scoreBoard_div= document.getElementsByClassName('score-board');
let result_p = document.querySelector('.result >p');
const rock_div = document.querySelector('#r');
const paper_div = document.querySelector('#p');
const scissors_div = document.querySelector('#s');


function getComputerChoice(){
    const choices = [ "r", "p", "s"];
    const rendomNumber = Math.floor(Math.random()*3);
    return choices[rendomNumber];
}

function convertToWord(letter){
    if(letter === 'r') return "Rock";
    if(letter === 'p') return "Paper";
    return 'Scissors';
}

function win(userChoice,computerChoice){
    var userWord = "user".fontsize(3).sub();
    var compWord = "comp".fontsize(3).sub();
    var userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convertToWord(userChoice) + userWord + ' beats ' + convertToWord(computerChoice) + compWord + '.You win! 🔥';
    userChoice_div.classList.add('green-glow'); 
    setTimeout( () => userChoice_div.classList.remove('green-glow') , 300);
}
function lose(userChoice,computerChoice){
    var userWord = "user".fontsize(3).sub();
    var compWord = "comp".fontsize(3).sub();
    var userChoice_div = document.getElementById(userChoice);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convertToWord(userChoice) + userWord + ' loses to  ' + convertToWord(computerChoice) + compWord + '.You lost ! 💩';
    userChoice_div.classList.add('red-glow'); 
    setTimeout(() => userChoice_div.classList.remove('red-glow') , 300);
}

function draw(userChoice,computerChoice){
    var userWord = "user".fontsize(3).sub();
    var compWord = "comp".fontsize(3).sub();
    var userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = convertToWord(userChoice) + userWord + ' equals  ' + convertToWord(computerChoice) + compWord + '. It\'s\ a draw. "';
    userChoice_div.classList.add('gray-glow'); 
    setTimeout(() => userChoice_div.classList.remove('gray-glow') , 300);
}

function game(userChoice){ 
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice,computerChoice);
            break;
        case "rp":
        case "sr":
        case "ps":
            lose(userChoice,computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice,computerChoice);
            break;
    }
}

function main(){
    rock_div.addEventListener('click', () => game('r'));
    paper_div.addEventListener('click', () => game('p'));
    scissors_div.addEventListener('click',() =>game('s'));
}
main();