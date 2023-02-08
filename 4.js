// Problem 4: Finding Bad data


const myArray = [-4, -9, -5, -33, -55 ];

function findingBadData(num) {

    const negatives = [];

    for (let i = 0; i < num.length; i++) {
        if (num[i] < 0) {
            negatives.push(num[i]);
        }
    }
    return negatives.length;

}
console.log(findingBadData(myArray));