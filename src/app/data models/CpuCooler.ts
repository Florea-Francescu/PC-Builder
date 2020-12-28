import { Product } from "./Product";

export interface CpuCooler extends Product {
    fanSize: string;
    height: string;
    sockets: string[];
}