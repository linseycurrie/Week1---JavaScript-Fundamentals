// var secretsFunction = function() {
//     var pinCode = [0, 0, 0, 0];
//     console.log('pinCode inside function', pinCode);
// }
// secretsFunction()
// // console.log('PinCode outside function', pinCode);

// name = "Jill";
// var secretsFunction = function() {
//     var pinCode = [0, 0, 0, 0];
//     console.log('name inside function', name);
// }
// secretsFunction()
// console.log('name outside function', name);

// var filterNamesByFirstLetter = function(names, letter) {
//     let filteredNames = [];
//     for (let name of names) {
//         if (name[0] === letter) {
//             filteredNames.push(name)
//         }
//     }
//     return filteredNames;
// }

// var students =  ["Alice", "Bob", "Alyssia", "Artem", "Babs"];
// var filteredStudents = filterNamesByFirstLetter(students, "A");

// console.log("filtered students:", filteredStudents);

// let isItFive = function(num){
//     let result;
//     if (num === 5) {
//         result = true;
//     } else {
//         result = false;
//     }
//     return result;
// }

// console.log(isItFive(5));

// console.log(isItFive(4));

// const calculateEnergy = function(mass){
//     const speedOfLight = 299792458;
//     return mass * speedOfLight **2;
// }

// console.log("My Energy:", calculateEnergy(83));

// const song = {
//     title: "Raspberry Beret",
//     artist: "Prince"
// }

// console.log("Song:",song);
// song.title = "When doves cry";
// console.log("Song after change:",song);

const students = ["Alice", "Bob","Alyssa", "Babs"];

students.push("Brian");

console.log("Students:", students);
