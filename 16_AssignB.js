class Employee{
    constructor(emp_id,emp_name,emp_dept, emp_salary, emp_company){
        this.emp_id=emp_id;
        this.emp_name=emp_name;
        this.emp_dept=emp_dept;
        this.emp_salary=emp_salary;
        this.emp_company=emp_company;
    }
    getDetails(){
        console.log(`Employee ID: ${this.emp_id}, Employee Name: ${this.emp_name}, Employee Department: ${this.emp_dept}, Employee Salary: ${this.emp_salary}, Employee Company: ${this.emp_company}`);
    }
}

const emp_anil = new Employee (22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee (33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee (55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee (66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee (77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee (88, "Vinayak", "IT", 75000, "TCS"); 
const emp_mahi = new Employee (99, "Mahesh", "HR", 85000, "Infy");

const allEmployee= [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];

console.log(`\n===============================Step 1========================\n`);

console.log(`Employess those are working in TCS Company:`);
for(const emp of allEmployee){
    if(emp.emp_company=='TCS'){
        console.log(`Employee Name is: ${emp.emp_name}, Employee Company Name is: ${emp.emp_company}`);

    }
    }

console.log(`\n===============================Step 2========================\n`);
console.log(`Employess having Finance Department is:`);
for(const emp of allEmployee){
    if(emp.emp_dept=='Finance'){
        console.log(`Employee Department: ${emp.emp_dept}, Employee Name is: ${emp.emp_name}`);
    
    }
}

console.log(`\n===============================Step 3========================\n`);

console.log(`Employees whoes name starts with 'R':`);
for (const emp of allEmployee) {
 if (emp.emp_name.startsWith('R')) {
    emp.getDetails();
 }
}

console.log(`\n===============================Step 4========================\n`);

console.log(`Employees Whoes salary is greater than 75000:`);
for (const emp of allEmployee) {
 if (emp.emp_salary > 75000) {
    console.log(`Employee Name: '${emp.emp_name}' Employee Company : '${emp.emp_company}', Employee Salary : '${emp.emp_salary}'`);
 }
}

console.log(`\n===============================Step 5========================\n`);

console.log(`Employees Whoes salary is greater than equal to '50000' and from 'IT' Depatment:`);
for (const emp of allEmployee) {
 if (emp.emp_salary >= 50000 && emp.emp_dept=='IT') {
    emp.getDetails();
 }
}

console.log(`\n===============================Step 6========================\n`);
console.log(`Employees from 'Infy' company =>`);
for (const emp of allEmployee) {
 if (emp.emp_company=='Infy') {
    emp.getDetails();
 }
}