function compare(a,b){
    if(a === b){
        console.log("win");
    }
    else if(a !== b){
        console.log("false");
    }
    else{
        console.log("undef") ;
    }
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
console.log(finale('scissors','scissors'));