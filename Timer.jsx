import { useState, useEffect } from "react";

function Timer() {
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval = null;

        if (isRunning) {
            interval = setInterval(() => {
                setSeconds(prev => prev + 1);
            }, 1000);
        }

        return () => clearInterval(interval);
    }, [isRunning]);

    function Start() {
        setIsRunning(true);
    }

    function Stop() {
        setIsRunning(false);
    }

    function Reset() {
        setIsRunning(false);
        setSeconds(0);
    }

    return (
        <div>
            <h1>Timer</h1>
            <p>{seconds}</p>
            <button onClick={Start}>Start</button>
            <button onClick={Stop}>Stop</button>
            <button onClick={Reset}>Reset</button>
        </div>
    );
}

export default Timer;