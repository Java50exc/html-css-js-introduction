// const ar = [] ;
// const ar1 = [1,2,3,4,]
// ar.push(...ar1);
// ar.push('abc');
function getRandomNumber(min, max) {
   
    return min + Math.trunc(Math.random() * (max - min + 1));
}

function getRandomMatrix(rows, columns, min, max){
    const matrix = [];
    for(let i = 0; i < rows; i++) {
        matrix.push([]);
        for (let j = 0; j < columns; j++) {
            matrix[i].push(getRandomNumber(min, max))
        }
    }
    return matrix;
}

function printMatrix(matrix) {
    console.log('');

    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i]);
    }
    console.log('');
}
//const matrix = getRandomMatrix(3, 4, 0, 1);
const ar10 = [1,2,3,4,5];
const str =ar10.join('_');

//HTML
//<ul class="list_class">
//  <li class="item_class">
//     <div class="white"> </div>
//  </li>
// .............
//<li class="item_class">
//     <div class="black"> </div>
//  </li>
//</ul>
function getHtmlUl(array) {
    let htmlString = '<ul class="list_class">\n';

    for (let i = 0; i < array.length; i++) {
        htmlString += `<li class="item_class"><div class="${array[i] == 0 ? 'white' : 'black'}"> </div></li>\n`
    }
    return htmlString + '</ul>';
}


const strClass = getRandomNumber(0, 1) === 0 ? 'white' : 'black';
const str1 = "hello world";
const str2 = 'hello ' + '"world"';
const str3 = `class="${strClass}"`;


function matrixTransp(matrix) {
    const transpMatrix = [];

    for (let i = 0; i < matrix[0].length; i++) {
        transpMatrix.push([]);

        for (let j = 0; j < matrix.length; j++) {
            transpMatrix[i].push(matrix[j][i]);
        }
    }
    return transpMatrix;
}


matrix = getRandomMatrix(3, 4, 5, 6);


console.log(getHtmlUl([1, 0, 0, 1]));

printMatrix(matrix);
printMatrix(matrixTransp(matrix));
