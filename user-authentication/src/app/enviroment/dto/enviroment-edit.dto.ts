import { EnviromentType } from "./enviroment-type.dto";

export class EnviromentEditDTO {
    id: number;
    capacity: number;
    description: string;
    cameraIp: string;
    name: string;
    type: EnviromentType;
    blockId: number;
    blockName: string;
}