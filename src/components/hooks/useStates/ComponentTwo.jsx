const ComponentTwo = ({counts, onClickHandler}) => {
    const handleClick = () => onClickHandler();
    return (
        <div>
            <p>{counts}</p>
            <button onClick={handleClick}>Increment C2</button>
        </div>
    )
}

export default ComponentTwo