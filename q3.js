/*
    Task 1:
    - Add a new property "breed" with the value "Poodle"

    Task 2: 
    - Implement a for-in to loop through the keys in "dog" object and print it with console.log()
*/

const dog = {
    petName:"Bobby"
}

// Task 1: Add code here

dog.bread = "Poddle"          //Assigning new property with value

// Task 2: Add code here

function showKeys(key){
 for (const i in dog){          //Use for-in loop to iterate over properties of object 'dog'
  console.log(i);
 }
}

showKeys(dog)