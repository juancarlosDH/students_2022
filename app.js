const fs = require('fs')
const Student = require('./src/models/student')

const arguments = process.argv

if (arguments.length == 2) {
    console.log('debes introducir un comando')
} else {

    switch (arguments[2]) {
        case 'listar' :
            console.log('aqui vamos a listar')
            break;
        default : 
            console.log ('comando desconocido');
            break;
    }
}

/*
// new student to save
let stu = new Student('aa', 'bb', 'aa@bb.com')

// read database 'json'
let fStu = fs.readFileSync('./src/database/students.json', { encoding: 'utf8'})
let stus = []
if (fStu.length != 0) {
    stus = JSON.parse(fStu)
}

// add to array
stus.push(stu)

// transform to json
const stusJ = JSON.stringify(stus)

// write database 'json'
fs.writeFileSync('./src/database/students.json', stusJ)

*/
