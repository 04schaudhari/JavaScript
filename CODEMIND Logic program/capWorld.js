console.log(`------ Write a function - capitalizeWord( ) with below string argument and invoke the same 
function one by one for below string values. -------\n`);

function  capitalizeWord(word) {

    console.log(`Given String is : ${word}`);

   let result = word.charAt(0).toUpperCase() + word.slice(1); // Word First latter capitalize

// let result = word.toUpperCase();

   console.log(`After Capitalize the String is: ${result} \n`);
    
}

capitalizeWord("language of internet")
capitalizeWord("EloN musk – The tycoon of decade")
capitalizeWord("My Life My Rule")
capitalizeWord("logical programming question SET")