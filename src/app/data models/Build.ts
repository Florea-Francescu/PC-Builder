import { Case } from "./Case";
import { CPU } from "./CPU";
import { GPU } from "./GPU";
import { Memory } from "./Memory";
import { Motherboard } from "./Motherboard";
import { PSU } from "./PSU";
import { Storage } from "./Storage";

export interface Build {
    cpu: CPU;
    motherboard: Motherboard;
    memory: Memory[];
    storage: Storage[];
    gpu: GPU;
    _case: Case;
    psu: PSU;
}