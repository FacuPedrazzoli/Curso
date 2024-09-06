
//En esta tarea tenos que definir una funcion de la conjetura collatz
function collatz(n) {
    while (n !== 1){
        if (n % 2 === 0){
            n = n / 2
        } else {
            n = n * 3 + 1
        }
    }  
    return n
}

collatz(6)

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

