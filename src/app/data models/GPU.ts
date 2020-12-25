import { Product } from "./Product";

export interface GPU extends Product {
    interface: string;
    series: string;
    clock: string;
    memoryType: string;
    memorySize: string;
}