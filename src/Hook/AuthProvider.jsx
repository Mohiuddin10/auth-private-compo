import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from "./firebase.config";


export const AuthContext = createContext(null)


const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()



const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();

    const googleSignUp = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const userSignUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=> {
            console.log('State Changed');
            setUser(currentUser);
        });
        return (()=> {unsubscribe()})
    },[])

    const logOut =() => {
        return signOut(auth);
    }

    const AuthInfo = {
        googleSignUp,
        userSignUp,
        user,
        logOut
    }

    return (
        <AuthContext.Provider value={AuthInfo}> {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;