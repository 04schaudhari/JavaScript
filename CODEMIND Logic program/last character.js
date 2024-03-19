console.log(`2. WAP to log the last character of the given strings using length property\n`);
function givenString(str1) {

    console.log(`Given String is: ${str1}`);
    var result = str1.length;

    console.log(`Given String length are: ${result}`);

    var lastChar = str1.charAt(str1.length-1)
    console.log(`last character of the given strings is: ${lastChar}\n`);
    
}

givenString("Hey, my friend, Programming Language")
givenString("I am learning logical programs")
givenString("Angular")