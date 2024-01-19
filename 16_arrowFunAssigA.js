console.log(`==========================Step 1========================\n`);

const today = () =>{
    console.log(`Good Morning,Today is Thusrday`);
}
today();
console.log(`\n==========================Step 2========================\n`);



const multiplication = (num1,num2,num3=1) =>{
    result = num1*num2*num3;
    console.log(`Multiplication of all No.s are:  ${result}`);
}
multiplication(5,5,2);
multiplication(10,4);

console.log(`\n==========================Step 3========================\n`);

const additionOfInput = (n1,n2,n3,n4,n5) =>{

    resultSum = n1+n2+n3+n4+n5;
    console.log(`Value is: ${n1},${n2},${n3},${n4},${n5}`);

    return resultSum;

}
resultOfaddition = additionOfInput(100,100,200,349,756);
console.log(`Addition of the Number is : ${resultOfaddition}\n`);

resultOfaddition = additionOfInput("I am"," learning"," ES6",' features'," in depth");
console.log(`Addition of the String is : ${resultOfaddition}`);
