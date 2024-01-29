console.log(`-----------------------------------------String Functions--------------------------------------------`);
function stringHandsOn()
{
    
    console.log(`Given string is: ${str1}`);
    console.log(`-----------------------------------------Step2--------------------------------------------`);

    var res=str1.length;
    console.log(`Length of string is: ${res}`);
    console.log(`-----------------------------------------Step3--------------------------------------------`);

    var res=str1.trim(" ");
    console.log(`String after trimming: ${res}`);
    console.log(`-----------------------------------------Step4--------------------------------------------`);

    var result=str1.length-res.length;
    console.log(`After removing extra spaces length of string: ${res.length} and Total numbers of extra spaces count: ${result}`);
    console.log(`-----------------------------------------Step5--------------------------------------------`);
    var result=str1.length-res.length;
    var char=res.charAt(0);
    var char2=res.charAt(22);
    console.log(`First character present in string::${char} , Last character present in string::${char2}`);
    console.log(`-----------------------------------------Step6--------------------------------------------`);
    var word=res.split(" ");
    console.log(`Total numbers of words present in string: ${word.length}`);
    console.log(`-----------------------------------------Step7--------------------------------------------`);
    var index=res.indexOf("good");
    console.log(`Index of word "good": ${index}`);
    console.log(`-----------------------------------------Step8--------------------------------------------`);
    var substring=res.substring(22);
    var slice=res.slice(22,34);
    console.log(`Substring of given string:: ${substring} , Slice of given string::${slice}`);
    console.log(`-----------------------------------------Step9--------------------------------------------`);
    var ends=res.includes("up");
    console.log(`String ends with "up": ${ends}`);

    console.log(`-----------------------------------------Step10--------------------------------------------`);
    var start=res.includes("Hey");
    console.log(`String starts with "Hey": ${start}`);
}
stringHandsOn();