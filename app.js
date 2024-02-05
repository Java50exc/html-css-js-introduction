const array = [123, 9, 28, 3, 44, -123];
array.sort(function(e1, e2){
    let res = e1.toString().length - e2.toString().length;
    if (!res) {
        res = e1 - e2;
    }
    return res;
});
// console.log(`result of sorting [123, 9, 28, 3, 44] is ${array}`)
//HW #15
/************************************************************************************** */
//task sort.1
function evenOddSort(array) {
    return array.sort((e1, e2) => Math.abs(e1 % 2) - Math.abs(e2 % 2));
}
console.log(evenOddSort([20, -10,333,1000, 552, 7, -7]));

//task sort.2
function oddEvenSort(array) {
  return array.sort((e1, e2) => Math.abs(e2 % 2) - Math.abs(e1 % 2));
}
console.log(oddEvenSort([20, -10,333,1000, 552, 7, -7]));
//task sort.3

function evenAscOddDesc(array) {
    return array.sort((e1, e2) => {
      if (Math.abs(e1 % 2) - Math.abs(e2 % 2)) {
        return Math.abs(e1 % 2) || -1;
      }
      return e1 % 2 ? e2 - e1 : e1 - e2;
    });
}

console.log(evenAscOddDesc([20, -10,333,1000, 552, 7, -7]));
/*************************************************************************** */
//reduce
//find sum of the numbers in an array
function sum(array) {
    const res = array.reduce(function(res, cur){
        return res + cur;
    } );
    return res;
}
// console.log(`sum([1,2,3,4,5]) returns ${sum([1,2,3,4,5])}`);
// console.log([1, 2, 3, 4].reduce(function (x, y) {
//     console.log(x, y);
//     return x + y;
  
// },5)); //1-function call x = 1, y = 2; 2-function call x = undefined, y = 3; 3-th x = undefined, y = 4
// console.log([[0, 1], [2, 3]].reduce(
//     (acc, cur) => {
//       return acc.concat(cur);
//     },
//     [1, 2]
//   ));
  //1 - acc - [1, 2], cur - [0, 1]
  //2 - acc -[1, 2, 0, 1], cur - [2, 3]
  //HW #15
  //task reduce.1
  function getMin(array) {
    return array.reduce((min, cur) => min < cur ? min : cur);
  }
  console.log(getMin([20, -10,333,1000, 552, 7, -7]));

  //task reduce.2
  function getMax(array) {
    return array.reduce((max, cur) => max > cur ? max : cur);
  }
  console.log(getMax([20, -10,333,1000, 552, 7, -7]));

  //task reduce.3
  function getAverage(array) {
    return array.reduce((sum, cur, index, arr) => (index - arr.length + 1) ? sum + cur : (sum + cur) / arr.length, 0);
  }
  console.log(getAverage([20, -10,333,1000, 552, 7, -7]));

  //task reduce.4
  function getMinMaxAvg(array) {
    return array.reduce((acc, cur, index, arr) => {
      acc[0] = acc[0] < cur ? acc[0] : cur;
      acc[1] = acc[1] > cur ? acc[1] : cur;
      acc[2] += cur;

      if (index == arr.length - 1) {
        acc[2] /= arr.length;
      }
      return acc;
    }, [array[0], array[0], 0]);
  }
  console.log(getMinMaxAvg([20, -10,333,1000, 552, 7, -7]));

  