/*
    Task 1
    - Create a function that would swap the value of x and y using only x and y as variables.
    - x and y must be numeric.
    - return -1 if x and y is not numeric.
    - print the swapped values in the console

    Task 2
    - invoke the function "swap"
*/

function swap(x, y){
    // Task 1: Add code here
    if(typeof x == "number" && typeof y == "number"){                           //check if x and y are numeric
        [x,y] = [y,x];                                                          // perform value swapping
        console.log(`The new value of x is ${x} & new value of y is ${y}`);     //print swapped values
        return;
    } else{                                         
        return -1;                                                               //return if not numeric
    }
}

// Task 2: Add code here
swap()
module.exports = swap;
