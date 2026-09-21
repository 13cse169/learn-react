useEffect: useEffect Hook allows you to perfoem side effect in your components Some example of side effects are: fetching data, directly updating the DOM etc.

useEffect is used when you want React to perform a side effect after rendering.

Common examples:

API calls
localStorage
Setting up timers
Event listeners
Updating the document title
Subscribing/unsubscribing to something


Component renders
       ↓
useEffect runs
       ↓
Side effect happens


useEffect(() => {}, []);



import { useEffect } from "react";

const App = () => {

  useEffect(() => {
    console.log("Component rendered");
  }, []);

  return <h1>Hello</h1>;
};

export default App;

The empty array: [] --  means the effect runs after the initial mount