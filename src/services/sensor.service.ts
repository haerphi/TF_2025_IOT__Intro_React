import axios from "axios";
import type { Sensor, SensorRequestData } from "../@types/sensor";

export async function getCurrentSensors(): Promise<Sensor[] | null> {

    //! ↓ Ne pas faire ça en prod. Merci d'avance. Bisous
    await (new Promise(resolve => setTimeout(resolve, 500)));

    const { data } = await axios.get<SensorRequestData>('/api/sensors/current', {
        baseURL: 'http://localhost:3000'
    });

    //! Mapping de "SensorRequestData" vers "Sensor"
    //* - Générique
    /*
    const result: Sensor[] = [];
    for (const [key, content] of Object.entries(data)) {
        result.push({
            sensor: key,
            value: content.value.toString(),
            timestamp: new Date(content.timestamp)
        });
    }
    return result;
    */

    //* - Customisé par ressource 
    return [
        {
            sensor: 'Humidity',
            value: (data.humidity.value / 100).toLocaleString('fr-be', { style: 'percent', minimumSignificantDigits: 2 }),
            timestamp: new Date(data.humidity.timestamp)
        },
        {
            sensor: 'Temperature',
            value: data.temperature.value.toLocaleString('fr-be', { style: 'unit', unit: 'celsius' }),
            timestamp: new Date(data.temperature.timestamp)
        }
    ]
}


