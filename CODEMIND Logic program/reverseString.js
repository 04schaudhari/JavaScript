console.log(`-------7. Reverse String: Recommended to use define the functions-------`);

function reverseString(str) {

    const string = str;

    console.log(`Given String is:${string}`);

    const result = string.split("").reverse().join("")
    console.log(`Reverse String is : ${result}\n`);
    
}

reverseString("Software")
reverseString("UI Developer")


console.log(`-------Reverse the string without using predefined methods.-------`);

function reverseStringwithoutPreDefine(str) {

    console.log(`Given String is: ${str}`);

    let resultNew = "";

    for(let index = str.length-1; index>=0; index--){

        resultNew = resultNew + str.charAt(index)


    }

    console.log(`The Reverse of Given String is:${resultNew}\n`);
}

reverseStringwithoutPreDefine("Web Developer");
reverseStringwithoutPreDefine("Billion Dollar");
reverseStringwithoutPreDefine("Java");
