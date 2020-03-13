const fs = require("fs");
let datosEnJson = fs.readFileSync("tareas.json", "utf-8");  
let datosEnJs = JSON.parse(datosEnJson);



module.exports = datosEnJs;
