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
