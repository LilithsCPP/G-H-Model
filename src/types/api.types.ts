import type { DeviceCommands, ThermoSettings, DeviceId } from "../types/device.types";

export interface ControlDeviceRequest {
    device_id: DeviceId;
    command: DeviceCommands;
    value?: number;
    parameters?: ThermoSettings;
}

export interface DeviceStateResponse {
    device_id: DeviceId;
    temperature: number;
    target_temperature: number;
    humidity: number;
    relay_on: boolean;
    alarm: boolean;
    mode: "auto" | "manual";
    settings: ThermoSettings;
}

export interface UpdateSettingsRequest {
    device_id: "thermo";
    settings: ThermoSettings;
}