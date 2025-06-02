import { Asiento } from "./asiento";
import { Aperitivo } from "./aperitivo";

export class Sala {
    public nombre: string;
    public capacidad: number;
    public aperitivos: Aperitivo[];
    public asientos: Asiento[];

    constructor(nombre: string, capacidad: number) {
        this.nombre = nombre;
        this.capacidad = capacidad;
        this.aperitivos = [];
        this.asientos = [];

        for (let i = 1; i <= capacidad; i++) {
            this.asientos.push(new Asiento(i));
        }
    }

    public agregarAperitivo(aperitivo: Aperitivo): void {
        this.aperitivos.push(aperitivo);
    }

    public obtenerAsiento(): Asiento | null {
        return this.asientos.find(asiento => !asiento.ocupado) || null;
    }
}

