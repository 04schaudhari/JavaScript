console.log( `-----------------------step1-------------------------------`);

function squareOfWordLenght(word){
     console.log('Given String is: ${word}');

     var len = word.length;
     console.log(`Length of string is: ${len}`);
     var result = len * len;
  return result;
}

var returnResult = squareOfWordLenght("JavaScript");
console.log(`Length of square is: ${returnResult}\n`);
var returnResult = squareOfWordLenght("Google Chrome");
console.log(`Length of square is is: ${returnResult}\n`);
var returnResult = squareOfWordLenght("Developer Smart");
console.log(`Length of square is: ${returnResult}\n`);
console.log( `-----------------------step2-------------------------------`);

function noValue() {
    var string = "I am Angular Developer";
    console.log(`The Given String is ${string}`);
    var Stringlen = string.length;
    console.log(`The Length of Given String is ${Stringlen}`);

    var wordsavailabel= string.split(" ");
    console.log(`The words in Given String is ${wordsavailabel}`);

 var divideby = Stringlen / wordsavailabel.length;
 console.log(`After dividing  ${divideby}`);

  var multiplication = Stringlen* wordsavailabel.length;
  console.log(`Total words available in string after multiplication is ${multiplication}`);
}
noValue();