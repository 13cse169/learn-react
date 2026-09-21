import { createContext, useState } from "react"

const UserContext = createContext();

const UserProvider = ({children}) => {
    const [user, setUser] = useState({name: "Birendra Singh 0169"});

    const updateUser = (newName) => {
        setUser({ name: newName })
    }

    return (
        <UserContext.Provider value={{user, updateUser}}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext, UserProvider};