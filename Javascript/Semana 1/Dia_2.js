
//Formato no recomendable para realizar el calculo

const ene = 100 * 1.03
const feb = ene * 1.04
const mar = feb * 1.03

const trimestre = mar - 100

console.log(trimestre)
console.log("Hola como estas??")

// Estos con los tipos de datos simples

//      x1 = 3
//      x2 = "Hola"
//      x3 = []
//      x4 = {}
//      x5 = null

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