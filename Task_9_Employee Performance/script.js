const employees = [
{ id: 1, name: "Ahmed", department: "Sales", salary: 8500, experience: 5, performance: 4.7, isActive: true },
{ id: 2, name: "Sara", department: "Marketing", salary: 9200, experience: 3, performance: 4.1, isActive: false },
{ id: 3, name: "Omar", department: "IT", salary: 12500, experience: 6, performance: 4.8, isActive: true },
{ id: 4, name: "Laila", department: "Sales", salary: 7800, experience: 2, performance: 3.9, isActive: true },
{ id: 5, name: "Mostafa", department: "IT", salary: 14000, experience: 8, performance: 4.9, isActive: true },
{ id: 6, name: "Heba", department: "HR", salary: 6900, experience: 4, performance: 4.3, isActive: false },
{ id: 7, name: "Khaled", department: "Marketing", salary: 10200, experience: 7, performance: 4.6, isActive: true },
{ id: 8, name: "Mona", department: "HR", salary: 8000, experience: 5, performance: 4.5, isActive: true },
];

function titleSection(X, title) {
    console.log(X, title);
}

// filter (1)
titleSection("🟢","Employee Active And Performance >= 4.5");
const filterActivePerformance = employees.filter((employee)=> employee.isActive === true && employee.performance >= 4.5);
filterActivePerformance.forEach((employee, i) => {
     console.log(`${i + 1} : ${employee.name}`);
});
console.log(`----------------------------------------------------`);

// filter (2)
titleSection("💰","Salary Avg");
const totalSalary = employees.reduce((sum, employee) => sum + employee.salary,0);
const avgSalary = Math.round(totalSalary / employees.length);
console.log(avgSalary);
console.log(`----------------------------------------------------`);

// filter (3)
titleSection("💰","Employee After 10 %");
const newEmployees = employees.map((employee) => [employee.name, employee.department, (employee.salary + employee.salary * 0.1)]);
console.log(newEmployees);
console.log(`----------------------------------------------------`);

// filter (4)
titleSection("⚡","Heigh Employee performance");
const employeePerformance = employees.map((employee) => employee.performance);
const sortPerformance = employeePerformance.sort((o, t) => t - o);
const heighPerformance = sortPerformance.find((e) => e);
console.log(heighPerformance);
console.log(`----------------------------------------------------`);