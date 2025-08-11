import React, { useEffect, useState } from "react";

type SensorWebSocketContext = {
  socket: WebSocket | null;
  status: "connecting" | "open" | "closed";
};

// eslint-disable-next-line react-refresh/only-export-components
export const SensorWebSocketContext =
  React.createContext<SensorWebSocketContext | null>(null);

const WS_URL = "ws://localhost:3000/api/sensors/realtime";

export function SensorWebSocketProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [status, setStatus] = useState<"connecting" | "open" | "closed">(
    "connecting"
  );

  useEffect(() => {
    console.log("WebSocketProvider: useEffect");
    if (socket) {
      console.warn("WebSocket already initialized");
      return;
    }

    const ws = new WebSocket(WS_URL);
    setSocket(ws);
    console.log("WebSocket initialized");

    ws.onopen = () => {
      setStatus("open");
      console.log("WebSocket connection opened");
    };

    return () => {
      console.log("Cleaning up WebSocket connection");
      if (
        ws.readyState === WebSocket.OPEN ||
        ws.readyState === WebSocket.CLOSING ||
        ws.readyState === WebSocket.CONNECTING
      ) {
        ws.close(1000, "Provider unmount");
        setStatus("closed");
      }
    };
  }, []);

  return (
    <SensorWebSocketContext.Provider value={{ socket, status }}>
      {children}
    </SensorWebSocketContext.Provider>
  );
}
