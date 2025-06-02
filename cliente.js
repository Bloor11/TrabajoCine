"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
class Cliente {
    constructor(nombre, pelicula, sala, asiento) {
        this.nombre = nombre;
        this.pelicula = pelicula;
        this.sala = sala;
        this.asiento = asiento;
        this.comestibles = [];
    }
    agregarComestible(comestible) {
        this.comestibles.push(comestible);
    }
    mostrarDetalle() {
        console.log("** Detalle de la compra **");
        console.log("Cliente: " + this.nombre);
        console.log("Película: " + this.pelicula.titulo);
        console.log("Sala: " + this.sala.nombre);
        console.log("Asiento: " + this.asiento.numero);
        console.log("Aperitivos gratuitos:");
        for (let aperitivo of this.sala.aperitivos) {
            console.log("-" + aperitivo.nombre);
        }
        console.log("Comestibles seleccionados:");
        for (let comestible of this.comestibles) {
            console.log("-" + comestible.nombre);
        }
    }
}
exports.Cliente = Cliente;
