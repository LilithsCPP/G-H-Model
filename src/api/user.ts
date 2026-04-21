import { Api } from "./client";

export function Requests(){

const api = new Api();

const ReleTurnOff = () => api.post("/devices/relay/0"); // выключить реле
const ReleTurnOn = () => api.post("/devices/relay/1"); // включить реле
const GetWaterSensor = () => api.get("/sensor/hubidity/"); // получить данные о влажности
const GetTempSensor = () => api.get("/sensor/temperature/"); // получить данные о температуре

return {
    ReleTurnOff,
    ReleTurnOn,
    GetWaterSensor,
    GetTempSensor
    };
}