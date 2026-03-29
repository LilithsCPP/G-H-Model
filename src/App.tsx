import { Api } from "./api/client";

const api = new Api();

const turnOff = () => api.post("/led/0");
const turnOn = () => api.post("/led/1");

export function App(){
    const handleTurnOff = async () => {
        try { 
            const response = await turnOff();
            console.log('Свет погас: ', response);


        }catch(error){
            console.log('error: ', error);
            alert('ERROR');
        }
    };

    const handleTurnOn = async () => {
        try { 
            const response = await turnOn();
            console.log('Свет включен: ', response);


        }catch(error){
            console.log('error: ', error);
            alert('ERROR');
        }
    };

    return(
        <><button onClick={handleTurnOff}>OFF</button><button onClick={handleTurnOn}>ON</button></>
    );
}