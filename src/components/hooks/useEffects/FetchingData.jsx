import { useState, useEffect } from "react"

const FetchingData = () => {

    const [data, setData] = useState([]);
    const [posts, setPosts] = useState([]);

    // Effect 1: Fetch API data
    useEffect(() => {
        async function getData() {
            const response = await fetch("https://jsonplaceholder.typicode.com/todos");
            const data = await response.json();

            if (data && data.length) setData(data);
        }

        getData();
    }, []);

    // Effect 2: Fetch API posts data
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await response.json();
            setPosts(data);
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>First Post Title</h1>
            {posts.length > 0 ? <h3>{posts[0].title}</h3> : <p>Loding...</p>}

            <h1>FetchingData</h1>
            <ul>
                {data.map((todo) => (
                    <li key={todo.id}>{todo.title}</li>
                ))};
            </ul>
        </div>
    )
}

export default FetchingData

// Component renders
//        ↓
// useEffect runs
//        ↓
// getData() runs
//        ↓
// API request
//        ↓
// Wait for response
//        ↓
// Get JSON data
//        ↓
// setData(data)
//        ↓
// Component re-renders