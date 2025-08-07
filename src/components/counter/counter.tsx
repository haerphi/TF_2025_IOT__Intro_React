import { useState } from "react"

const DEFAULT_COUNT = 0;

export default function Counter() {

    const [count, setCount] = useState<number>(DEFAULT_COUNT);

    const handleIncr = () => {
        setCount(count => count + 1);
    };

    const handleReset = () => {
        setCount(DEFAULT_COUNT);
    };

    return (
        <div>
            <p>Compteur : {count}</p>
            <button onClick={handleIncr}>+ 1</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
}