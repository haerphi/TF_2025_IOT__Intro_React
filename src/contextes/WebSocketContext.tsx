import React, { useEffect, useRef } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const WebSocketContext = React.createContext<WebSocket | null>(null);

const WS_URL = "ws://localhost:3000/api/sensors/realtime";

export function WebSocketProvider({ children }: { children: React.ReactNode }) {
    const socket = useRef<WebSocket | null>(null);

    useEffect(() => {
        console.log("WebSocketProvider: useEffect");
        if (socket.current) {
            console.warn("WebSocketProvider: WebSocket already initialized");
            return;
        }

        const ws = new WebSocket(WS_URL);
        socket.current = ws;
        console.log("WebSocketProvider: WebSocket initialized");

        ws.onopen = () => {
            console.log("WebSocketProvider: WebSocket connection opened");
        };

        return () => {
            console.log("WebSocketProvider: Cleaning up WebSocket connection");
            if (ws) {
                ws.close();
                socket.current = null;
                console.log("WebSocketProvider: WebSocket connection closed");
            }
        };
    }, []);

    return (
        <WebSocketContext.Provider value={socket.current}>
            {children}
        </WebSocketContext.Provider>
    );
}
