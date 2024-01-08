console.log(`---------------------------Array----------------------------- \n`);

const fruits_seasonal=["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`Original Array is: ${fruits_seasonal}\n`);
console.log("");
console.log(`---------------------Step1-------------------------`);
console.log("");
const firstElement=fruits_seasonal[0];
console.log(`First Element is: ${firstElement}`);

const lastElement=fruits_seasonal[4];
console.log(`List Element is: ${lastElement}`);
console.log("");
console.log(`---------------------Step2-------------------------`);
console.log("");

const fruits_seasonal1=["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`Original Array is: ${fruits_seasonal1}`);

fruits_seasonal1.unshift("Papaya");
console.log(`Add 'Papaya' Before the element 'Banana' so Array is: ${fruits_seasonal1}`);

console.log("");
console.log(`---------------------Step3-------------------------`);
console.log("");

const fruits_seasonal2=["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`Original Array is : "${fruits_seasonal2}"`);
fruits_seasonal2.splice(3,1);
console.log(`After removing 'Mango' Array is: '${fruits_seasonal2}'\n`);

console.log("");
console.log(`---------------------Step4-------------------------`);
console.log("");
const fruits_seasonal3=["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`Original Array is : "${fruits_seasonal3}"`);
fruits_seasonal3.push('Pineapple');
console.log(`After adding 'Pineapple' at last Array is: '${fruits_seasonal3}'`);
console.log("");
console.log(`---------------------Step5 -------------------------`);
console.log("");

const fruits_seasonal4=["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`Original Array is : ${fruits_seasonal4}`);


fruits_seasonal4.splice(4,0,'Dragon Fruit');
console.log(`After adding 'Dragon fruit' before 'Water Melon' array is: ${fruits_seasonal4}`);

console.log("");
console.log(`---------------------Step6 -------------------------`);
console.log("");

const fruits_seasonal5=["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`Original Array is : ${fruits_seasonal5}`);

fruits_seasonal5.splice(1,1,"Kiwi");
console.log(`After replacing 'Orange' with 'Kiwi' Array is: ${fruits_seasonal5}`);

console.log("");
console.log(`---------------------Step7 -------------------------`);
console.log("");

const fruits_seasonal6=["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`Original Array is : ${fruits_seasonal6}`);

const slicedArray = fruits_seasonal6.slice(1,4);
console.log(`Element Starting from index 1 to 4 is: ${slicedArray}`);

console.log("");
console.log(`---------------------Step8 -------------------------`);
console.log("");

const fruits_seasonal7=["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`Original Array is : ${fruits_seasonal7}`);

const slicedArray1=fruits_seasonal6.slice(fruits_seasonal7.length-3);
console.log(`Last 3 elements of Array is: ${slicedArray1}`);