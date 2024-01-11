console.log("--------------------------Array Assignment 2------------------------\n");

console.log("--------------------------Step1------------------------\n");
const arrayNumbers=[20,31,40,25,23,11,29,9,60,2,11];
console.log(`Original Array is: ${arrayNumbers}`);

console.log(`Length of Array is: ${arrayNumbers.length}\n`);

console.log("--------------------------Step2------------------------\n");
console.log(`Original Array is: ${arrayNumbers}`);
console.log(`Array First Number is: ${arrayNumbers[0]}`);
console.log(`Array last Number is: ${arrayNumbers[arrayNumbers.length-1]}\n`);

console.log("--------------------------Step3------------------------\n");
console.log(`Original Array is: ${arrayNumbers}`);
console.log(`Array Third last Element is: ${arrayNumbers[arrayNumbers.length-3]}\n`);

console.log("--------------------------Step4------------------------\n");
console.log(`Original Array is: ${arrayNumbers}`);
console.log(`Even Number are:`);
for(const even of arrayNumbers)
{
    if(even%2==0){
        console.log(even);
    }
}
console.log("");
console.log("--------------------------Step5------------------------\n");
console.log(`Original Array is: ${arrayNumbers}`);
console.log(`Odd Number are:`);
for(const odd of arrayNumbers)
{
    if(odd%2==1){
        console.log(odd);
    }
}
console.log("");
console.log("--------------------------Step6------------------------\n");
console.log(`Original Array is: ${arrayNumbers}`);
let sumOfEven=0;
for(const sumIndex in arrayNumbers)
{
    
    if(sumIndex%2==0){
        sumOfEven=sumOfEven+arrayNumbers[sumIndex];
    }
}
console.log(`Sum of even positioned elements: ${sumOfEven} `);

console.log("--------------------------Step7------------------------\n");
console.log(`Original Array is: ${arrayNumbers}`);
let sumOfOdd=0;
for(const oddIndex in arrayNumbers){
    
    if(oddIndex%2==1){
       sumOfOdd = sumOfOdd + arrayNumbers[oddIndex];
    }
}
console.log(`Sum of odd positioned elements: ${sumOfOdd}\n`);
console.log("--------------------------Step8------------------------\n");

let sum=0;
for(const elements of arrayNumbers){
    console.log(elements);
    sum = sum + elements;
}
console.log(`Sum of all elements from arrayNumbers is: ${sum}\n`);

console.log("--------------------------Step9------------------------\n");
console.log(`Original Array is: ${arrayNumbers}`);
console.log(`Multiple of 5 numbers are:`);
for(const multiOf5 of arrayNumbers){
    if(multiOf5%5==0){
        console.log(multiOf5);
    }
}
console.log("");
console.log("--------------------------Step10------------------------\n");

console.log(`Original Array is: ${arrayNumbers}`);
const check = arrayNumbers.includes(115);
console.log(`In original array '115' is available: ${check}`);

console.log("--------------------------Step11------------------------\n");

console.log(`Original Array is: ${arrayNumbers}`);
const check1 = arrayNumbers.includes(23);
console.log(`In original array '23' is available: ${check1}\n`)

console.log("--------------------------Step12------------------------\n");

const arrayNumbers1=[20,31,40,25,23,11,29,9,60,2,11]
console.log(`Original Array is :- ${arrayNumbers1}`);
arrayNumbers1.splice(3,0,55,66);
console.log(`After inserting '55','66' numbers at index 3 then  Array is: ${arrayNumbers1}\n`);

console.log("--------------------------Step13------------------------\n");
const arrayNumbers2=[20,31,40,25,23,11,29,9,60,2,11]
console.log(`Original Array is: ${arrayNumbers2}`);
arrayNumbers2.splice(4,3);
console.log(`After deleting 3 numbers from index 4 then Array is :- ${arrayNumbers2}`);
