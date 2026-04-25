import './style/style.css';
import { Requests } from "./api/user";
import { useState } from 'react';


export function App(){

    const [WaterData, SetWaterData] = useState('none');
    const [TempoData, SetTempoData] = useState('none');
    const [ShineData, SetShineData] = useState('none');
    const [WaterLvlData, SetWaterLvlData] = useState('none');

    const {
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
    } = Requests();

    const getBrokerIP = async () => {
      try { 
            const response = await GetBrokerIP();
            console.log('MQTT Broker IP: ', response);

        }catch(error){
            console.log('error: ', error);
            alert('ERROR');
        }
    };
    

    const getBackIP = async () => {
      try { 
            const response = await GetBackIP();
            console.log('FastAPI IP: ', response);

        }catch(error){
            console.log('error: ', error);
            alert('ERROR');
        }
    };
    
    const getPlateIP = async () => {
      try { 
            const response = await GetPlateIP();
            console.log('Plate IP: ', response);

        }catch(error){
            console.log('error: ', error);
            alert('ERROR');
        }
    };



    const getShineSensor = async () => {
      try { 
            const response = await GetShineSensor();
            console.log('данные с датчика: ', response);

        }catch(error){
            console.log('error: ', error);
            alert('ERROR');
        }
    };

    const shineTurnOff = async () => {
      try { 
            const response = await ShineTurnOff();
            console.log('свет выключен: ', response);

        }catch(error){
            console.log('error: ', error);
            alert('ERROR');
        }
    };

    const shineTurnOn = async () => {
      try { 
            const response = await ShineTurnOn();
            console.log('свет включен: ', response);

        }catch(error){
            console.log('error: ', error);
            alert('ERROR');
        }
    };

    const airTurnOff = async () => {
      try { 
            const response = await AirTurnOff();
            console.log('подача воздуха выключена: ', response);

        }catch(error){
            console.log('error: ', error);
            alert('ERROR');
        }
    };

     const airTurnOn = async () => {
      try { 
            const response = await AirTurnOn();
            console.log('подача воздуха включена: ', response);

        }catch(error){
            console.log('error: ', error);
            alert('ERROR');
        }
    };

    const relayTurnOn = async () => {
      try { 
            const response = await RelayTurnOn();
            console.log('реле включено: ', response);

        }catch(error){
            console.log('error: ', error);
            alert('ERROR');
        }
    };

    const relayTurnOff = async () => {
      try { 
            const response = await RelayTurnOff();
            console.log('реле выключено: ', response);

        }catch(error){
            console.log('error: ', error);
            alert('ERROR');
        }
    };

    const getWaterSensor = async () => {
      try { 
            const response = await GetWaterSensor();
            console.log('данные с датчика: ', response);
            
            if (response.data) {
                if (typeof response.data === 'object' && response.data.state !== undefined) {
                    SetWaterData(String(response.data.state));
                } else if (typeof response.data === 'object' && response.data.detail) {
                    SetWaterData('Error: ' + response.data.detail);
                } else {
                    SetWaterData(String(response.data));
                }
            }
        }catch(error){
            console.log('error: ', error);
            alert('ERROR');
        }
    };
    
    const getTempSensor = async () => {
      try { 
            const response = await GetTempSensor();
            console.log('данные с датчика: ', response);

        }catch(error){
            console.log('error: ', error);
            alert('ERROR');
        }
    };

    const refresh = async () => {
      await Promise.all([getWaterSensor(), getTempSensor()]);
    }


    return(
        <>
      <header className="nav-bar"></header>
      <div className="Container">
        <div className="menu">
          <h1>Settings</h1>
          <button onClick={relayTurnOn} className="btn-menu" type="button">Relay ON</button>
          <button onClick={relayTurnOff} className="btn-menu" type="button">Relay OFF</button>
          <button onClick={shineTurnOn} className="btn-menu" type="button">Shine ON</button>
          <button onClick={shineTurnOff} className="btn-menu" type="button">Shine OFF</button>        
          <button onClick={airTurnOn} className="btn-menu" type="button">Air ON</button>
          <button onClick={airTurnOff} className="btn-menu" type="button">Air OFF</button>  
        </div>
        <div className="main">
          <button onClick={refresh} className="btn-ref" type="button"></button>
          <h1>Water Data: {WaterData}</h1>
        </div>
      </div>
      <footer className="footer">
        <div className="info-foot">
            <h1>GreenHouse</h1>
            <h3>Made by STVLTH</h3>
        </div>
    </footer>
      </>)}