useRef in React:

useRef is a React Hook that lets you store a value that persists between renders without causing a re-render, and it can also be used to directly access a DOM element.

useRef Hook provide a way to access and interact with DOM element or to persist values across renders without causing a re-render.

Import it: import { useRef } from "react";

1. Basic syntax: const myRef = useRef(initialValue);

        For example: const countRef = useRef(0);

    The value is available through: countRef.current

        So: countRef.current = 10;

2. useRef vs useState

    This is the most important thing to understand.

    useState: const [count, setCount] = useState(0);

    When you do: setCount(10);

        React re-renders the component.

    useRef: const countRef = useRef(0);

    When you do: countRef.current = 10;

        React does NOT re-render.


React does NOT re-render.

useState
   ↓
value changes
   ↓
React re-renders


useRef
   ↓
.current changes
   ↓
No re-render


-----------------------------------------------------------------------------------

Why .current?

const countRef = useRef(0);

countRef = 10; // ❌

countRef.current = 10; // ✅

A ref is an object:

{
   current: 0
}

So you modify the current property:

countRef.current = 10;

-----------------------------------------------------------------------------------

Three things to remember: 

   useRef creates a persistent object
   const ref = useRef(0);

   Access the value with .current
   ref.current

   Changing .current does not cause a re-render
   ref.current = 100;

-----------------------------------------------------------------------------------
useState vs useRef
-----------------------------------------------------------------------------------
useState	                                   useRef
-----------------------------------------------------------------------------------
Stores state	                  Stores a mutable value/reference
Updating causes re-render	      Updating doesn't cause re-render
Access directly	               Access using .current
Used for UI data	               Used for DOM references, timers, previous values, etc.