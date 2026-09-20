import { useState } from "react";
import ComponentOne from "./ComponentOne";
import ComponentTwo from "./ComponentTwo";
import ExampleOne from "./ExampleOne";
import ExampleTwo from "./ExampleTwo";
import ExampleThree from "./ExampleThree";
import Counter from "./exercise/Counter";
import TodoList from "./exercise/TodoList";
import Profile from "./exercise/Profile";
import ShoppingList from "./exercise/ShoppingList";

const UseStates = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    // ===========

    const [friends, setFriends] = useState(['Rahil', 'Deepak']);

    const addOneFriend = () => setFriends([...friends, 'Birendra']);
    const removeOneFriend = () => setFriends(friends.filter(f => f != 'Deepak'));
    const updateOneFriend = () => {
        setFriends(friends.map((f) => (f == 'Birendra' ? 'Birendra Singh' : f)));
    }

    // ===========

    const [movie, setMovie] = useState({
        title: "Equalizer 3",
        ratings: 5
    });

    // const changeRatings = () => {
    //     // const copyMovie = {
    //     //     ...movie,
    //     //     ratings: 7
    //     // };
    //     // setMovie(copyMovie);

    //     setMovie({...movie, ratings: 8});
    // };

    const changeRatings = () => setMovie({...movie, ratings: 9});

    // ===========

    const [movies, setMovies] = useState([
        {id: 1, title: "Spider Man", ratings: 6},
        {id: 2, title: "Superman", ratings: 4}
    ]);

    const changeMovieName = () => {
        setMovies(
            movies.map((m) => (m.id == 1 ? {...movies, title: "John Wick 5"} : m))
        )
    }

    // ===========

    const [counts, setCounts] = useState(0);
    

    return (
        <div>
            <ShoppingList/>
            <Profile/>
            <TodoList/>
            <Counter/>
            <hr/>

            <ExampleThree/>
            <ExampleTwo/>
            <ExampleOne/>
            
            <hr/>

            <ComponentOne counts={counts} onClickHandler={() => setCounts(counts + 1)}/>
            <ComponentTwo counts={counts} onClickHandler={() => setCounts(counts + 1)}/>
            <hr/>

            <ul>
                {movies.map((m) => (
                    <li key={m.id}>Title: {m.title}, Rating: {m.ratings}</li>
                ))}

                <button onClick={changeMovieName}>Change Name</button>
            </ul>

            <hr/>

            <h1>Title: {movie.title}</h1>
            <h2>Rating: {movie.ratings}</h2>
            <button onClick={changeRatings}>Change Rating</button>

            <hr/>
            
            <div>
                <ul>
                    {friends.map((f) => (
                        <li key={f}>{f}</li>
                    ))}
                </ul>

                <button onClick={addOneFriend}>Add Friend</button>
                <button onClick={removeOneFriend}>Remove Friend</button>
                <button onClick={updateOneFriend}>Update Friend</button>
            </div>
            
            <hr/>

            <h1>{count}</h1>

            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <hr/>
        </div>
    )
}

export default UseStates