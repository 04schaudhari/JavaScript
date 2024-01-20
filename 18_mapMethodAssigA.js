
const arrayNumbers = [20,11,40,25,23,11,9,31,60,2,19];
console.log(`\n==============================Step 1===========================\n`);

//Added 10 into each elements of array

console.log(`Given Array is: ${arrayNumbers}`);

const arrayNumbersadd = arrayNumbers.map((currentValue) => {
    return currentValue + 10;
})
console.log("");
console.log(`After Adding 10 into each elament Array is: ${arrayNumbersadd}`);


console.log(`\n==============================Step 2===========================\n`);


//Cube the Element of Array

console.log(`Given Array is: ${arrayNumbers}`);

const arrayCube = arrayNumbers.map((currentValue) =>{
           return currentValue**3;
})

console.log("");
console.log(`After Cube of each elament Array is: ${arrayCube}`);


console.log(`\n==============================Step 3===========================\n`);

//Add the index value of each elements of array
console.log(`Given Array is: ${arrayNumbers}`);

console.log("");
arrayNumbers.map((index,element)=>{
    console.log(`Index is:: ${element}, Value:: ${index}`);
})
