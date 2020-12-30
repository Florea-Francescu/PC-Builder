import { Product } from "./Product";

export interface Case extends Product {
    type: string;
    dimensions: string;
    expansionSlots: number;
    motherboards: string[];
}