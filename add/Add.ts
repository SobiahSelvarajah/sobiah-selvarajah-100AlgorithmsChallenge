
//! write function to add 2 numbers

function addNumbers(num1: number, num2: number) {
    return num1 + num2;
}

console.log(addNumbers( 5, 6));
console.log(addNumbers( 25, 187));


//! Write function -> returns sum of all numbers regardless of # of params.

function sumOfNumbers(numArray: number[]): number {


    // ---- Method 1 ---- for loop
    // loop through the array
    // set result as 0 initially
    // keep adding the next number in the array to the result
    // until array length is reached

    // let result = 0;
    
    // for(let i=0; i < numArray.length; i++) {
    //     result = numArray[i] + result
    // }
    // return result


    // ---- Method 2 ---- reducer
    // create an arrow function
    // to run through every element in array 
    // and result with one output
    // accumulator - adds value to the previously returned value (from previous iteration)
    // currentValue - current value being processed in array
    // reduce() - executes reducer function on each element of the array
    
    const reducer = (accumulator:number, currentValue:number) => accumulator + currentValue;

    return numArray.reduce(reducer)
}

console.log(sumOfNumbers([4, 1, 9, 7]));
console.log(sumOfNumbers([88, 30, 29]));

