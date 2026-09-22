CustomHooks:

A Custom Hook is simply a JavaScript function that you create yourself, which uses one or more React hooks.

Custom Hook = your own reusable hook

-------------------------------------------------------------------------------------------------------------------

Custom Hooks are JavaScript functions that start with the prefix 'use' (e.g. useFetch, useForm) and can call other hooks within them.

They allow you to extract and reuse logic that involves state or side effects, making your components more readble and maintainable.

-------------------------------------------------------------------------------------------------------------------

1. Why do we need Custom Hooks?

Imagine you have two components.

Component A & Component B with duplicated the same logic.

Instead, we can move the logic into a Custom Hook.

-------------------------------------------------------------------------------------------------------------------

2. Creating our first Custom Hook

Create a file:

src/
└── hooks/
    └── useCounter.js

import { useState } from "react";

const useCounter = () => {
   const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return {
    count,
    increment,
    decrement
  };
};

export default useCounter;

-------------------------------------------------------------------------------------------------------------------

3. Using our Custom Hook

Now in App.jsx:

import useCounter from "./hooks/useCounter";

const App = () => {

  const { count, increment, decrement } = useCounter();

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={increment}>+</button>

      <button onClick={decrement}>-</button>
    </div>
  );
};

export default App;

-------------------------------------------------------------------------------------------------------------------

Custom Hook does NOT share state

This is a very important concept.

ComponentA
   ↓
useCounter()
   ↓
count = 0


ComponentB
   ↓
useCounter()
   ↓
count = 0


If Component A changes its count:

ComponentA → count = 5
ComponentB → count = 0

-------------------------------------------------------------------------------------------------------------------

learning Custom Hooks in this order:

✅ What is Custom Hook
✅ Create useCounter
✅ Rules of Custom Hooks
✅ Custom Hook with parameters
✅ useFetch
✅ useLocalStorage
Custom Hook + Context
Custom Hook + useReducer
Build a real useUsers() hook for your CRUD project

-------------------------------------------------------------------------------------------------------------------
