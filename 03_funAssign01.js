console.log("----------------------------- Step 1 -----------------------------------" );

function myHobbie() {
    console.log("My Hobbies is Listening Songs");
  }
  myHobbie();
  
  function programmingLanguage() {
    console.log( "My favorite programming language is CSS");
  }
  programmingLanguage();

  console.log("----------------------------- Step 2 -----------------------------------" );
  function personalDetails(firstName, lastName, collegeName) {
    console.log("First Name : ", firstName);
    console.log("Last Name : ", lastName);
    console.log("College Name : ", collegeName);
  }
  personalDetails("Sayali", "Chaudhari", "Modern College of Pune");

  console.log("----------------------------- Step 3 -----------------------------------" );
  function swapValues(num1, num2) {
    console.log("Before Swap Value : ");
    console.log("Number 1 is : ", num1);
    console.log("Number 2 is : ", num2);
  
    var temp = num1;
    num1 = num2;
    num2 = temp;
  
    console.log("After Swap Value : ");
    console.log("Number 1 is : ", num1);
    console.log("Number 2 is : ", num2);
 
    console.log("\n");
  }
  swapValues("Sayali", "Aarnika");
  swapValues(30, 40);

  console.log("----------------------------- Step 4 -----------------------------------" );
  

  function addThreeValues(num1, num2, num3) {
    console.log("Value 1 is : ", num1);
    console.log("Value 2 is : ", num2);
    console.log("Value 3 is : ", num3);
  
    var result = num1 + num2 + num3;
    console.log("Addition of Number is:", num1, "+", num2, "+", num3, "is : ", result);
    console.log("\n");
  }
  addThreeValues(10.23, 600, 40);
  addThreeValues("Hello", "Good", "Morning");
  