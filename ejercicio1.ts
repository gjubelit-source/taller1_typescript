// ejercicio1
//Declara una variable que pueda almacenar número o string y crea una función que valide si 
// el valor es número; si lo es, multiplícalo por 2, si es texto, muéstralo en mayúsculas.

let calculo: number | string;

function validar(valor:number|string):number|string {
    if (typeof valor === "number") {
        return valor * 2;
    } else {
        return valor.toUpperCase();
}
}

calculo = 5;
console.log(validar(calculo)); 
calculo = "Jubelit esto es un texto";
console.log(validar(calculo));
