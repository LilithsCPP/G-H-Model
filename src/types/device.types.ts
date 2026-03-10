export type DeviceCommands = 'on' | 'off' | 'set' | 'auto' | 'manual';
// пока что только температура
export type DeviceId = 'thermo';


export interface DeviceCommandRequest {
    device_id: DeviceId;
    command: DeviceCommands;
    value?: number | null;
    parameters?: Record<string, any>;
}
// для темпы
export interface ThermoSettings {
    target_temp?: number;
    hysteresis?: number;
    min_temp?: number;
    max_temp?: number;
    mode?: "heat" | "cool";
}

export interface DeviceResponse {
    device_id: DeviceId | string;
    command: DeviceCommands | string;
    status: "success" | "error";
    message?: string;
    current_value?: number;
    timestamp: string;
}

export interface DeviceState {
    device_id: "thermo";
    current_temp: number;
    target_temp: number;
    mode: "auto" | "manual";
    relay_state: boolean;
    alarm_state: boolean;
    last_command?: DeviceCommands;
    settings: ThermoSettings;
}

export interface DeviceData {
    temperature: number;
    humidity: number;
    threshold: number;
    relayState: boolean;
    alarmState: boolean;
}

// export interface SettingsData {
//     threshold?: number;
//     hysteresis?: number;
//     alarmMin?: number;
//     alarmMax?: number;
// }

// export interface ControlData {
//     relay?: boolean;
//     resetAlarm?: boolean;
// }