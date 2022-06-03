function computerPlay(){
    let initial = (Math.floor(Math.random() * 3))+1
    if(initial === 1){
        return 'rock';
    }
    else if(initial === 2){
        return 'paper';
    }
    else if(initial === 3){
        return 'scissors'
    }
}
console.log(computerPlay());
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");

function checkk(){
    if(rock.checked === true){
        return 'rock';
    }
    else if(paper.checked === true){
        return 'paper';
    }
    else if(scissors.checked === true){
        return 'scissors';
    }
}

function finale(a , b){
    if(a == b){
        return console.log('');
    }
    else{

    }
}

