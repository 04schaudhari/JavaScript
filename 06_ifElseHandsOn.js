console.log("-----------------Step1-----------------")
console.log("");
 var evenOddResult = function(num){
    if
    (num % 2==0)
    {
        console.log(`Number is ${num}: So, Given Number is Even`);
    }
    else
    {
        console.log(`Number is ${num}: So, Given Number is Odd`);
    }
 }
 evenOddResult(45);
 evenOddResult(70);
 evenOddResult(67);
 evenOddResult(98);
 console.log("");
 console.log("-----------------Step2-----------------")

 console.log(" ");

 var voteResult= function(age){

    if (age >= 18) {
        console.log(`Age is ${age}: So, you are eligible to vote`);
      } else {
        console.log(`Age is ${age}: You are not eligible to vote`);
      }
    };
    
    voteResult(18);
    voteResult(20);
    voteResult(17);
    voteResult(40);
console.log("");

console.log("========================== step 03 ==========================");
console.log("");
var countOfWords = function (word) {
  if (word.length > 10) {
    console.log(`Given word is ${word}: It has more than 10 character`);
  } else {
    console.log(`Given word is ${word}: It has less than 10 character`);
  }
};

countOfWords("javascript-ES6");
console.log("");

console.log("========================== step 04 ==========================");
console.log("");
var wordStartsWith = function (word) {
    if (word.startsWith("java")) {
      console.log(`Given word is ${word} and It start with the word java`);
    } else {
      console.log(
        `Given word is ${word} and It does not start with the word java`
      );
    }
  };
  
  wordStartsWith("javascript language");