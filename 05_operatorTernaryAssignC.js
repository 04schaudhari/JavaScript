console.log('---------------------step 1--------------------');
console.log(" ");

function maleMarriageEligibility(gender,age,boyName){

    var check= gender=="male" && age>=21
    ?`Hey ${boyName} you are eligible for Marriage`
    :`Hey ${boyName} you are not eligible for Marriage`;

    return check;
}
var result=maleMarriageEligibility("male", 25,"Billgates");
console.log(result);
var result=maleMarriageEligibility("male", 17,"stew jobs");
console.log(result);
console.log(" ");
console.log('---------------------step 2--------------------');
console.log(" ");
var femaleMarriageEligibility=function(gender,age,girlName){
    var result=gender=="Female" && age>=18
    ? `Hey ${girlName} you are eligible for Marriage`
    : `Unfoetunately, you are not eligible for Marriage`;
    console.log(result);
}
femaleMarriageEligibility("Female",16,"Jnnifer");
femaleMarriageEligibility("Female",27,"Malinda Gates");




