import { useRef } from "react";
import Timer from "./Timer";

const IndexUseRef = () => {

    const inputElement = useRef(null);
    const countRef = useRef(0);

    const focusInput = () => {
        inputElement.current.focus();
        inputElement.current.value = "Birendra Singh";

        countRef.current = countRef.current + 2;
        console.log("countRef", countRef);
    };

    return (
        <div>
            <h1>useRef</h1>

            <input type="text" ref={inputElement} />
            <button onClick={() => focusInput()}>Focus Input</button>

            <Timer/>
        </div>
    )
}

export default IndexUseRef