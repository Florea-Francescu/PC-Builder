import { Price } from "./Price";

export interface Product {
    id: string;
    name: string;
    prices: Price[];
}