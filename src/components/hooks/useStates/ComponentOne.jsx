const ComponentOne = ({counts, onClickHandler}) => {
    const handleClick = () => onClickHandler();
    return (
        <div>
            <p>{counts}</p>
            <button onClick={handleClick}>Increment C1</button>
        </div>
    )
}

export default ComponentOne