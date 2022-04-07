const fs = require('fs')

function obtenerTareas(){
    // leer el archivo
    let archivo = fs.readFileSync('./src/database/students.json')
    // parsearlo en js
    let students = JSON.parse(archivo)
    return students
}

function filtrarNombre() {
    // leer el archivo
    let archivo = fs.readFileSync('./src/database/students.json')
    // parsearlo en js
    let students = JSON.parse(archivo)

    // filter del array
    let filtrados = students.filter(function(stu) {
        return stu.firstName == 'juan' 
    })
    return filtrados
}

module.exports = [obtenerTareas, filtrarNombre]