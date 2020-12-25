import { Product } from "./Product";

export interface CPU extends Product {
    socket: string;
    cores: number;
    threads: number;
    frequency: string;
}