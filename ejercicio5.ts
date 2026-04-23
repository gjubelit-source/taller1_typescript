//5. Implementa una función que reciba un objeto de tipo Empleado (con nombre y salario) 
// y retorne un mensaje indicando si su salario es alto o bajo.

interface Empleado {
    nombre: string;
    salario: number;
}

function salario(empleado:Empleado):string {
    if (empleado.salario>10000) {
        return`Señor(a) ${empleado.nombre} su salario es alto`;
    } else {
        return`señor(a)  ${empleado.nombre} su salario es bajo`;
    }}
let empleado1: Empleado = {
    nombre: "Ana",
    salario: 25000
};

console.log(salario(empleado1));
let empleado2: Empleado = {
    nombre: "Pepito Bastidas",
    salario: 7000
};
console.log(salario(empleado2));
