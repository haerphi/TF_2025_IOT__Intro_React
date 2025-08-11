// src/hooks/useRealtimeSensors.ts
import { useContext, useEffect, useState } from "react";
import type { Sensor, SensorWebSocketData } from "../@types/sensor";
import { WebSocketContext } from "../contextes/WebSocketContext";

export function useRealtimeSensors() {
    const socket = useContext(WebSocketContext);
    const [readings, setReadings] = useState<Sensor[]>([]);

    useEffect(() => {
        if (!socket) {
            console.warn("WebSocket is not initialized yet");
            return;
        }

        socket.onmessage = (event) => {
            try {
                const message: SensorWebSocketData = JSON.parse(event.data);
                console.log("New data received:", message);

                setReadings((prev) => [
                    ...prev,
                    {
                        sensor: message.sensor,
                        value: message.data.value,
                        timestamp: new Date(message.data.timestamp),
                    },
                ]);
            } catch (error) {
                console.error("Erreur parsing WS:", error);
            }
        };

        return () => {
            socket.onmessage = null;
        };
    }, [socket]);

    return { readings };
}
