//4. Crea un arreglo de objetos usando una interfaz Producto (nombre, precio)
//  y muestra solo los productos con precio mayor a 50.
interface Repuestos {
    nombre: string;
    precio: number;
}

let  repuestos: Repuestos[] = [
    { nombre: "Anillos", precio: 100000 },
    { nombre: "Retenes de barras", precio:35000},
    { nombre: "Eje de cambios ", precio: 260000 },
    { nombre: "Palanca de cambios", precio: 90000 }
];
let  productos = repuestos.filter(repuesto => repuesto.precio > 50000);

console.log(productos);