import { Sala } from "./sala";

export class Pelicula {
    public titulo: string;
    public director: string;
    public año: number;
    public genero: string;
    public salas: Sala[];

    constructor(titulo: string, director: string, año: number, genero: string) {
        this.titulo = titulo;
        this.director = director;
        this.año = año;
        this.genero = genero;
        this.salas = [];
    }

    public agregarSala(sala: Sala): void {
        this.salas.push(sala);
    }
}
