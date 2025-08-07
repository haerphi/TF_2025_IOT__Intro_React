
export type Sensor = {
    sensor: string,
    value: string,
    timestamp: Date
}

export type SensorRequestData = {
    temperature: {
        value: number,
        timestamp: string
    },
    humidity: {
        value: number,
        timestamp: string
    }
}
