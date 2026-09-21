import { createContext } from "react";
import ComponentA from "./ComponentA";

export const UserContext = createContext();
export const UserContextObj = createContext();

const PropDrilling = () => {

    const username = "Birendra";
    const username_2 = "Birendra Singh";

    const userObj = [
        {
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz"
        },
        {
            "id": 2,
            "name": "Ervin Howell",
            "username": "Antonette",
            "email": "Shanna@melissa.tv"
        }
    ];

    return (
        <div>
            <h1>PropDrilling</h1>
            <UserContext.Provider value={username_2}>
                <UserContextObj value={userObj}>
                    <ComponentA username={username}/>
                </UserContextObj>
            </UserContext.Provider>
        </div>
    )
}

export default PropDrilling