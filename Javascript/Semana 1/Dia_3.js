
//For canonico (El ejemplo mas nofmral de todos) ningun elemento de los 3 es obligatorio.

for (let x = 1 ; x <= 10 ; x ++){
    if (x % 2 === 0){                           //Esta es la forma de usar un if.
        console.log(`El ${x} es par.`)
    } else {                                    //Esta es la forma de usar un else.
        console.log(`El ${x} es inpar.`)
    }
}

function ver(st) {                              //Asi definimos una funcion
    console.log(st)
}

function suma(x,y) {                            //Definimos una funcion que necesita 2 parametros
    return x + y
}

function verHTML(st) {                          //Definimos una funcion con algo de HTML
    console.log("<hr />")
    console.log(st)
    console.log("<hr />")
    console.log("Esta es una prueba de como se escribe el hr")
    console.log("<hr>")
}

function juego(jugador_1,jugador_2) {           //Definimos una funcion que es el juego de piedra, papel o tijera
    if (jugador_1 === jugador_2) {
        return 0
    } else if ((jugador_1 === "tijera") && (jugador_2 === "piedra")) {
        return 2
    } else if ((jugador_1 === "piedra") && (jugador_2 === "papel")) {
        return 2
    } else if ((jugador_1 === "papel") && (jugador_2 === "tijera")) {
        return 2
    } else if ((jugador_1 === "piedra") && (jugador_2 === "tijera")) {
        return 1
    } else if ((jugador_1 === "papel") && (jugador_2 === "piedra")) {
        return 1
    } else if ((jugador_1 === "tijera") && (jugador_2 === "papel")) {
        return 1
    } else {
        console.error("Diste un dato erroneo.");
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////////
console.log("\n")

ver(suma(20,8))                                 //Aca mostramos la funcion suma() con la funcion ver()
//verHTML("!Hola mundo¡")
console.log("\n")

let x = juego("piedra","tijera")
let resultado = ["Empate","Gana Facu","Gana Santi"]

console.log(resultado[x])