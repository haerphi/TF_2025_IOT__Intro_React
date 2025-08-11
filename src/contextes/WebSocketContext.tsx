import React, { useEffect, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const WebSocketContext = React.createContext<WebSocket | null>(null);

const WS_URL = "ws://localhost:3000/api/sensors/realtime";

export function WebSocketProvider({ children }: { children: React.ReactNode }) {
    const [socket, setSocket] = useState<WebSocket | null>(null);

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
            console.log("WebSocket connection opened");
        };

        return () => {
            console.log("Cleaning up WebSocket connection");
            if (
                ws.readyState === WebSocket.OPEN ||
                ws.readyState === WebSocket.CLOSING
            ) {
                ws.close(1000, "Provider unmount");
            }
        };
    }, []);

    return (
        <WebSocketContext.Provider value={socket}>
            {children}
        </WebSocketContext.Provider>
    );
}
