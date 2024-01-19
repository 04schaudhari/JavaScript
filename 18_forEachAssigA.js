console.log(`\n---------------------------------------step 1-----------------------------------\n`);
console.log(`Array Traversing using forEach loop with index and element is:`);

const arrayNumbers=[1,-7,40,502,-77,91,0,108,89,-601];
console.log(`Original Array is => [${arrayNumbers}]`);

arrayNumbers.forEach( (element,indexOfElement) => {
console.log(indexOfElement, "::",element);
});

console.log(`\n---------------------------------------step 2-----------------------------------\n`);

console.log(`Original Array is:[${arrayNumbers}]`);
console.log(`Positive numbers are:`);
arrayNumbers.forEach( (element) => {
    if (element>0) {
            console.log(element);
    }
});

console.log(`\n---------------------------------------step 3-----------------------------------\n`);

console.log(`Given Array is: [${arrayNumbers}]`);
const negativeNumbers=[];
arrayNumbers.forEach( (element) => {
    if (element<0) {
            negativeNumbers.push(element);
    }
});
console.log(`Negative Numbers array form Given array is: [${negativeNumbers}]`);

console.log(`\n---------------------------------------step 4-----------------------------------\n`);

console.log(`Given Array is : [${arrayNumbers}]`);
console.log(`Even Numbers form Given array is : `);
const evenNumbers=[];
arrayNumbers.forEach( (element) => {
    if (element%2==0) {
            evenNumbers.push(element);
    }
});
evenNumbers.forEach((element)=>{
    console.log(element);
});

console.log(`\n---------------------------------------step 5-----------------------------------\n`);

let sum=0;
console.log(`Given Array is : [${arrayNumbers}]`);
arrayNumbers.forEach((element)=>{
    sum+=element;
});
console.log(`Sum of all elements are: ${sum}`);

console.log(`\n---------------------------------------step 6-----------------------------------\n`);

console.log(`Given Array is : [${arrayNumbers}]`);
console.log(`Even index values are :`);
arrayNumbers.forEach((element,index)=>{
   if(index%2==0){
    console.log(element);
   }
});