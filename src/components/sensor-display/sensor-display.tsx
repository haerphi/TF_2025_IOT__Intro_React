type SensorDisplayProps = {
    name: string,
    value: string,
    date: Date
}

export default function SensorDisplay({ name, value, date }: SensorDisplayProps) {

    const formattedData = date.toLocaleString("fr-be", { 
        dateStyle: "long",
        timeStyle: "medium"
      });

    return (
        <div>
            <p>{name} ({formattedData})</p>
            <p>Mesure : {value}</p>
        </div>
    );
}

