import ComponentB from "./ComponentB"

const ComponentA = ({username}) => {
    return (
        <div>
            <h2>ComponentA</h2>
            <ComponentB username={username}/>
        </div>
    )
}

export default ComponentA