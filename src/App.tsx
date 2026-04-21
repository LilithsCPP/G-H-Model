import { Api } from "./api/client";
import './style/style.css';

const api = new Api();

const releTurnOff = () => api.post("/relay/0"); // выключить реле
const releTurnOn = () => api.post("/relay/1"); // включить реле
const getWaterSensor = () => api.get("/sensor/hubidity/"); // получить данные о влажности
const getTempSensor = () => api.get("/sensor/temperature/"); // получить данные о температуре

export function App(){

    const releTurnOn = async () => {};

    const releTurnOff = async () => {};

    const getWaterSensor = async () => {};
    
    const getTempSensor = async () => {};

    // const handleTurnOff = async () => {
    //     try { 
    //         const response = await turnOff();
    //         console.log('реле выключено: ', response);


    //     }catch(error){
    //         console.log('error: ', error);
    //         alert('ERROR');
    //     }
    // };

    // const handleTurnOn = async () => {
    //     try { 
    //         const response = await turnOn();
    //         console.log('Реле выключено: ', response);


    //     }catch(error){
    //         console.log('error: ', error);
    //         alert('ERROR');
    //     }
    // };

    return(
        <>
      <header className="nav-bar">
        {/* <button className="btn-nav" type="button"></button> */}
      </header>

      <div className="Container">
        <div className="menu">
          {/* <button className="btn-menu" type="button"></button> */}
        </div>

        <div className="main">
          <button className="btn-ref" type="button"></button>
        </div>
      </div>

      <footer className="footer">
        <div className="info-foot">
          <h1>GreenHouse</h1>
          <h3>Made by STVLTH</h3>
        </div>
      </footer>
    </>
    );
}