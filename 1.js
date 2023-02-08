// Problem 1: Let’s play a mind game

function mindGame(num){
    let mul = num * 3;
    let add = mul + 10;
    let div = add / 2;
    let sub = div - 5;

    return sub;
}


console.log(mindGame(5));