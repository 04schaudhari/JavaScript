console.log(`--- 5. WAP to check whether given strings contains word ‘UI’ or not? -----\n`);

function check(string) {

 let name = string
    console.log(`String is : ${name}`);

    if (string.includes("UI")) {

        
        console.log(`Given strings contains UI \n`);
        
    }else{

        console.log(`Given strings Not contains UI \n`);
    }

}
check("React - UI Developer")
check("UI Developer")
check("Front end and backend technologies")
check("MEAN or MERN – UI Developer")

