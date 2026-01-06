import {a} from './importExport.js';
import stdName from './importExport.js';

console.log(a)
for (let index = 0; index < stdName.length; index++) {
    const element = stdName[index];
    console.log(element)
}

// const stdData = {
//     name: "John Doe",
//     age: 21,
//     course: "Computer Science"
// }

// const jsonData = JSON.stringify(stdData);
// console.log(jsonData)
// console.log(stdName)