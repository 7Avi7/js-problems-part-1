// Problem 3: Is Less or Greater than seven

function isLGSeven(num){
    const first_check = num - 7;
    const twoTimesinput = num * 2;
    
    if (first_check < 7 ){
        console.log(first_check);
    }
    else if(first_check > 7 ){
        console.log(twoTimesinput);
    }
    else{
        console.log('Take input as int');
    }
    return num;
}

isLGSeven(6);
isLGSeven(-15);
isLGSeven(15);