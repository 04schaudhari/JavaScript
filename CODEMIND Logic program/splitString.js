console.log(`-------6. How do you split a string into an array of substrings with comma separator?-------`);


function splitString(strB) {

    // let string = strB

    console.log(`Given String is: ${strB}`);

    const result = strB.split(',')

    
    console.log(`Given String into Array is: ${result}\n`);
}

splitString("apple,orange,banana");
splitString("Stew,Bill,Jenny,Elon");
splitString("Rupees,Dollar,Krone,Pound,Dinar");