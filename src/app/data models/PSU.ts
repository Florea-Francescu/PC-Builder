import { Product } from "./Product";

export interface PSU extends Product {
    power: string;
    efficiency: string;
    certification: string;
    dimensions: string;
}