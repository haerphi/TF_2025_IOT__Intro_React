import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
);


export default function SensorHistory() {

    const requestData = {
        "start": "2025-08-07T10:00:00.000Z",
        "end": "2025-08-07T10:05:00.000Z",
        "data": [
            {
                "value": 54.92,
                "timestamp": "2025-08-07T10:00:00.438Z"
            },
            {
                "value": 57.45,
                "timestamp": "2025-08-07T10:00:05.440Z"
            },
            {
                "value": 56.75,
                "timestamp": "2025-08-07T10:00:10.454Z"
            },
            {
                "value": 54.57,
                "timestamp": "2025-08-07T10:00:15.469Z"
            },
            {
                "value": 55.73,
                "timestamp": "2025-08-07T10:00:20.470Z"
            },
            {
                "value": 53.99,
                "timestamp": "2025-08-07T10:00:25.474Z"
            },
            {
                "value": 51.68,
                "timestamp": "2025-08-07T10:00:30.477Z"
            },
            {
                "value": 53.02,
                "timestamp": "2025-08-07T10:00:35.478Z"
            },
            {
                "value": 52.82,
                "timestamp": "2025-08-07T10:00:40.487Z"
            },
            {
                "value": 51.97,
                "timestamp": "2025-08-07T10:00:45.490Z"
            },
            {
                "value": 53.4,
                "timestamp": "2025-08-07T10:00:50.490Z"
            },
            {
                "value": 54.72,
                "timestamp": "2025-08-07T10:00:55.501Z"
            },
            {
                "value": 56.53,
                "timestamp": "2025-08-07T10:01:00.509Z"
            },
            {
                "value": 57.93,
                "timestamp": "2025-08-07T10:01:05.512Z"
            },
            {
                "value": 56.83,
                "timestamp": "2025-08-07T10:01:10.516Z"
            },
            {
                "value": 55.75,
                "timestamp": "2025-08-07T10:01:15.521Z"
            },
            {
                "value": 58.48,
                "timestamp": "2025-08-07T10:01:20.533Z"
            },
            {
                "value": 58.84,
                "timestamp": "2025-08-07T10:01:25.540Z"
            },
            {
                "value": 60.52,
                "timestamp": "2025-08-07T10:01:30.543Z"
            },
            {
                "value": 58.31,
                "timestamp": "2025-08-07T10:01:35.543Z"
            },
            {
                "value": 55.36,
                "timestamp": "2025-08-07T10:01:40.550Z"
            },
            {
                "value": 57.94,
                "timestamp": "2025-08-07T10:01:45.563Z"
            },
            {
                "value": 56.55,
                "timestamp": "2025-08-07T10:01:50.572Z"
            },
            {
                "value": 57.41,
                "timestamp": "2025-08-07T10:01:55.578Z"
            },
            {
                "value": 60.05,
                "timestamp": "2025-08-07T10:02:00.581Z"
            },
            {
                "value": 58.49,
                "timestamp": "2025-08-07T10:02:05.581Z"
            },
            {
                "value": 59.44,
                "timestamp": "2025-08-07T10:02:10.589Z"
            },
            {
                "value": 58.73,
                "timestamp": "2025-08-07T10:02:15.596Z"
            },
            {
                "value": 60.11,
                "timestamp": "2025-08-07T10:02:20.606Z"
            },
            {
                "value": 62.69,
                "timestamp": "2025-08-07T10:02:25.607Z"
            },
            {
                "value": 61.22,
                "timestamp": "2025-08-07T10:02:30.611Z"
            },
            {
                "value": 63.4,
                "timestamp": "2025-08-07T10:02:35.615Z"
            },
            {
                "value": 61.28,
                "timestamp": "2025-08-07T10:02:40.621Z"
            },
            {
                "value": 63.43,
                "timestamp": "2025-08-07T10:02:45.633Z"
            },
            {
                "value": 62.86,
                "timestamp": "2025-08-07T10:02:50.640Z"
            },
            {
                "value": 61.15,
                "timestamp": "2025-08-07T10:02:55.644Z"
            },
            {
                "value": 62.22,
                "timestamp": "2025-08-07T10:03:00.656Z"
            },
            {
                "value": 65,
                "timestamp": "2025-08-07T10:03:05.662Z"
            },
            {
                "value": 62.6,
                "timestamp": "2025-08-07T10:03:10.667Z"
            },
            {
                "value": 63.58,
                "timestamp": "2025-08-07T10:03:15.679Z"
            },
            {
                "value": 61.35,
                "timestamp": "2025-08-07T10:03:20.691Z"
            },
            {
                "value": 63.06,
                "timestamp": "2025-08-07T10:03:25.701Z"
            },
            {
                "value": 64.3,
                "timestamp": "2025-08-07T10:03:30.709Z"
            },
            {
                "value": 62.04,
                "timestamp": "2025-08-07T10:03:35.722Z"
            },
            {
                "value": 63.19,
                "timestamp": "2025-08-07T10:03:40.729Z"
            },
            {
                "value": 64.22,
                "timestamp": "2025-08-07T10:03:45.729Z"
            },
            {
                "value": 66.4,
                "timestamp": "2025-08-07T10:03:50.730Z"
            },
            {
                "value": 63.65,
                "timestamp": "2025-08-07T10:03:55.743Z"
            },
            {
                "value": 64.32,
                "timestamp": "2025-08-07T10:04:00.757Z"
            },
            {
                "value": 65.09,
                "timestamp": "2025-08-07T10:04:05.762Z"
            },
            {
                "value": 63.98,
                "timestamp": "2025-08-07T10:04:10.768Z"
            },
            {
                "value": 64.01,
                "timestamp": "2025-08-07T10:04:15.775Z"
            },
            {
                "value": 63.04,
                "timestamp": "2025-08-07T10:04:20.787Z"
            },
            {
                "value": 63.81,
                "timestamp": "2025-08-07T10:04:25.799Z"
            },
            {
                "value": 63.81,
                "timestamp": "2025-08-07T10:04:30.806Z"
            },
            {
                "value": 61.77,
                "timestamp": "2025-08-07T10:04:35.810Z"
            },
            {
                "value": 63.11,
                "timestamp": "2025-08-07T10:04:40.814Z"
            },
            {
                "value": 60.44,
                "timestamp": "2025-08-07T10:04:45.811Z"
            },
            {
                "value": 59.26,
                "timestamp": "2025-08-07T10:04:50.821Z"
            },
            {
                "value": 57.74,
                "timestamp": "2025-08-07T10:04:55.827Z"
            }
        ]
    }

    const graphData = {
        labels: requestData.data.map((elem) => new Date(elem.timestamp).toLocaleTimeString()),
        datasets: [
            {
                label: 'Humidity',
                data: requestData.data.map(elem => elem.value),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }
        ],
    };

    return (
        <>
            <h2>Graphique</h2>
            <Line data={graphData} />
        </>
    )
}