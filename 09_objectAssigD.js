let professor ={
    Name: "Sayali Chaudhari",
    age:30,
    DOB:"4-November-1993",
    department:"Computer Science",
    degrees :{
        engineering:"CSC",
        PHD: "Adv computing"
    },
    certificates:["Haker Rank Participation","Certifiacte in IFE Course","Certificate in Advance Programming"]

}

console.log(`------------------------------Step 1 and 2,3------------------------------`);
console.log(professor);
console.log("Degrees: ",professor.degrees);
console.log(`Certificates: ${professor.certificates} `);

console.log(`      `);

console.log(`------------------------------Step 4------------------------------`);
console.log(`New property totalExperience`);
professor.totalExperience=14;
console.log("Total Experience is: ",professor.totalExperience);

console.log(`      `);

console.log(`------------------------------Step 5------------------------------`);
console.log(`Modify age value is: `);
professor.age=42;
console.log(`New value of age: ${professor.age}`);

console.log(`      `);


console.log(`------------------------------Step 6------------------------------`);
console.log(`Original certificates is: ${professor.certificates}`);

console.log(`Add Oracle Certified at index 2 is:`);
professor.certificates.splice(2,0,"Oracle Certified");
console.log(`After adding Oracle cetified: ${professor.certificates}`);

console.log(`      `);

console.log(`------------------------------Step 7------------------------------`);
console.log(`Last element of array: ${professor.certificates[professor.certificates.length-1]}`);

console.log(`      `);

console.log(`------------------------------Step 8------------------------------`);
console.log(`Traverse array using for of loop:`);
for (const iterator of professor.certificates) {
    console.log(iterator);
}