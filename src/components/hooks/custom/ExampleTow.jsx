import useLocalStroage from "./useLocalStorage"

const ExampleTow = () => {

    const [name, setName] = useLocalStroage("name", "")

    return (
        <div>
            <h2>useLocalStorage</h2>
            <h4>Hello {name}</h4>

            <input value={name} onChange={(e) => setName(e.target.value)} />
        </div>
    )
}

export default ExampleTow