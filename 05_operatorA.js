console.log( `-----------------------Step 1-------------------------------`);
console.log("");
function squareOfWordLength(str1){

    var lengthOfString = str1.length;
    var squareOfStringLength = str1.length * str1.length;

    console.log(`Given String is:"${str1}", Length is: ${squareOfStringLength}`);



}

squareOfWordLength("Java Script");
squareOfWordLength("Google Chrome");
squareOfWordLength("Developer Smart");
console.log("");

console.log( `-----------------------Step 2-------------------------------`);
    console.log("");

function string(){
    var str="I am Angular Developer";
    console.log(`The Given String is: ${str}`);

    var strLength=str.length;
    console.log(`String Length is: ${strLength}`);

    var strWord=str.split(" ");
    console.log(`Total of String Word is: ${strWord.length}`);

    var strDiv=str.length/strWord.length;
    console.log(`Division of String Word and Lenght of Word: ${strDiv}`);

    var strMul=str.length*strWord.length;
    console.log(`Multiplication of String Word and Lenght of Word: ${strMul}`);

    console.log("");
}

string()