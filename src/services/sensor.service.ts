import type { Sensor } from "../@types/sensor";

export async function getCurrentSensors() : Promise<Sensor[] | null> {

    //! ↓ Ne pas faire ça en prod. Merci d'avance. Bisous
    await (new Promise(resolve => setTimeout(resolve, 1_000)));

    // TODO Obtenir les données via l'API (Requete AJAX)

    return [
        {
            sensor: 'temperature',
            value: '131.3 °C',
            timestamp: new Date('2025-08-07T11:50:41.397Z')
        },
        {
            sensor: 'humidity',
            value: '56.83 %',
            timestamp: new Date('2025-08-07T11:50:42.273Z')
        }
    ];
}