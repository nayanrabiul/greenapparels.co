import React, { useState, useEffect } from "react";

const AnimatedCounter = ({ countTo, duration }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let intervalId = null;
        const step = () => {
            setCount(c => {
                if (c >= countTo) {
                    clearInterval(intervalId);
                    return countTo;
                }
                return c + 1;
            });
        };

        intervalId = setInterval(step, duration / countTo);
        return () => clearInterval(intervalId);
    }, [countTo, duration]);

    return (
        <div className="text-6xl font-bold text-center">
            {count}{"+"}
        </div>
    );
};

export default AnimatedCounter;
