const fs = require('fs')
const path = require('path');

module.exports = {
    fileName: path.resolve(__dirname, "../database/students.json"),

    getStudents: function () {
        let archivo = fs.readFileSync(this.fileName)

        let jsons = JSON.parse(archivo)

        return jsons;
    },

    saveStudent: function (stu) {
        // read database 'json'
        let fStu = fs.readFileSync(this.fileName)
        let stus = []
        if (fStu.length != 0) {
            stus = JSON.parse(fStu)
        }
        // add to array
        stus.push(stu)
        // transform to json
        const stusJ = JSON.stringify(stus)
        // write database 'json'
        fs.writeFileSync(this.fileName, stusJ)

        return true
    },
}