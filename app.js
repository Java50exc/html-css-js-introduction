// let str = "123m"
// let num = parseInt(str) + 10 + 'm';
// let str1 = "js.5";
// let numInt = parseInt(str1, 32);
// let numFloat = parseFloat(str1);
function myParseInt(str, base) {
    const isNegative = str[0] == '-';
    str = isNegative ? str.substring(1) : str;

    base = base || 10;
    let res = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] < '0' || str[i] > '9' && str[i] < 'a' || str[i] > 'z') {
            break;
        }
        res = res * base + getCode(str[i]);
    }
    return isNegative ? -res : res;
}
function getCode(symbol) {
    symbol = symbol.toLowerCase();
    const codeA = 'a'.charCodeAt();

    return symbol <= '9' ? +symbol : symbol.charCodeAt() - codeA + 10;
}
// let str1 = "ff";
// let str2 = "123";
// let str22 = "Java";
// let str3 = "123m"
// let str4 = "123.5"
// let num = parseInt(str1, 16);
// let myNum = myParseInt(str1, 16);
// num = parseInt(str2);
// myNum = myParseInt(str2);
// num = parseInt(str22, 36);
// myNum = myParseInt(str22, 36);
// num = parseInt(str3);
// myNum = myParseInt(str3);
// num = parseInt(str4);
// myNum = myParseInt(str4);
// let number = 255;
// let str = "" + number;
// str = number.toString(36);
function myToString(number, base) {
    const isNegative = number > 0;
    number = Math.abs(number);
    let numFract = 0;
    let precision = 0;

    while (number % 1) {
        number *= 10;
        precision++;
    }

    for (i = 0; i < precision; i++) {
        numFract += number % 10 * 10 ** i;
        number = Math.trunc(number / 10);
    }
    const res = convert(number, base) + (numFract ? `.${convert(numFract, base)}` : '');
    return isNegative ? res : "-" + res;
}

function convert(number, base) {
    let res = '';
    base = base || 10;

    do {
        const digit = number % base;
        const symbol = getSymbol(digit);
        res = symbol + res;
        number = Math.trunc(number / base);
    } while (number);
    return res;
}

function getSymbol(digit) {
    const codeA = 'a'.charCodeAt();
    let symbol;
    if (digit < 10) {
        symbol = "" + digit;
    } else {
        const codeAscii = digit - 10 + codeA;
        symbol = String.fromCharCode(codeAscii);
    }
    return symbol;

}

let num100 = 990500;
let str100 = num100.toString();
let myStr100 = myToString(num100);
str100 = num100.toString(36);
myStr100 = myToString(num100, 36);
num100 = 123.45;
str100 = num100.toString(16);
myStr100 = myToString(num100, 16);

console.log(parseInt("-1111011", 2))
console.log(myParseInt("-111.1"))

console.log((0.45).toString(36))
console.log(myToString(123.45, 36))
