import { Product } from "./Product";

export interface Storage extends Product {
    type: string;
    capacity: string;
    maxRead: string;
    maxWrite: string;
    formFactor: string;
}