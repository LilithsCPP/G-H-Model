import './style/style.css';
import { Requests } from "./api/user";

export function App(){

    const {
      ReleTurnOn,
      ReleTurnOff,
      GetWaterSensor,
      GetTempSensor
    } = Requests();

    const releTurnOn = async () => {
      try { 
            const response = await ReleTurnOn();
            console.log('реле включено: ', response);


        }catch(error){
            console.log('error: ', error);
            alert('ERROR');
        }
    };

    const releTurnOff = async () => {
      try { 
            const response = await ReleTurnOff();
            console.log('реле выключено: ', response);


        }catch(error){
            console.log('error: ', error);
            alert('ERROR');
        }
    };

    const getWaterSensor = async () => {
      try { 
            const response = await GetWaterSensor();
            console.log('реле выключено: ', response);


        }catch(error){
            console.log('error: ', error);
            alert('ERROR');
        }
    };
    
    const getTempSensor = async () => {
      try { 
            const response = await GetTempSensor();
            console.log('реле выключено: ', response);


        }catch(error){
            console.log('error: ', error);
            alert('ERROR');
        }
    };

    const refresh = async () => {
      await getWaterSensor();
      await getTempSensor();
    }

    return(
        <>
      <header className="nav-bar">
        {/* <button className="btn-nav" type="button"></button> */}
      </header>

      <div className="Container">
        <div className="menu">
          <h1>Settings</h1>
          <button onClick={releTurnOn} className="btn-menu" type="button">ON</button>
          <button onClick={releTurnOff} className="btn-menu" type="button">OFF</button>
        </div>

        <div className="main">
          <button onClick={refresh} className="btn-ref" type="button"></button>
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