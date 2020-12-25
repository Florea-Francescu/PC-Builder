import { Product } from "./Product";

export interface Memory extends Product {
    type: string;
    capacity: string;
    frequency: string;
    latency: string;
    kit: string;
}