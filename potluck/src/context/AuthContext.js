import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../firebase'

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}


export function AuthProvider({ children }) {
    const [ currentUser, setCurrentUser ] = useState()
    const [ loading, setLoading ] = useState(true)


    function signup (email, password) {
       return auth.createUserWithEmailAndPassword(email, password)
    }
    // If not using firebase, change the top and bottom lines, the rest of the app will work
    function login (email, password) {
        return auth.signInWithEmailAndPassword(email,password)
    }

    function logout () {
        return auth.signOut
    }

    function resetPassword (email) {
        return auth.sendPasswordResetEmail(email)
    }

    function updateEmail (email) {
        return currentUser.updateEmail(email)
    }

    function updatePassword (password) {
        return currentUser.updatePassword(password)
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
          setCurrentUser(user)
          setLoading(false) // when we have a user its done loading. 
          // as soon as we get this first useeffect that runs, its checking to see if there is a user. 
        })
    
        return unsubscribe
        //will only run when we mount or component
      }, [])



    const value = {
        currentUser,
        login,
        signup,
        logout,
        resetPassword,
        updateEmail,
        updatePassword
        //here we are exposing all of our functions to all of our different components
    }

    
        //checking down here to see if we are loading, otherwise we dont want it to run. if we are not loading, then we render out the children
        //otherwise we dont want to render the children
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
