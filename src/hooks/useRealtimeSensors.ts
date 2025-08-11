// src/hooks/useRealtimeSensors.ts
import { useContext, useEffect, useState } from "react";
import type { Sensor, SensorWebSocketData } from "../@types/sensor";
import { SensorWebSocketContext } from "../contextes/WebSocketContext";

export function useRealtimeSensors() {
  const sensorWebSocketContext = useContext(SensorWebSocketContext);
  const [readings, setReadings] = useState<Sensor[]>([]);
  const [status, setStatus] = useState<"connecting" | "open" | "closed">(
    "connecting"
  );

  useEffect(() => {
    if (!sensorWebSocketContext) {
      console.error("SensorWebSocketContext is not available");
      return;
    }

    const { socket } = sensorWebSocketContext;

    if (!socket) {
      console.warn("WebSocket is not initialized yet");
      return;
    }

    setStatus(socket.readyState === WebSocket.OPEN ? "open" : "connecting");

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
  }, [sensorWebSocketContext]);

  return { status, readings };
}
