// Problem 2: Finding even or odd

function evenOdd(string_){
    const check = string_.length % 2;
    if( check == 0){
        console.log('Even')
    }
   
    else{
        console.log('Odd')
    }
    
    return check
}

evenOdd('phero');
evenOdd('Batch7');