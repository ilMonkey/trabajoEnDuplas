const fs = require("fs");

let tareasJson = {
    nombre: "tareas.json",
    leer: function (){
        let datosJson = fs.readFileSync(this.nombre, "utf-8");
        let datosJs JSON.parse(datosJson);
        return datosJs
        
    }
}

module.exports = tareasJson