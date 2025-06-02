import { Cliente } from "./cliente";
import { Pelicula } from "./pelicula";
import { Sala } from "./sala";
import { Asiento } from "./asiento";
import { Comestible } from "./comestible";

export class Compra {
    public cliente: Cliente;
    public pelicula: Pelicula;
    public sala: Sala;
    public asiento: Asiento;
    public comestibles: Comestible[];

    constructor(cliente: Cliente, pelicula: Pelicula, sala: Sala, asiento: Asiento) {
        this.cliente = cliente;
        this.pelicula = pelicula;
        this.sala = sala;
        this.asiento = asiento;
        this.comestibles = [];
        // Actualiza cliente
        this.cliente.asiento = asiento;
        this.cliente.pelicula = pelicula;
        this.cliente.sala = sala;
    }

    public agregarComestible(comestible: Comestible): void {
        this.comestibles.push(comestible);
        this.cliente.agregarComestible(comestible);
    }

    public mostrarDetalle(): void {
        console.log("** Detalle de la compra **");
        console.log("Cliente: " + this.cliente.nombre);
        console.log("Película: " + this.pelicula.titulo);
        console.log("Sala: " + this.sala.nombre);
        console.log("Asiento: " + this.asiento.numero);
        console.log("Aperitivos gratuitos:");
        for (let aperitivo of this.sala.aperitivos) {
            console.log("- " + aperitivo.nombre);
        }
        console.log("Comestibles seleccionados:");
        for (let comestible of this.comestibles) {
            console.log("- " + comestible.nombre);
        }
    }
}
