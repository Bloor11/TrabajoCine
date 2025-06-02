export class Asiento {
    public numero: number;
    public ocupado: boolean;

    constructor(numero: number) {
        this.numero = numero;
        this.ocupado = false;
    }
}