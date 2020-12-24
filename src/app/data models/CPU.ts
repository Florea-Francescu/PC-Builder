import { Product } from "./Product";

export interface CPU extends Product {
    name: string;
    socket: string;
    cores: number;
    threads: number;
    frequency: string;
}