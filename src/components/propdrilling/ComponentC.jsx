import { useContext } from "react";
import {UserContext, UserContextObj} from './PropDrilling';

const ComponentC = ({username}) => {

    const username_ii = useContext(UserContext);
    const userObj = useContext(UserContextObj);

    return (
        <div>
            <h4>ComponentC : {username}</h4>
            
            {/* Modern way of consuming React Context */}
            <h4>This Data is from createContext : {username_ii}</h4>
            
            {/* Older/Traditional way of consuming React Context */}
            <UserContext.Consumer>
                {(username_2) => {
                    return <h1>{username_2}</h1>
                }}
            </UserContext.Consumer>

            {/* Modern way of consuming React Context */}
            <ul>
                {userObj.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))};
            </ul>
        </div>
    )
}

export default ComponentC