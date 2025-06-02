import { Pelicula } from "./pelicula";
import { Sala } from "./sala";
import { Aperitivo } from "./aperitivo";
import { Cliente } from "./cliente";
import { Comestible } from "./comestible";
import { Compra } from "./compra";

const pelicula1 = new Pelicula("John Wick 3", "Chad Stahelski", 2019, "Acción");
const pelicula2 = new Pelicula("Avengers: Endgame", "Anthony y Joe Russo", 2019, "Ciencia Ficción");
const pelicula3 = new Pelicula("Aladdin", "Bong Joon-ho", 2019, "Drama");
const pelicula4 = new Pelicula("Lilo y Stich", "Dean Camp", 2025, "Ciencia Ficcion");

const sala1 = new Sala("Sala A", 40);
const sala2 = new Sala("Sala B", 30);
const sala3 = new Sala("Sala C", 40);
const sala4 = new Sala("Sala D", 30);


sala1.agregarAperitivo(new Aperitivo("Soda"));
pelicula1.agregarSala(sala1);

const asientoDisponible = sala1.obtenerAsiento();
if (asientoDisponible) {
    asientoDisponible.ocupado = true;
    const cliente = new Cliente("Miguel Bazurto", pelicula1, sala1, asientoDisponible);
    const compra = new Compra(cliente, pelicula1, sala1, asientoDisponible);

    compra.agregarComestible(new Comestible("Canguil"));
    compra.agregarComestible(new Comestible("Hot-dog"));
    compra.agregarComestible(new Comestible("Bebida"));

    compra.mostrarDetalle();
} else {
    console.log("No hay asientos disponibles en la sala.");
}
