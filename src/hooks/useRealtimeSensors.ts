// src/hooks/useRealtimeSensors.ts
import { useContext, useEffect, useState } from "react";
import type { Sensor, SensorWebSocketData } from "../@types/sensor";
import { WebSocketContext } from "../contextes/WebSocketContext";

export function useRealtimeSensors() {
    const socket: WebSocket = useContext(WebSocketContext) as WebSocket;
    const [readings, setReadings] = useState<Sensor[]>([]);

    // Accumulation (ex: pour tracer un graphe à défilement)
    useEffect(() => {
        console.log("useRealtimeSensors: useEffect - Setting up WebSocket message handler");
        
        if (!socket) {
            console.warn("WebSocket is not initialized");
            return;
        }

        socket.onmessage = (event) => {
            try {
                const message: SensorWebSocketData = JSON.parse(event.data);
                console.log("useRealtimeSensors: New data received:", message);

                // Mettre à jour les lectures en ajoutant la nouvelle donnée
                setReadings((prevReadings) => [
                    ...prevReadings,
                    {
                        sensor: message.sensor,
                        value: message.data.value,
                        timestamp: new Date(message.data.timestamp),
                    },
                ]);
            } catch (error) {
                console.error("Erreur de parsing du message WebSocket:", error);
            }
        };

        return () => {
            console.log(
                "useRealtimeSensors: Cleaning up WebSocket message handler"
            );
            socket.onmessage = null; // Nettoyer le gestionnaire de messages
        };
    }, [socket]);

    return { readings };
}
