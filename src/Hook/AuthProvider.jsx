import { createContext } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithPopup } from "firebase/auth";
import app from "./firebase.config";


export const AuthContext = createContext(null)


const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {

    const googleSignUp = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const userSignUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const AuthInfo = {
        googleSignUp,
        userSignUp
    }

    return (
        <AuthContext.Provider value={AuthInfo}> {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;