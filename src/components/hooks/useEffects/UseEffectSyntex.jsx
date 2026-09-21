import { useState, useEffect } from "react";

const UseEffectSyntex = () => {
    const [value, setValue] = useState(0);

    // useEffect(() => {
    //     console.log("Call useEffect");
    //     document.title = `Increment ${value}`;
    // });

    // useEffect(() => {
    //     console.log("Call useEffect");
    //     document.title = `Increment ${value}`;
    // }, []);

    useEffect(() => {
        console.log("Call useEffect");
        document.title = `Increment ${value}`;
    }, [value]);

    return (
        <div>
            <h1>UseEffects</h1>
            <h2>{value}</h2>
            <button onClick={() => setValue(value + 1)}>Click Me</button>
        </div>
    )
  
}

export default UseEffectSyntex