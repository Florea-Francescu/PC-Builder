import { Product } from "./Product";

export interface Case extends Product {
    type: string;
    dimenstions: string;
    expansionSlots: number;
    motherboards: string[];
}