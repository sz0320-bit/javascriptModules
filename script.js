function computerPlay(){
    let initial = (Math.floor(Math.random() * 3))+1
    if(initial === 1){
        return "rock";
    }
    else if(initial === 2){
        return "paper";
    }
    else if(initial === 3){
        return "scissors";
    }
}

function checkk(){
    let rock = document.querySelector("#rock");
    let paper = document.querySelector("#paper");
    let scissors = document.querySelector("#scissors");
    let s;
    if(rock.checked === true){
        s = "rock";
    }
    else if(paper.checked === true){
       s = "paper";
    }
    else if(scissors.checked === true){
        s = "scissors";
    }
    return s;
}

function finale(a , b){
    if(a === b){
        return 'tie';
    }
    else if(a === 'rock' && b === 'scissors'){
        return 'win';
    }
    else if(a === 'paper' && b === 'scissors'){
        return 'lose';
    }
    else if(b === 'paper' && a === 'scissors'){
        return 'win';
    }
    else if(b === 'rock' && a === 'scissors'){
        return 'lose';
    }
    else if(a === 'rock' && b === 'paper'){
        return 'lose';
    }
    else if(b === 'rock' && a === 'paper'){
        return 'win';
    }
}

function returnvalue(){
   let a = document.querySelector("#textbocx");
   a.innerHTML = '';
   i = checkk();
   j = computerPlay();
   a.innerHTML += (finale(i,j)+'<br>');
    a.innerHTML += ('computer got '+j+'<br>');
    a.innerHTML += ('you chose '+i);
}