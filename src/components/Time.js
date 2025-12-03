import { useEffect, useState } from "react";

const Time = () => {
    const [time, setTime] = useState("");

    useEffect(() => {
        const update = () => {
            const now = new Date();
            const formatted = now.toLocaleTimeString("ko-KR", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
            });
            setTime(formatted);
        };
        update(); // 최초 1번
        const timer = setInterval(update, 1000);
        return () => clearInterval(timer);
    }, []);

    return <div className="time">{time}</div>;
};

export default Time;
