import { commands, sendCommand } from "./api";

export function App(){
    const handleTurnOff = async () => {
        try { 
            const response = await sendCommand(commands.turnOff());
            console.log('Свет погас: ', response);
            alert('OFF');

        }catch(error){
            console.log('error: ', error);
            alert('ERROR');
        }
    };

    return(
        <button onClick={handleTurnOff}>OFF</button>
    );
}