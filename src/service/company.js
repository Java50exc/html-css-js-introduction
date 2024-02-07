import { employeeConfig } from "../config/employee-config.js";
import { getRandomNumber } from "../utils/random.js";


/* HW #21 */
// Employe structure and function createEmployee() taken from previous HW
export function createEmployee(name, birthYear, salary, city, country) {
    return {name, birthYear, salary, address: {city, country}};
}

function isValid(empl) {
    let errMsg = []

    if (empl.birthYear < employeeConfig.minYear) {
        errMsg.push(`birth year must not be less than ${employeeConfig.minYear}`);
    } else if (empl.birthYear > employeeConfig.maxYear) {
        errMsg.push(`birth year must not be greater than ${employeeConfig.maxYear}`);
    }
    if (empl.salary < employeeConfig.minSalary) {
        errMsg.push(`salary must not be less than ${employeeConfig.minSalary}`);
    } else if (empl.salary > employeeConfig.maxSalary) {
        errMsg.push(`salary must not be greater than ${employeeConfig.maxSalary}`);
    }
    return errMsg.join(', ');
}

export class Company {
    #employees; //object key: <id value>, value: reference to Employee object
    
    constructor() {
        this.#employees = {};
    }

    addEmployee(empl) {
        const errMsg = isValid(empl);

        if (!errMsg) {
            empl.id = this.#getId();
            this.#employees[empl.id] = empl;
            console.log(empl);
        }
        return errMsg;
    }

    removeEmployee(id) {
        //removes employee with a given id from #employees object
        //returns true if removed
        //returns false if employee with the id doesn't exist
        let res = false;
        if (this.#employees[id]) {
            res = true;
            delete this.#employees[id]
        }
    }
    getEmployeesCountry(country) {
        //returns array of employee objects having field "country" equaled to a given country
        return Object.values(this.#employees)
        .filter(empl => empl.address.country === country);
    }
    getEmployeesByAge(age) {
        const currentYear = new Date().getFullYear();
        return Object.values(this.#employees)
        .filter(empl => currentYear - empl.birthYear === age);
    }
    getEmployeesBySalaries(salaryFrom, salaryTo) {
        //returns array of employee objects with salary in a given closed range [salaryFrom, salaryTo]
        //if salaryFrom < 0, then get employees with salary less or equal salaryTo
        //if salaryTo < 0, then get employees with salary greater or equal salaryFrom
        //if salaryFrom < 0 && salaryTo < 0, then get all employees
        if (salaryTo < 0) {
            salaryTo = Number.MAX_VALUE;
        }
        return Object.values(this.#employees)
        .filter(empl => empl.salary >= salaryFrom && empl.salary <= salaryTo);
    }

    #getId() {
        let num;

        do {
            num = getRandomNumber(employeeConfig.minId, employeeConfig.maxId);
        } while (this.#employees[num]);
        return num;
    }
}