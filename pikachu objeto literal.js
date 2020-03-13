var pokemon = {
    nombre: "Pikachu",
    atacar: function () {
            console.log("Toma rayito");        
    }, 
    saludar: function () {
        console.log("Hola, soy " + this.nombre);
    },
}

var pokemonEvolucion = {
    nombre: "Raichu",
    atacar: function () {
            console.log("Toma rayito SUPER");        
    }, 
    saludar: function () {
        console.log("Hola, soy " + this.nombre);
    },
}

pokemon.atacar();