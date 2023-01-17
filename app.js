// const employee1 = {id: 123, name: "Vasya", birthYear: 2000, 
// salary: 15000, address: {city: "Lod", country: "Israel"}};
// const employee2 = {id: 123, name: "Vasya", birthYear: 2000, 
// salary: 15000, address: {city: "Lod", country: "Israel"}};
// console.log(`employee1==employee2 is ${employee1 == employee2}`)
// const employee3 = employee1;
// console.log(`employee3==employee1 is ${employee3 == employee1}`)
// employee3.salary = 20000;
// console.log(`employee1 salary = ${employee1.salary} `)
function createEmployee(id, name, birthYear, salary, city, country) {
    return { id, name, birthYear, salary, address: { city, country } }
}
const employees = [
    createEmployee(123, "Vasya", 2000, 15000, "Lod", "Israel"),
    createEmployee(124, "David", 1975, 15500, "Tel Aviv", "Israel"),
    createEmployee(125, "Sara", 1985, 20000, "New York", "USA"),
    createEmployee(126, "Abraham", 1990, 13000, "London", "UK"),
    createEmployee(127, "Moshe", 2000, 15000, "Rehovot", "Israel"),
    createEmployee(128, "Goga", 1993, 10000, "Tbilisi", "Gorgia"),
    createEmployee(129, "Sasha", 2000, 25000, "Ramat Gan", "Israel"),
    createEmployee(130, "Vasya", 2003, 10000, "Arad", "Israel")
]
//const index = employees.indexOf(createEmployee(126, "Abraham", 1990, 13000, "London", "UK"))
const index = employees.findIndex(function (empl) {
    return empl.id === 126;
})
const employee = employees.find(function (empl) {
    return empl.id === 126;
})


//HW #18
function getEmployee(employees, id) {
    if (employees && Array.isArray(employees)) {
        return employees.find((empl) => empl.id == id);
    }
    return undefined;
}
console.log(getEmployee(employees, 124));
console.log();

function getEmployeesBySalary(employees, salaryFrom, salaryTo) {
    if (employees && Array.isArray(employees) && salaryTo > salaryFrom) {
        return employees.filter(empl => empl.salary >= salaryFrom && empl.salary <= salaryTo);
    }
    return undefined;
}
console.log(getEmployeesBySalary(employees, 10000, 13000));
console.log();

function getEmployeesByCity(employees, city) {
    if (employees && Array.isArray(employees) && city) {
        return employees.filter(empl => empl.address.city == city);
    }
    return undefined;
}
console.log(getEmployeesByCity(employees, "Tel Aviv"));
console.log();

function getEmployeeNames(employees) {
    if (employees && Array.isArray(employees)) {
        return employees.map(empl => empl.name)
            .filter((cur, ind, arr) => arr.indexOf(cur) == ind);
    }
    return undefined;
}
console.log(getEmployeeNames(employees));
console.log();

function sortEmployeesByAge(employees) {
    if (employees && Array.isArray(employees)) {
        return [...employees].sort((e1, e2) => e2.birthYear - e1.birthYear);
    }
    return undefined;
}
console.log(sortEmployeesByAge(employees));
console.log();

function computeSalaryBudget(employees) {
    if (employees && Array.isArray(employees)) {
        return employees.reduce((acc, cur) => acc + cur.salary, 0);
    }
    return undefined;
}
console.log(computeSalaryBudget(employees));
console.log();