STATE: State is a way to store and manage data that can change over time and affect how the cmponent renders. We define state using the useState Hook, which allows you to set an initial value and provides a way to update that state.

HOOKS: Hooks are anew addition in React 16.8 they let you use state nd other React features without writing a class.

useState(): useState Hook allows us to track state in a functional component. State generally refers to data or properties that need to be tracking in an application.

[<Inital Value>, <Change Value>]
const [data, changeData] = useState()


{/* sdsds */}

1. What are Hooks?

Hooks are special React functions that let functional components use React features such as state, effects, context, refs, etc.

Before Hooks, state was mainly handled using class components. With Hooks, we can do it directly inside function components.

Some common Hooks:

useState     → state
useEffect    → side effects
useContext   → context
useRef       → references / DOM elements
useMemo      → memoization
useCallback  → memoized functions

2. useState

useState is the most important Hook when starting React.

It allows a component to store and update data.


const [count, setCount] = useState(0);

        state      setter
          ↓          ↓
const [ count,   setCount ] = useState(0);
                              ↑
                         initial value