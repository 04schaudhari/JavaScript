console.log(`-----------------------------------------------------------------Step 1 and 2---------------------------------------------------------------------- \n`);

function Bank(bankName,location,ifscCode,branchCode){
    this.bankName = bankName;
    this.location = location;
    this.ifscCode = ifscCode;
    this.branchCode = branchCode;
    this.bankDetails = function () {
     console.log(`Bank details is =\n Bank Name ::> ${this.bankName}, Location ::> ${this.location}, IFSC Code ::> ${this.ifscCode}, Branch Code ::> ${this.branchCode}`);
    }
}

const yesBank =new Bank('YES Bank','Pune','YESB89067890','2312345');
const sbiBank =new Bank('State Bank Of India ','Mumbai','SBIN5678900','345667');
const mahBank =new Bank('Bank Of Maharashtra','Solapur','MAHB4563783','22345');
const axisBank =new Bank('Axis Bank','Latur','UTIB0909098','417789');
yesBank.bankDetails();
sbiBank.bankDetails();
mahBank.bankDetails();
axisBank.bankDetails();

console.log(`\n-----------------------------------------------------------------Step 3 and 4,5-------------------------------------------------------------------- \n`);

Bank.prototype.openTime = "9 AM IST";

Bank.prototype.closeTime = "6 PM IST";

console.log(`Opening time of SBI Bank is::> ${sbiBank.openTime} and Closing time is::> ${sbiBank.closeTime}\n`);

console.log(`-------------------------------------------------------------------Step 6---------------------------------------------------------------------- \n`);

console.log(`Bank Name is ::> ${axisBank.bankName} and Closing time is::> ${axisBank.closeTime}\n`);

console.log(`-------------------------------------------------------------------Step 7---------------------------------------------------------------------- \n`);

console.log(`Bank Name ::> ${yesBank.bankName}, Branch Code ::> ${yesBank.branchCode} and its opening time ::> ${yesBank.openTime}\n`);