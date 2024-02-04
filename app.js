//numbers
// let num = 25.325;
// num = 40.5;

//num = Math.floor(num);
//num = Math.trunc(num);
//num = Math.ceil(num);
// num = Math.round(num);
// num **= 2; // num = num ** 2

//strings
// let str = "a'bc'd";
// let str1 = 'a"bc"d';
// let res = +"123" + +56;
// let res1 = "123" - 56;
// let res2 = Math.round("123" / 56);
// let res3 = "123" / "2";
// let res4 = "ab" / 8;

//boolean
// let a = 100;
// let error = true;
// let res = true + true;
// let res1 = true && false;
// let res2 = a || 256 / a;
// let message = error && "some error happenning";
// let re3 = a || 10;
// let res4 = "123" > "9";
// let res5 = "123" > 9;
//equilty operators
let res10 = "123" == 123; //true
let res11 = "123" === 123; //false
//string functions for HW
let str = "aBdTYg";
str = str.toLowerCase(); //"abcdtyg"

// let n = 10;
// let count = 0;
// // while (n > 0) {
// //     n--;
// //     count++;
// // }
// // do {
// //   n--;
// //   count++
// // } while(n > 0);
// while(--n) {
//     count++;
// }
// let d;
// // 3 + 7 * "10"



// HW #11
function getDigitsSum(number) {
    number = Math.trunc(Math.abs(number));
    let resNumber = 0;

    do {
        resNumber += number % 10;
    } while(number = Math.trunc(number / 10));

    return resNumber;
}

function computeExpression(expressionStr) {
    return eval(expressionStr);
}

function printAnanas() {
    return console.log(("A" + "A" / "S" + "AS").toLowerCase());
}


function reverse(number) {
    let str = number < 0 ? "-" : "";
    number = Math.trunc(Math.abs(number));

    do {
        str += number % 10;
    } while (number = Math.trunc(number / 10));
    return str;
}

//TEST
console.log(getDigitsSum(123.45) == 6);
console.log(getDigitsSum(-280.123) == 10);
console.log(getDigitsSum(123) == 6);

console.log(computeExpression("9000 / ((10 + 20) ** 2)") == 10);
console.log(computeExpression("9 + 100 / 2") == 59);

printAnanas();

console.log(reverse(123.45) == "321");
console.log(reverse(-280.123) == "-082");
console.log(reverse(123) == "321");
console.log(reverse(-123) == "-321");







 










