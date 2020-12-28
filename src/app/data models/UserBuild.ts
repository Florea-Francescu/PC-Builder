import { Build } from "./Build";

export interface UserBuild{
    uid: string;
    build: Build;
    date: string;
    buildid: string;
}