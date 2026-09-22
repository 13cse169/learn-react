// import { useState, useEffect } from "react";
import useFetch from "./useFetch";

const ExampleOne = () => {

    // const [data, setData] = useState(null);

    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/todos')
    //     .then((res) => res.json())
    //     .then((data) => setData(data));
    // }, []);

    // return (
    //     <div>
    //         <h2>ExampleOne</h2>
    //         <div>
    //             {data && data.map((item) => {
    //                 return <p key={item.id}>{item.title}</p>
    //             })}
    //         </div>
    //     </div>
    // )

    const {data, loading, error} = useFetch("https://jsonplaceholder.typicode.com/users");

    if (loading) {
        return <h2>Loading...</h2>
    }

    if (error) {
        return <h2>Error: {error}</h2>;
    }

    return (
        <div>
            <h2>Users List:</h2>
            {data.map((user) => (
                <h4 key={user.id}>{user.name}</h4>
            ))}
        </div>
    )

}

export default ExampleOne