import { BuildError } from "./BuildError";

export class IncompleteBuildError implements BuildError {
    message =  "Missing Components: ";
    type = [];

    constructor(missingProducts: string[]) {
        this.message += missingProducts;

        for(let missing of missingProducts) {
            this.type.push(missing);
        }
    }
}