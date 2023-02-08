// Problem 5: Convert your gems into diamond

function gemsToDiamond(first_friend,second_friend,third_friend){
    const prothom_friend = 21;
    const ditio_friend = 32;
    const tritio_friend = 43;

    const prothom = prothom_friend * first_friend;
    const ditio = ditio_friend * second_friend;
    const tritio = tritio_friend * third_friend;

    const totalFriend = prothom + ditio + tritio;

    if (totalFriend >= 2000){
        const ans1 = totalFriend - 2000;
        console.log(ans1);
    }
    else if(totalFriend < 1000){
        
        console.log(totalFriend);
    }
    else{
        console.log('Take input as int');
    }
    
    


    return totalFriend;
}

const totalFriend1 = gemsToDiamond(1,1,1);
const totalFriend2 = gemsToDiamond(20,200,50);
const totalFriend3 = gemsToDiamond(100,5,1);
