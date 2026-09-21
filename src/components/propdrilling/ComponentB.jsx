import ComponentC from "./ComponentC"

const ComponentB = ({username}) => {
    return (
        <div>
            <h3>ComponentB</h3>
            <ComponentC username={username}/>
        </div>
    )
}

export default ComponentB