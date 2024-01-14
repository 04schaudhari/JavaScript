console.log(`---------------------------------Step1------------------------------\n`);

// creating banksbi object.

const banksbi={
    bankName: 'State Bank of India',
    branchCode: 'SBIN897263901',
    branchManagerName: 'Mr. Vikas Rathod',
    bankStaff: 20,
    branchLocation: 'Pune'
}
console.log(banksbi);
console.log(" ");
console.log(`-------------------------------Step2----------------------------------`);

//Creating bankLocation Object

const bankLocation={
    street: 'Pune-Mumbai Road',
    city: 'Pune',
    pin: 411061
}
console.log(bankLocation);
console.log("");
console.log(`-------------------------------Step3----------------------------------\n`);

console.log(`After Cloning of bankSbi and bankLoaction result is:`);
const bankDetail = Object.assign({},banksbi,bankLocation)
console.table(bankDetail);

console.log(`-------------------------------Step4----------------------------------\n`);

const rateOfIntrest ={
    homeLoanInterest: 6.4,
    personalLoanInterest: 10.25,
    dueInterest: 8.60    
}
console.log(`Given 'rateOfInterest' Object is:`);
console.log(JSON.stringify(rateOfIntrest));

console.log(`-------------------------------Step5----------------------------------\n`);

console.log(`Total bank detail is :`);
const sbiDetail=Object.assign({},bankDetail,rateOfIntrest);
console.log(JSON.stringify(sbiDetail));

console.log(`-------------------------------Step6----------------------------------\n`);

console.log(`Traversing of Object 'sbiDetail' is >>>>>:`);
for (const key in sbiDetail) {
    if (Object.hasOwnProperty.call(sbiDetail, key)) {
        const element = sbiDetail[key];
        console.log(`${key}, Value:: ${element}`);
    }
}