import React, { useState, useEffect } from 'react';

function Test() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prevCount => prevCount + 1);
        }, 1000);


        return () => clearInterval(interval); // Cleanup function



    }, []);

    return <h1>Timer: {count}</h1>;
}


export default Test;