What is useReducer?

useReducer is a React Hook used to manage state.

const [count, setCount] = useState(0);

For simple state, useState is usually enough.

But when state becomes more complex, useReducer can make the logic easier to organize.

useState
   ↓
State + setter

useReducer
   ↓
State + dispatch
          ↓
       reducer
          ↓
     new state


Basic syntax: const [state, dispatch] = useReducer(reducer, initialState);

There are three important things:

state - Current state: state
dispatch - Used to tell React what happened: dispatch(...)
reducer - A function that decides how the state should change.