

// -------------------------------
// Write a functinon groupBy(array, .......), which has 
// some callback parameters and performs the following actions
// 1) breaks the array elements into groups by specified criteria
// 2) for each group performs specified reduction operation
// The same function would be able to show the following information 
// when called with different callback parameters:
// Example 1: Result: { Rehovot: 3, 'Tel-Aviv': 1, Lod: 2 }
//            would be achieved by call like :
//                    groupBy(array, elt=>elt.addres.city, (res, elt)=>res+1)
// Example 2: { 
//    Rehovot: [ 'Vasya', 'Sara', 'Olya' ],
//    'Tel-Aviv': [ 'Tolya' ],
//    Lod: [ 'Sara', 'Tolya' ]
// }
// Example 3: { 
//    Vasya:["Rehovot"], 
//    Olya: ["Rehovot"], 
//    Tolya: ["Tel-Aviv", "Lod"], 
//    Sara: ["Lod", "Rehovot"] 
// }
//
// Your tasks are:
// - Decide which parameters must have such function
// - Implement the function
// - Implement the calls of this function implementing results of Example 1 and Example 2
// ------------------------------------
function createAddress (city, street) {
    return {city, street}
}
function createPerson(id, name, address) {
    return {id, name, address}
}
const persons = [
    createPerson(123, "Vasya", createAddress("Rehovot", "Parshani")),
	createPerson(129, "Sara",  createAddress("Rehovot", "Sokolov")),
    createPerson(124, "Olya",  createAddress("Rehovot", "Pr.Plaut")),
    createPerson(125, "Tolya", createAddress("Tel-Aviv", "Dizengoff")),
    createPerson(126, "Sara",  createAddress("Lod", "Sokolov")),
	createPerson(128, "Tolya", createAddress("Lod", "Dizengoff"))
] 

function groupBy(array, mapper, reducer) {
    return array.map(mapper).reduce(reducer, {});
}



function groupBy1(array, mapper, reducer) {
    return array.reduce((acc, cur) => 
        (acc[mapper(cur)] = reducer(acc[mapper(cur)], cur), acc), 
    {});
}


console.log(groupBy1(persons, e => e.address.city, (res, elt) => (res || 0) + 1));
console.log(groupBy1(persons, e => e.address.city, (res, elt) => {
    res = res || [],
    res.push(elt.name);
    return res;
}));
console.log(groupBy1(persons, e => e.name, (res, elt) => {
    res = res || [],
    res.push(elt.address.city);
    return res;
}));

