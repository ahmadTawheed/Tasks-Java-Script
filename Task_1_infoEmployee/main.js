
// By Ahmed Tawheed
/*  # == Title
 - console.log("");
 - console.table
 - console.write
 - console.alert
 - document.write
 - variables
 - concat + 
 - name of variable
 - Data type
 - Array
 - object
 - tasks or problem solving
*/

let employee1 = {
    name : "Ahmed",
    age  : 21,
    jobTitle : "MERN Stack",
    live : {country : "Egypt", city : "Mansoura"},
    skills : ["React", "Node.js", "MongoDB", "Redux toolkit"],
    salary : [500, 800, 1000]
};

let employee2 = {
    name : "Mohamed",
    age  : 23,
    jobTitle : "Front-End React.js",
    live : {country : "Egypt", city : "Cairo"},
    skills : ["HTML", "CSS", "JS", "React.js"],
    salary : [300, 600, 900]
};

let employee3 = {
    name : "Hager",
    age  : 20,
    jobTitle : "UI/UX Design",
    live : {country : "Egypt", city : "Mansoura"},
    skills : ["Xd", "Figma", "Case Study", "SaaS"],
    salary : [400, 600, 800]
};

let allEmployees = [employee1, employee2, employee3];
// 1 
let = avgEmployee1 = (allEmployees[0].salary[0] + allEmployees[0].salary[1] + allEmployees[0].salary[2]) / 3;
let nameEmp1 = allEmployees[0].name;
let jobEmp1 = allEmployees[0].jobTitle;
let isManagerEmp1 = false;
let sumSalaryEmp1 = allEmployees[0].salary[0] + allEmployees[0].salary[1] + allEmployees[0].salary[2];
console.log(`First Employee \n Name: ${nameEmp1} \n Jop Title: ${jobEmp1} \n Is Manager: ${isManagerEmp1} \n Total of The Salary is ${sumSalaryEmp1} \n Average Salary is ${avgEmployee1}`);
console.log(`--------------------------------------------`);

// 2
let = avgEmployee2 = (allEmployees[1].salary[0] + allEmployees[1].salary[1] + allEmployees[1].salary[2]) / 3;
let nameEmp2 = allEmployees[1].name;
let jobEmp2 = allEmployees[1].jobTitle;
let isManagerEmp2 = false;
let sumSalaryEmp2 = allEmployees[1].salary[0] + allEmployees[1].salary[1] + allEmployees[1].salary[2];
console.log(`First Employee \n Name: ${nameEmp2} \n Jop Title: ${jobEmp2} \n Is Manager: ${isManagerEmp2} \n Total of The Salary is ${sumSalaryEmp2} \n Average Salary is ${avgEmployee2}`);
console.log(`--------------------------------------------`);

// 3
let = avgEmployee3 = (allEmployees[2].salary[0] + allEmployees[2].salary[1] + allEmployees[2].salary[2]) / 3;
let nameEmp3 = allEmployees[2].name;
let jobEmp3 = allEmployees[2].jobTitle;
let isManagerEmp3 = false;
let sumSalaryEmp3 = allEmployees[2].salary[0] + allEmployees[2].salary[1] + allEmployees[2].salary[2];
console.log(`First Employee \n Name: ${nameEmp3} \n Jop Title: ${jobEmp3} \n Is Manager: ${isManagerEmp3} \n Total of The Salary is ${sumSalaryEmp3} \n Average Salary is ${avgEmployee3}`);
console.log(`--------------------------------------------`);

// total 
let totalSalary = sumSalaryEmp1 + sumSalaryEmp2 + sumSalaryEmp3;
console.log(`Total the Salary of All Employees is ${totalSalary}`);


// console.log(allEmployees);