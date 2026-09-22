import { useReducer, useState } from "react";
import { counterReducer, initalState } from "./counterReducer";

const Counter = () => {

    const [state, dispatch] = useReducer(counterReducer, initalState);
    const [inputValue, setInputValue] = useState(0);

    const handleIncrement = () => dispatch({ type: "increment" });
    const handleDeccrement = () => dispatch({ type: "decrement" });

    const handleIncrementByAmount = () => {
        dispatch({ type: "incrementByAmount", payload: Number(inputValue) });
        setInputValue(0);
    };
    const handleDecrementByAmount = () => {
        dispatch({ type: "decrementByAmount", payload: +inputValue });
        setInputValue(0);
    };

    return (
        <div>
            <h1>Manage Complex State: Counter</h1>
            <h2>Count: {state.count}</h2>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDeccrement}>Deccrement</button>

            <div>
                <button onClick={handleDecrementByAmount}>Decrement</button>
                <input type="number" value={inputValue} onChange={e => setInputValue(e.target.value)} />
                <button onClick={handleIncrementByAmount}>Increment</button>
            </div>
        </div>
    )
}

export default Counter