import { Block } from "src/app/block/model/block.model";

export class Enviroment {
    id: number;
    name: string;
    unit: string;
    block: string;
    type: EnviromentType;
    capacity: number;
    amountOfComputers: number;
    cameraIp: string;
}

export enum EnviromentType {
    BEHAVIORAL,
    LABORATORY,
    AUDITORIUM,
    AMPHITHEATER,
    ADMINISTRATIVE
}