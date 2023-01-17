function createAddress (city, street) {
    return {city, street}
}
function createPerson(id, name, address) {
    return {id, name, address}
}
const persons = [
    createPerson(123, "Vasya", createAddress("Rehovot", "Parshani")),
    createPerson(124, "Olya",  createAddress("Rehovot", "Pr.Plaut")),
    createPerson(125, "Tolya", createAddress("Tel-Aviv", "Dizengoff")),
    createPerson(126, "Sara",  createAddress("Lod", "Sokolov"))
] 

//=======================================
// 1 ) Calculate IN ONE LINE OF CODE the name of Person living in Rehovot and having maximal value of 'id'
//     The expected result: Olya

//=======================================
// 2*) Build IN ONE LINE OF CODE the statistics of persons amount per city. 
//     The expected result is object: {Rehovot:2, 'Tel-Aviv':1,Lod:1}

function getRehovotPerson(persons) {
    return persons.reduce((acc, cur) => cur.id > acc.id && cur.address.city == 'Rehovot' ? cur : acc, 
        {id: -Infinity, name: ""}).name;
}
console.log(getRehovotPerson(persons));

function getStatistics(persons) {
    return persons.reduce((acc, cur) => {
        acc[cur.address.city] ? acc[cur.address.city]++ : acc[cur.address.city] = 1;
        return acc;
    }, {});
}
console.log(getStatistics(persons));