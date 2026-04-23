//2. Crea una función que reciba un arreglo de números y retorne la suma total de sus elementos.
function sumar(arreglo: number[]): number {
    let suma:number=0;

    for (let i=0; i<arreglo.length; i++) {
        suma+=arreglo[i];
    }
    return suma;
}

console.log(sumar([1,11]));