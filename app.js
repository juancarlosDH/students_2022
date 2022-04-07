const fs = require('fs')
const service = require('./src/services/studentService')
const Student = require('./src/models/student')
const [funcObtener, funcFiltrar] = require('./funcionesDeTareas')

let argumentos = process.argv

switch(argumentos[2]) {
    case 'listar':
        let jsons = service.getStudents()
        console.log(jsons)

        break;
    
    case 'crear':
        // genero el nuevo student
        let stu = new Student(argumentos[3], argumentos[4], argumentos[5]);
        // leer el archivo
        let archivo = fs.readFileSync('./src/database/students.json')
        // parsearlo en js
        let students = JSON.parse(archivo)

        // pusheo al nuevo student
        students.push(stu)

        //convierto a json
        let datos = JSON.stringify(students)

        //guardo el archivo
        fs.writeFileSync('./src/database/students.json', datos)

        console.log('alumno guardado exitosamente')
        break;

    case 'filtrarNombre':
        
        let filtrados = funcFiltrar()

        console.log(filtrados)

        break;

    case undefined: 
        console.log('Atención - Tienes que pasar una acción.')
        break;

    default:
        console.log('No entiendo qué quieres hacer.')

}

