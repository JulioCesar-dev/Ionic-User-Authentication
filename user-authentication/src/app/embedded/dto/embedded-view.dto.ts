export interface EmbeddedViewDTO {
    id: number;
    description: string;
    firmware: string;
    embeddedIp: string;
    gatewayIp: string;
    mac: string;
    mask: string;
    ssid: string;
    status: string;
    enviromentId: number;
    enviromentName: string;
}

export enum ComunicationType {
    CLIENT_STATION,
    ROUTER
}