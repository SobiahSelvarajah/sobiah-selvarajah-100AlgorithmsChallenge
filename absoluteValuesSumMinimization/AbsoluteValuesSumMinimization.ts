
function absoluteValueSumMinimization(a: number[]): number {

    //! function to find median value
    //? step 1: check if array is odd or even

    //? if array is even:-
    //? step 2: find the index of the median and minus 1 to get smallest output
    //?         ⇒ a.length/2 - 1
    //? median index obtained
    //? step 3: find value of median index within the array
    //?         ⇒ a[(a.length/2) - 1]  


    //? if array is odd:-
    //? step 2: find the index of the median 
    //?         ⇒ a.length/2 
    //? step 3: get this number as an integer (less than or equal)
    //?         ⇒ Math.floor(a.length/2)
    //? median index obtained
    //? step 4: find value of median index within the array
    //?         ⇒ a[Math.floor(a.length/2)]    





    let isEvenIndex = (a.length % 2 === 0);

    // ---- Method 1 ---- if/ else statement
    // if (isEvenIndex) {
    //     return a[(a.length/2) - 1];
    // } else {
    //     return a[Math.floor(a.length/2)]
    // }


    // ---- Method 2 ---- ternary statement
    return isEvenIndex ? a[(a.length/2) - 1] : a[Math.floor(a.length/2)]


}

console.log(absoluteValueSumMinimization([2, 4, 7]));
console.log(absoluteValueSumMinimization([2, 4, 7, 6]));
console.log(absoluteValueSumMinimization([2, 4, 7, 6, 6]));
console.log(absoluteValueSumMinimization([2, 4, 7, 6, 6, 8]));