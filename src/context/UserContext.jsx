import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState({
        name: "Birendra",
        email: "birendra@example.com"
    });

    const updateUser = (name) => {
        setUser({
        ...user,
        name: name
        });
    };

    return (
        <UserContext.Provider value={{ user, updateUser }}>
        {children}
        </UserContext.Provider>
    );
};