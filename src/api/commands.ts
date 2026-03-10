import type { DeviceCommandRequest } from "../types/device.types";
import { apiClient } from './client';

export const commands = {
    // Включить
    turnOn:(): DeviceCommandRequest => ({
        device_id: "thermo",
        command: "on"
    }),

    // Выключить
    turnOff:(): DeviceCommandRequest => ({
        device_id: "thermo",
        command: "off"
    }),

    // Установить температуру
    setTemperature:(value: number): DeviceCommandRequest => ({
        device_id: "thermo",
        command: "set",
        value: value
    }),

    // Установить температуру с параметрами
    setTemperatureWithParams:(value: number, hysteresis: number): DeviceCommandRequest => ({
        device_id: "thermo",
        command: "set",
        value: value,
        parameters: {
            hysteresis: hysteresis,
            mode: "heat"
        }
    }),

    // Авто режим
    setAuto:(): DeviceCommandRequest => ({
        device_id: "thermo",
        command: "auto"
    }),

    // Ручной режим
    setManual:(): DeviceCommandRequest => ({
        device_id: "thermo",
        command: "manual"
    }),

    // Установить все параметры
    setAll:(targetTemp: number, min: number, max: number, hyst: number): DeviceCommandRequest => ({
        device_id: "thermo",
        command: "set",
        value: targetTemp,
        parameters: {
            hysteresis: hyst,
            min_temp: min,
            max_temp: max,
            mode: "heat"
        }
    })
};

export const sendCommand = async(command: DeviceCommandRequest) => {
    try{
        const response = await apiClient.post('/api/device/control', command);
        return response;
    } catch(error){
        console.error('Cant send command | Error:', error);
        throw error;
    }    
};