import { apiClient } from './client';
import type { DeviceData } from '../types/device.types';

export interface ControlData {
    relay?: boolean;
    resetAlarm?: boolean;
}

export interface SettingsData {
    threshold?: number;
    hysteresis?: number;
    alarmMin?: number;
    alarmMax?: number;
}



export const DeviceApi = {
    // GET запросы
    getData: () =>
        apiClient.get<DeviceData>('/data'),

    getTemperature: () =>
        apiClient.get<{ temperature: number }>('/data/temperature'),

    getThreshold: () =>
        apiClient.get<{ threshold: number }>('/settings/threshold'),

    getRelayState: () => 
        apiClient.get<{ relayState: boolean }>('/control/relay'),

    // POST запросы
    setRelay: (state: boolean) =>
        apiClient.post('/control/relay', { relay: state }),

    setThreshold: (value: number) =>
        apiClient.post('/settings/threshold', { threshold: value }),

    setHysteresis: (value: number) =>
        apiClient.post('/settings/hysteresis', { hysteresis: value }),

    setAlarmLimits: (min: number, max: number) =>
        apiClient.post('/settings/alarm', { min, max }),

    resetAlarm: () =>
        apiClient.post('/control/alarm/reset', {})
};