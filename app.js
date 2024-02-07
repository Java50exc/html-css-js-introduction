const rectangle = {
    width: 20, height: 10, square: function () {
        return this.width * this.height;
    }, perimeter: function () {
        return this.width * 2 + this.height * 2
    }
}
// this.width = 100;
// this.height = 200;
// console.log(this)
console.log(rectangle.square());
console.log(rectangle.perimeter());

class Rectangle {
    #width;
    #height;
    constructor(width, height) {
        this.#height = height;
        this.#width = width;
    }
    square() {
        return this.#width * this.#height;
    }
    perimeter() {
        return this.#width * 2 + this.#height * 2
    }
}
// function Rectangle(width, height) {
//     this.width = width;
//     this.height = height;
// }
// Rectangle.prototype.square = function() {
//     return this.width * this.height;
// }
const rectangle1 = new Rectangle(3, 4);
console.log(rectangle1.square());
Rectangle.prototype.square = function () {
    return "kuku"
}
console.log(rectangle1.square());
//console.log(rectangle1.perimeter());





/* HW #21 */
// Employe structure and function createEmployee() taken from previous HW
function createEmployee(id, name, birthYear, salary, city, country) {
    return { id, name, birthYear, salary, address: { city, country } }
}
class Company {
    #employees //object key: <id value>, value: reference to Employee object

    constructor() {
        this.#employees = {};
    }

    addEmployee(empl) {
        if (!this.#employees[empl.id]) {
            this.#employees[empl.id] = empl;
            return true;
        }
        return false;
    }

    removeEmployee(id) {
        return this.#employees[id] ? delete this.#employees[id] : false;
    }

    getEmployeesByCountry(country) {
        if (country) {
            return this.#getEmployeesByPredicate(e => e.address.country == country);
        }
        return undefined;
    }

    getEmployeesByAge(age) {
        if (this.#isNumber(age)) {
            return this.#getEmployeesByPredicate(e => new Date().getFullYear() - e.birthYear == age);
        }
        return undefined;
    }

    getEmployeesBySalaries(salaryFrom, salaryTo) {
        if (this.#isNumber(salaryFrom) && this.#isNumber(salaryTo)) {
            salaryFrom = salaryFrom <= 0 ? 0 : salaryFrom;
            salaryTo = salaryTo <= 0 ? Infinity : salaryTo;
            return this.#getEmployeesByPredicate(e => e.salary >= salaryFrom && e.salary <= salaryTo);
        }
        return undefined;
    }

    #getEmployeesByPredicate(predicate) {
        const res = [];
        for (const id in this.#employees) {
            if (predicate(this.#employees[id])) {
                res.push(this.#employees[id]);
            }
        }
        return res;
    }

    #isNumber(number) {
        return typeof number === 'number' 
            && !Number.isNaN(number) 
                && Number.isFinite(number);
    }
}

let empl = createEmployee(100, 'Vasya', 1993, 15000, 'Ramat Gan', 'Israel');
let comp = new Company();
comp.addEmployee(empl);

console.log(comp.removeEmployee(100));
console.log(comp.addEmployee(empl));