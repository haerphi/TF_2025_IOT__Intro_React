import axios from "axios";
import type { Sensor, SensorRequestData } from "../@types/sensor";

export async function getCurrentSensors(): Promise<Sensor[] | null> {

    //! ↓ Ne pas faire ça en prod. Merci d'avance. Bisous
    await (new Promise(resolve => setTimeout(resolve, 500)));

    const { data } = await axios.get<SensorRequestData>('/api/sensors/current', { 
        baseURL: 'http://localhost:3000' 
    });

    // Mapping de "SensorRequestData" vers "Sensor"
    const result: Sensor[] = [];
    for (const [key, content] of Object.entries(data)) {
        result.push({
            sensor: key,
            value: content.value.toString(),
            timestamp: new Date(content.timestamp)
        });
    }
    return result;
}


