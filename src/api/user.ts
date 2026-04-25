import { Api } from "./client";
import type { ApiResponse } from "../types/type";

export function Requests(){

const api = new Api();

const RelayTurnOff = (): Promise<ApiResponse<void>> => api.post("/devices/relay/0"); // выключить реле
const RelayTurnOn = (): Promise<ApiResponse<void>> => api.post("/devices/relay/1"); // включить реле
const GetWaterSensor = (): Promise<ApiResponse<void>> => api.get("/sensor/humidity/"); // получить данные о влажности
const GetTempSensor = (): Promise<ApiResponse<void>> => api.get("/sensor/temperature/"); // получить данные о температуре
const AirTurnOn = (): Promise<ApiResponse<void>> => api.get("/devices/air/0"); // включить обдув
const AirTurnOff = (): Promise<ApiResponse<void>> => api.get("/devices/air/1"); // выключить обдув
const GetShineSensor = (): Promise<ApiResponse<void>> => api.get("/sensor/shine/"); // получить данные о количестве света
const ShineTurnOn = (): Promise<ApiResponse<void>> => api.get("/devices/shine/0"); // включить освещение
const ShineTurnOff = (): Promise<ApiResponse<void>> => api.get("/devices/shine/1"); // выключить освещение
const GetWaterLevelSensor = (): Promise<ApiResponse<void>> => api.get("/sensor/water_lvl");

const GetPlateIP = () => api.get("/getIP/plate/"); // Plate IP
const GetBackIP = () => api.get("/getIP/back/"); // Backend IP
const GetBrokerIP = () => api.get("/getIP/broker/"); // Broker IP

return {
    RelayTurnOff,
    RelayTurnOn,
    GetWaterSensor,
    GetTempSensor,
    AirTurnOn,
    AirTurnOff,
    ShineTurnOn,
    ShineTurnOff,
    GetShineSensor,
    GetPlateIP,
    GetBackIP,
    GetBrokerIP,
    GetWaterLevelSensor
    };
}