let mostrar = (ar) => {
    console.log(`**************IVA****************`);
    console.log(ar * 1.21);
    console.log(`*********************************`);
    console.log(``);
}

let callback = (fn) => {
    for (let idx = 0; idx < 10; idx++) {
        fn(idx);
    }   
}

let porCadaUno = (arr,fn) => {
    for (let idx = 0; idx < arr.length; idx++) {
        fn(arr[idx]);
    }   
}

let xs = [2,3,4,9]

callback(z => console.log(z))
porCadaUno(xs, z => mostrar(z))

console.log(``);
console.log(``);
xs.forEach(z => {
    mostrar(z)
});