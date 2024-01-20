class Employee{
    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company){
        this.emp_id=emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22,"Anil","IT",50000,"TCS");
const emp_radha = new Employee(33,"Radha","HR",74000,"Wipro");
const emp_rishi = new Employee(55,"Rishi","Finance",47000,"TCS");
const emp_sonali = new Employee(66,"Sonali","Finance",45000,"Infy");
const emp_monika = new Employee(77,"Monika","IT",40000,"Wipro");
const emp_viny = new Employee(88,"Vinayak","IT",75000,"TCS");
const emp_mahi = new Employee(99,"Mahesh","HR",85000,"Infy");
const arryEmployee = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];
//console.log(arryEmployee);

console.log(`\n==============================Step 1===========================\n`);
//List of all employee salary

const arrayOfSalary = arryEmployee.map((element) =>{
    return element.emp_salary;
})
console.log(`List of All Employee Salary are: ${arrayOfSalary}` );

console.log(`\n==============================Step 2===========================\n`);

//List of all employee Department

const arrayDpt = arryEmployee.map((element) =>{
    return element.emp_dept;
})

console.log(`List of all Employee Department are: ${arrayDpt}` );


console.log(`\n==============================Step 3===========================\n`);

//List of all employee ID's

const arrayID = arryEmployee.map((element) =>{
 return element.emp_id;
})

console.log(`List of all employee ID's are: ${arrayID}` );