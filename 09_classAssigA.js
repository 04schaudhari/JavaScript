console.log(`---------------------------Step 1------------------------- \n`);

class Vehicle{
    constructor(vehicleName, vehicleType, vehicleCompany,vehicleCapacity,vehiclePrice,vehicleAvarage){
        this.vehicleCompany = vehicleCompany;
        this.vehicleName = vehicleName;
        this.vehicleType = vehicleType;
        this.vehicleCapacity = vehicleCapacity;
        this.vehiclePrice = vehiclePrice;
        this.vehicleAvarage = vehicleAvarage;
    }
    vehicleDetail(){
        console.log(`Vehicle Company is::>${this.vehicleCompany}, Vehicle Name is ::> ${this.vehicleName}, Type of Vehicle ::> ${this.vehicleType}, Total capacity of vehicle ::> ${this.vehicleCapacity}, Price of vehicle ::> ${this.vehiclePrice}, Avarage of Vehicle ::> ${this.vehicleAvarage} \n`);
    }
}

const swift=new Vehicle('Maruti Suzuki','Swift','Car',5,'9 lakhs',25);
const venue=new Vehicle('Hundai','Venue','Compact SUV',5,'14 lakhs',20);

console.log(`Traversing of Vehicle using Array :`);
const arrayOfVehicles=[swift,venue];
for (const element of arrayOfVehicles) {
   element.vehicleDetail(); 
}

// Seperate log on console using vehicleDetails method
// innovaCrista.vehicleDetail();
// harrier.vehicleDetail();
// venue.vehicleDetail();
// swift.vehicleDetail();
// endeavour.vehicleDetail();

console.log(`-------------------------------------------------------------------Step 2---------------------------------------------------------------------- \n`);

class College{
    constructor(collegeName,collegeLocation,faculties,princepleName){
        this.collegeName = collegeName;
        this.collegeLocation = collegeLocation;
        this.faculties = faculties;
        this.princepleName = princepleName;

    }
    display(){
        console.log(`College Name is ::> ${this.collegeName},  College Location ::> ${this.collegeLocation},Faculties of ::> ${this.faculties}, Principle Name of college ::> ${this.princepleName},`);
    }

}

const MSP=new College('Morden College of Art,Science,commerce','Pune','Compter Science','Sanjay kharat');
const rai=new College('Dr Babasaheb Ambedkar College Of Arts Science And Commerce','Raigad','Compter Science','Mahesh Kadare ');
const latu=new College('Rajarshi Shahu College','Latur','Compter Science','Mahadev H.Gavhane');

MSP.display();
rai.display();
latu.display();
console.log("");

console.log(`-------------------------------------------------------------------Step 3---------------------------------------------------------------------- \n`);

let traverseObject=function (obName) {
    for (const key in obName) {
        const element = obName[key];
        console.log(`${key}, Value ::> ${element}`);//console.log(`Key ==> ${key}, Value ==> ${element}`);
    }
    console.log('');
}
traverseObject(MSP);
traverseObject(rai);
traverseObject(latu);
