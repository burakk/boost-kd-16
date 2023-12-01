import { useRef } from "react";
import { useState } from "react";

export function StopWatch() {
    const [startTime, setStartTime] = useState(null);
    const [now, setNow] = useState(null);

    let intervalIdRef = useRef(null);

    function handleStart(e) {
        //her başlattığımızda startTime ve now'ı aynı noktadan başlatalım...
        setNow(Date.now());
        setStartTime(Date.now());
        intervalIdRef.current = setInterval(() => {
            setNow(Date.now());
        }, 10);
    }

    function handleStop(e) {
        clearInterval(intervalIdRef.current);

    }

    let secondsPassed = 0;
    if (startTime != null && now != null) {
        secondsPassed = (now - startTime) / 1000;

    }

    console.log(secondsPassed);
    return (
        <>
            <h2>Geçen zaman: {secondsPassed.toFixed(2)}</h2>
            <button onClick={handleStart}>Başlat</button>
            <button onClick={handleStop}>Durdur</button>
        </>
    );
}