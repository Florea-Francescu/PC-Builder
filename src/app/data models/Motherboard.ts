import { Product } from "./Product";

export interface Motherboard extends Product {
    format: string;
    socket: string;
    chipset: string;
    memoryType: string;
    maxMemory: string;
    slots: number;
}