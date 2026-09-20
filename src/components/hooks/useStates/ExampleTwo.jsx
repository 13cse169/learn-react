import { useState } from "react"

const ExampleTwo = () => {
    const [randomNum, setRandomNum] = useState(() => Math.floor(Math.random() * 100) );

    const generateRandomNum = () => {
        const newNum = Math.floor(Math.random() * 100);
        setRandomNum(newNum);
    };

    return (
        <div>
            <h1>Random Number: {randomNum}</h1>
            <button onClick={generateRandomNum}>New Random Number</button>
        </div>
    )
}

export default ExampleTwo