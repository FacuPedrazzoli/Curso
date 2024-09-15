let collatz = (n) => {
    let valores = []         // Almacena el valor
    let counts = []          // Almacena la cantidad de iteraciones
    let count = 0            // Contador para las iteraciones

    while (n !== 1) {
        valores.push(n)      // Agrega el valor actual de n a la secuencia
        count++              // Incrementa el contador de iteraciones
        counts.push(count)   // Agrega el valor del contador al array counts

        if (n % 2 === 0) {
            n = n / 2
        } else {
            n = n * 3 + 1
        }
    }
 
    valores.push(1)          // Agrega el 1 al final de la secuencia
    count++                  // Contabiliza la última iteración
    counts.push(count)       // Agrega la última iteración al array counts

    return {
        valor : valores,     // Devuelve la secuencia de números
        iteraciones : counts // Devuelve el array con el número de iteraciones
    }
}

console.log(collatz(6))