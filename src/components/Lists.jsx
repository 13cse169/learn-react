const Lists = () => {
    const numbers = [1, 2, 3, 4];

    return (
        <main>
            {numbers.map(number => (
                <ul key={number}>
                    <li>{number}</li>
                </ul>
            ))}
            <hr />
        </main>
    )
}

export default Lists