import { useContext, useState } from "react";
import { AuthContext } from "../../Hook/AuthProvider";
import Swal from "sweetalert2";



const SignUp = () => {
    const { googleSignUp, userSignUp } = useContext(AuthContext);


    // const handleUserSignUp = (e) => {
    //     e.preventDefault();
    //     const form = e.target;
    //     const email = form.email.value;
    //     const password = form.password.value;
    //     userSignUp(email, password)
    // }

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    // const handleEmailChange = (text) => {
    //     setEmail(text);
    // }
    
    // const handlePasswordChange = (text) => {
    //     setPassword(text);
    // }

    const handleGoogleSignUp = () => {
        googleSignUp()
        .then(result => {
            console.log(result.user);
            Swal.fire({
                title: "Done",
                text: `${result.user.displayName ? result.user.displayName : "User"} account created successfully`,
                imageUrl: `${result.user.photoURL}`,
                imageWidth: 60,
                imageHeight: 60,
                imageAlt: "Custom image"
              });
        })
    }
    
    const handleSignUp = (e) => {
        e.preventDefault()
        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)){
            setError('Minimum eight characters, at least one letter, one number and one special character')
        }
        else{
            setError("")
            if(email){
                userSignUp(email, password)
                .then(result => {
                    console.log(result.user);
                    Swal.fire({
                        title: `${result.user.displayName ? result.user.displayName : 'New user'} created successfully`,
                        text: "Thank you",
                        icon: "success"
                      });
                })
            }
        }
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" onChange={(e) => setPassword(e.target.value)} name="password" placeholder="password" className="input input-bordered" required />
                            <p>{error}</p>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button onClick={handleSignUp} className="btn btn-primary">Login</button>
                            <button onClick={handleGoogleSignUp} className="btn btn-[gray]">Google</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;