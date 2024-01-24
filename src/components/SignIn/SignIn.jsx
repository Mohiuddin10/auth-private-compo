import { useContext } from "react";
import { AuthContext } from "../../Hook/AuthProvider";

const SignIn = () => {
    const {googleSignIn} = useContext(AuthContext)
    return (
        <div>
            <h2>Sign In</h2>
            
        </div>
    );
};

export default SignIn;