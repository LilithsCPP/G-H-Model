import { useState } from 'react';
import './style/style.css';
import { Requests } from "./api/user";

// 1. Описываем типы для того, что возвращает Requests()
interface RequestsType {
  ReleTurnOn: () => Promise<any>;
  ReleTurnOff: () => Promise<any>;
  GetWaterSensor: () => Promise<string | number>;
  GetTempSensor: () => Promise<string | number>;
}

export function App() {
    // 2. Добавляем стейт, чтобы было что рендерить в <h1>
    const [waterData, setWaterData] = useState<string | number>('---');

    const {
      ReleTurnOn,
      ReleTurnOff,
      GetWaterSensor,
      GetTempSensor
    } = Requests() as RequestsType; // Приведение типа для чистого TS

    const releTurnOn = async () => {
      try { 
            const response = await ReleTurnOn();
            console.log('реле включено: ', response);
        } catch(error) {
            alert('ERROR');
        }
    };

    const releTurnOff = async () => {
      try { 
            const response = await ReleTurnOff();
            console.log('реле выключено: ', response);
        } catch(error) {
            alert('ERROR');
        }
    };

    const getWaterSensor = async () => {
      try { 
            const response = await GetWaterSensor();
            setWaterData(response); // СОХРАНЯЕМ ДАННЫЕ
        } catch(error) {
            console.log('error: ', error);
        }
    };
    
    const getTempSensor = async () => {
      try { 
            const response = await GetTempSensor();
            console.log('температура: ', response);
        } catch(error) {
            console.log('error: ', error);
        }
    };

    const refresh = async () => {
      await getWaterSensor();
      await getTempSensor();
    }

    return (
      <>
        <header className="nav-bar"></header>

        <div className="Container">
          <div className="menu">
            <h1>Settings</h1>
            <button onClick={releTurnOn} className="btn-menu" type="button">ON</button>
            <button onClick={releTurnOff} className="btn-menu" type="button">OFF</button>
          </div>

          <div className="main">
            <button onClick={refresh} className="btn-ref" type="button">Обновить</button>
            {/* ТЕПЕРЬ ТУТ ПЕРЕМЕННАЯ, А НЕ ФУНКЦИЯ */}
            <h1>Показания: {waterData}</h1>
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
