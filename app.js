const array = [10, 20, 30, -10, 11, 100];
const index = array.indexOf(30);
//removing all numbers from 30
//const res = array.splice(index);
//array.splice(index, undefined, -1000);
//insert
//array.splice(index, 0, -10, -20);
//replace
//array.splice(index, 2, 20);
// const ar1 = [40,200];
// array.splice(index, 1, ...ar1);
// const numbersPerPage = 2;
// const page = 3;
// const firstIndex = (page - 1) * numbersPerPage
// const pageNumbers = array.slice(firstIndex,
//      firstIndex + numbersPerPage )
// const ar1 = array.map(multiply2);
// function multiply2(number) {
//     return number * 2;
// }
// const ar2 = array.map(function (number, index) {
//     return index + 1 + '. ' + number;
// });
// const ar3 = array.map(function(number) {
//     return `<li>${number}</li>`
// })
// const ulElement = `<ul>${ar3.join('')}</ul>`
//HW #14 (1)
function coloringString(str1, str2) {
    if (str1.length != str2.length) {
        return [];
    }
    const arrStr1 = Array.from(str1);

    return Array.from(str2).map((e, i) => arrStr1[i] == e ? 'green' : arrStr1.includes(e) ? 'yellow' : 'red');
}

const ar5 = array.filter(function (__, index) {
    return index % 2 === 0;
})
//HW #14 (2)
function getNumbersWithDigitsAmount(digitsAmount, array) {
    return array.filter(e => Math.abs(e).toString().length == digitsAmount);
}

console.log(coloringString("pappy", "apple"));
console.log(getNumbersWithDigitsAmount(3, [1, 100, -100, 25, 1000]));






