import { NumEmergencia } from "./num_emergencia";

export interface Pais {
    pais: string;
    codigo:string;
    bandera: string;
    numeros: Array<NumEmergencia>;
}
