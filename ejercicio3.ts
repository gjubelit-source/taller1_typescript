//3. Define una interfaz Persona con nombre, edad y un método que retorne un mensaje personalizado. 
// Luego crea un objeto que la implemente.
interface Personita {
    nombre:string;
    edad:number;
    comidaFavorita:string;
    saludar():string;
}

let persona1:Personita= {
    nombre: "Grissel",
    edad:15,
    comidaFavorita:"Frutas",
    saludar() {
        return `Hola ${this.nombre} tienes ${this.edad} años este es un ejercicio,y tu comida favorita son las :${this.comidaFavorita}`;
    }};

console.log(persona1.saludar());