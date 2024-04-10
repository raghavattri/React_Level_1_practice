import React from "react";
import { useEffect,useState } from "react";
const TIME_IN_MILISECONDS_TO_COUNTDOWN = 60*10*1000;
const INTERVAL_IN_MILISECONDS = 100;
export const Timer = () => {
    const [time, setTime] = useState(TIME_IN_MILISECONDS_TO_COUNTDOWN);
    const [referenceTime, setReferenceTime] = useState(Date.now());

    useEffect(() => {
        const countDownUntilZero = () => {
            setTime(prevTime => {
                if (prevTime <= 0) return 0;
                
                const now = Date.now();
                const interval = now - referenceTime;
                setReferenceTime(now);
                return prevTime - interval;
            });
        }

        setTimeout(countDownUntilZero, INTERVAL_IN_MILISECONDS);
    }, [time]);

    return <>
        {(time/1000).toFixed(1)}s
    </>;
}