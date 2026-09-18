const InlineStyle = () => {
    const styles = { color:"#000", background:"red", padding:"1rem" };

    return (
        <div>
            <h4 style={{ color:"red", background:"aqua" }}>Inline Style 1</h4>
            <h4 style={ styles }>Inline Style 2</h4>
            <hr/>
        </div>
    )
}

export default InlineStyle