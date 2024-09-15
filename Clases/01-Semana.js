//Formato no recomendable para realizar el calculo

const ene = 100 * 1.03
const feb = ene * 1.04
const mar = feb * 1.03
const trimestre = mar - 100

console.log(trimestre)
console.log("Hola como estas??")

// Estos con los tipos de datos simples

let x1 = 3
let x2 = "Hola"
let x3 = []
let x4 = {}
let x5 = null

//Formato mas recomendable de como relizar esta cuenta

let indices = [1.03, 1.04, 1.03]    //Primero necesitamos definir con un let o un const una variable que contenga un array
let acumulador = 100                //Luego necesitamos otra variable con un acumulador para poder realizar el calculo de los indices del array
                                    //en este caso para calcular el indice de inflacion de el primer trimestre del año ingresamos como acumulador el 100

for ( let z of indices){            //Cuando ya tenemos definidos los indices y el calculador necesitamos que un for lea cada indice y saque el porcentaje
    acumulador = acumulador * z     //Despues necesitamos que el bucle sume los indices al acumulador
}
acumulador = acumulador - 100       //Ya teniendo el resultado del bucle le tenemos que restar el acumulador inicial para tener el porcentaje real
acumulador = Math.round(acumulador * 100) / 100 //Ahora necesitamos redondear el resultado para que tenga 2 decimales y que sea mas legible
//acumulador = parseFloat((acumulador.toFixed(2))) (OTRO METODO PARA REALIZAR EL REDONDEO.)

//Y cuando ya tenemos el resultado final con solo dos decimales procedemos a mostrar el resultado con console,log()
console.log("La inflacion acumulada del primer trimestre es " + acumulador + "%")

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

let x = juego("piedra","tijera")
let resultado = ["Empate","Gana Facu","Gana Santi"]

console.log(resultado[x])

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//En esta tarea tenos que definir una funcion de la conjetura collatz
function collatz(n) {
    while (n !== 1){
        if (n % 2 === 0){
            n = n / 2
        } else {
            n = n * 3 + 1
        }
    }   return n
}

console.log(collatz(6))

/*EXPLICACION MAS BREVE DE LA FUNCION COLLATZ
Primeros definimos la funcion y que te pida un parametro en este caso tiene que ser un numero, luego necesitamos un bucle el cual es un while que siga corriendo
hasta que n que le ingresamos llegue a 1.
Despues necesitamos un if y un else, con el if identificamos si n es un numero par, si es el caso se divide n por 2, despues vuelve a ingresar al bucle y si
n sigue siendo par se repite el proceso, pero si es inpar ingresa en el else por lo tanto se multiplica n por 3 y se le suma 1, y asi hasta que n sea 1
por lo tanto el while ya va a dejar de tener su condicion verdadera y deja de funcionar.
*/

/* EXPLICACION DE LA FUNCION COLLATZ
Primero necesitamos definicar una funcion yo en este caso como la consigna era la conjetura Collatz llame a la funcion "Collatz" a esta funcion le tenemos que
dar un parametro, osea el numero que queramos ingresar a la conjetura, para que esta funcion y la conjetura se lleven a cabo de la forma correcta necesitamos
que esta funcion se repita hasta que el resultado de la conjetura sea 1 por lo tanto necesitamos un condicionante o un bucle en este caso yo utilice un while.

Cuando definimos que el bucle funcione hasta que n sea igual a 1 empieza la conjetura en si, tenemos que usar un if y un else.

El if lo utilice para que identifique a los numeros pares ingrando a este si es que si n por resto de 2 es igual a 0 significa que es par, por lo tanto n 
se divide por 2 y imprime en console el resultado.

Si no ingreso al if ingresa al else por lo tanto el numero es inpar si este es inpar se multiplica por 3 y se le suma 1 e imprime el resultado en la consola.
Y este bucle se va a repetir hasta que el resultado sea igual a 1, entonces y solo entonces el while va a dejar de funcionar y termina mostrando el resultado
que siempre tendria que ser 1.
*/

function prueba(st){
    while (st !== 1 , st --){
        let x = collatz(st)
        console.log(`El numero que se ingreso fue el ${st} y termino en ${x}`)
    }
}