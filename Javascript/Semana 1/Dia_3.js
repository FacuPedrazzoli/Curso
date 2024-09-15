
//For canonico (El ejemplo mas normal de todos) ningun elemento de los 3 es obligatorio.

for (let x = 1 ; x <= 10 ; x ++){
    if (x % 2 === 0){                           //Esta es la forma de usar un if.
        console.log(`El ${x} es par.`)
    } else {                                    //Esta es la forma de usar un else.
        console.log(`El ${x} es inpar.`)
    }
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

let x = juego("piedra","tijera")
let resultado = ["Empate","Gana Facu","Gana Santi"]

console.log(resultado[x])