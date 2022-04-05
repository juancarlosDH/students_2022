const fs = require('fs')
const service = require('./src/services/studentService')
const Student = require('./src/models/student')

let argumentos = process.argv

switch(argumentos[2]) {
    case 'listar':
        let jsons = service.getStudents()
        console.log(jsons)

        break;
    
    case 'guardar':
        let stu = Student('nuevo', 'ape', 'ap@com.com');
        service.saveStudent(stu);
        break;

    case undefined: 
        console.log('Atención - Tienes que pasar una acción.')
        break;

    default:
        console.log('No entiendo qué quieres hacer.')

}

