import { Price } from "./Price";

export interface Product {
    id: number;
    name: string;
    prices: Price[];
}