console.log("-------------------------TCS Interview---------------------");

var checkEligibility=function(grandScore,hscScore,sscScore,candidateName){

    if(grandScore>=70 || hscScore>=80 || sscScore>90){
        console.log(`Congrates ${candidateName} You are eligible for TCS interview`);
    }
    else{
        console.log(`Sorry ${candidateName} Yor are not eligible for TCS interview.`);
    }
}
checkEligibility(80,86,90,"Sayali");
checkEligibility(70,65,55,"Pooja");
checkEligibility(60,79,88,"Shruti");