export class Embedded {
    id: number;
    description: string;
    status: string;
    firmware: string;
    ip: string;
    mac: string;
    gatewayIp: string;
    mqttIp: string;
    mqttPort: number;
    mqttTopics: string[];
}

export enum ComunicationType {
    CLIENT_STATION,
    ROUTER
}