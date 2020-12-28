import { Detail } from "./Detail";
import { Product } from "./Product";

export interface Other extends Product {
    type: string;
    details: Detail[];
}