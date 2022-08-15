import { createContext, useState } from "react";

// Context and provider go hand in hand
// actual value you want to access!
export const UserContext = createContext({
    currentUser: 'null',
    setCurrentUser: () => null,
})

// This provider gives us the ability to pass our context down to APP for example. Always needs to get passed in index.js
export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null)
    const value = {currentUser, setCurrentUser};

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}