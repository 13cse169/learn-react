const Buttons = () => {
    const handleClick = () => {
        console.log(Math.round(Math.random() * 10));
    };

    const copyHandler = () => {
        console.log("Stop steeling my content.");
    };

    const mouseHandler = () => {
        alert("Mouse move event fired.");
    }
    
    return (
        <div>
            <button onClick={handleClick}>CLICK ME</button>
            <p onCopy={copyHandler}><strong>copyHandler</strong>: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni facere ea voluptas adipisci quas ad atque maiores voluptates repellendus quam ab provident sapiente accusamus est quis assumenda eligendi, tempore vel.</p>
            <p onMouseMove={mouseHandler}><strong>mouseHandler</strong>: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni facere ea voluptas adipisci quas ad atque maiores voluptates repellendus quam ab provident sapiente accusamus est quis assumenda eligendi, tempore vel.</p>
            <hr/>
        </div>
    )
}

export default Buttons