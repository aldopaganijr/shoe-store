import { createContext, useState, useEffect } from "react";
import {onAuthStateChangedListener, signOutUser} from "../Utils/Firebase"

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

    // The moment the user provider mounts, sign out
    signOutUser();

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            console.log(user)
            setCurrentUser(user)
        })

        return unsubscribe
    }, [])

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}