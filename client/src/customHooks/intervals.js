import { useEffect, useRef } from "react";

export default function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        function tick() {
            savedCallback.current();
        }

        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}


// useInterval(
//     () => {
//         // What should happen when the timer is running
//         setDurationSeconds(second => {
//             second === 0 ? second = 59 : second -= 1;
//             if (second === 59)
//                 setDurationMinutes(minutes => minutes = durationMinutes - 1);
//             return second;
//         });

//         if (onBreak)
//             setDurationProgress(currentProgress => currentProgress = percentage(durationMinutes, durationSeconds, initialBreakDuration))
//         else
//             setDurationProgress(currentProgress => currentProgress = percentage(durationMinutes, durationSeconds, initialDuration))

//         if (durationMinutes === 0 && durationSeconds === 1)
//             timerExpired();
//     },
//     isTimerRunning ? 1000 : null
// );