const stdData ={
    name:'amir shah',
    age:24,
    course:'React js'
}


const jsonData = JSON.stringify(stdData);
console.log(jsonData);
//how to loop through json data 
for(const key in stdData){
    console.log(`${key} : ${stdData[key]}`)
}