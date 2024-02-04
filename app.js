// let str = "123m"
// let num = parseInt(str) + 10 + 'm';
// let str1 = "js.5";
// let numInt = parseInt(str1, 32);
// let numFloat = parseFloat(str1);
function myParseInt(str, base) {
    const mult = str.charAt(0) == '-';
    str = mult ? str.substring(1) : str;

    base = base || 10;
    let res = 0;
    for (let i = 0; i < str.length; i++) {
        let code = getCode(str[i]);
        if (!code) {
            break;
        }
        res = res * base + code;
    }
    return mult ? -res : res;
}
function getCode(symbol) {
    symbol = symbol.toLowerCase();
    const codeA = 'a'.charCodeAt();

    if (symbol < '0' || symbol > '9' && symbol < 'a' || symbol > 'z') {
        return undefined;
    }
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
    const mult = number > 0;
    number = Math.abs(number);
    let numInt = Math.trunc(number);
    let numFract = number - numInt;

    console.log(number);
    console.log(numInt);
    console.log(numFract);
    while (numFract - Math.trunc(numFract)) {
        numFract *= 10;
        
    }
    const res = convert(numInt, base) + (numFract ? `.${convert(numFract, base)}` : '');

    return mult ? res : "-" + res;
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

console.log((-123.1).toString())
console.log(myToString(-123.123))