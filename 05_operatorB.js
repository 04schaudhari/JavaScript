console.log(`---------------------Step 1 -----------------------`);
 
function greaterNumber(){
     var a=10;
     var b=-10;
     var gret=(a>b) ? a : b;
     console.log(`Given number are a=10; b=-10`);
     console.log(`The greatest number is=>${gret}`);


var num1=800;
var num2=899;
var greater=(num1>num2)? num1:num2;

console.log(`Given number are num1=800; num2=899`);
console.log(`The Greatest number is: ${greater}`);
}
greaterNumber()

console.log(`---------------------Step 2 -----------------------`);

function isEvenOrOddNum(){
     var n1=29;
     var result=n1%2;
     var resultValue=result==0 ? "Given number is Even" : "It is Odd number";
     console.log("Given number is:29");
     console.log(resultValue);

var n2=44;
     var result=n2%2;
     var resultValue=result==0 ? "Given number is Even" : "It is Odd number";
     console.log("Given number is:44");
     console.log(resultValue);

     var n3=0;
     var result=n3%2;
     var resultValue=result==0 ? "Given number is Even" : "It is Odd number";
     console.log("Given number is:0");
     console.log(resultValue);

     var n4=101;
     var result=n4%2;
     var resultValue=result==0 ? "Given number is Even" : "It is Odd number";
     console.log("Given number is:101");
     console.log(resultValue);

}
isEvenOrOddNum()

console.log(`---------------------Step 3 -----------------------`);

function wordLength(string) {
     console.log(`Given string is: ${string}`);
     console.log(`Length of string is: ${string.length}`);
     var result =
       string.length % 2 == 0
         ? `Given number is "EVEN"\n`
         : `Given number is  "ODD"\n`;
     return result;
   }
   var resultValue = wordLength("JavaScript");
   console.log(resultValue);
   var resultValue = wordLength("Developer");
   console.log(resultValue);
   var resultValue = wordLength("Google");
   console.log(resultValue);