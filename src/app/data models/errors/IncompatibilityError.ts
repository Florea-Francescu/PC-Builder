import { BuildError } from "./BuildError";

export class IncompatibilityError implements BuildError {
    message = "Incompatible Products: ";
    type = [];

    constructor(prod1: string, prod2: string, message: string) {
        this.message += prod1 + ", " + prod2 + " - " + message;

        this.type.push(prod1);
        this.type.push(prod2);
    }
}