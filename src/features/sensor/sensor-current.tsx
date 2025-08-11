import { useEffect, useState } from "react";
import SensorDisplay from "../../components/sensor-display/sensor-display";
import { getCurrentSensors } from "../../services/sensor.service";
import type { Sensor } from "../../@types/sensor";
import { useRealtimeSensors } from "../../hooks/useRealtimeSensors";

export default function SensorCurrent() {

    const [sensors, setSensors] = useState<Sensor[] | null>(null);
    const [isLoading, setLoading] = useState(false);
    const { readings } = useRealtimeSensors();


    const handleLoad = () => {
        setLoading(true);
        setSensors(null);

        getCurrentSensors().then(currentData => {
            setSensors(currentData);
            setLoading(false);
        });
    }

    useEffect(() => {
        if (readings.length > 0) {
            console.log("SensorCurrent: New readings received:", readings);
        }
    }, [readings]);

    return (
        <div>
            <h2>Etat actuelle des sondes</h2>
            <button onClick={handleLoad} disabled={isLoading}>Charger</button>
            { isLoading ? (
                <p>Chargement...</p>
            ) : sensors ? (
                <SensorList sensors={sensors} />
            ) : (
                <p>Aucunne donnée...</p>
            )}
        </div>
    )
}

function SensorList({ sensors } : {sensors : Sensor[]}) {

    return sensors.map(elem => (
        <SensorDisplay key={elem.sensor}
            name={elem.sensor}
            value={elem.value}
            date={elem.timestamp}
        />
    ));
}