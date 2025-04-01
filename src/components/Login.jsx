
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const Login = () => {

    const {signInUser, signInWithGoogle} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = (e) =>{
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password);

        signInUser(email, password)
        .then(result =>{
            console.log(result.user);
            e.target.reset();
            navigate('/')
        })
        .catch(error =>{
            console.log(error.message);
        })
    }

    const handleGoogleSignIn = () =>{
        signInWithGoogle()
        .then(result =>{
            console.log('sign in with google');
        })
        .catch(error =>{
            console.log(error.message);
        })
    }

    return (
        <div>
            <h1 className="text-4xl text-green-600 py-5 text-center">Log In</h1>
            <form onSubmit={handleLogin}>
                <div className="hero bg-base-200 py-10">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <fieldset className="fieldset">
                                <label className="fieldset-label">Email</label>
                                <input type="email" name="email" className="input" placeholder="Email" />
                                <div className="py-2 relative ">
                                    <div className="">
                                        <label className="fieldset-label mb-1">Password</label>
                                        <input type="password" name="password" className="input" placeholder="Password" />
                                    </div>
                                
                                </div>
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Log In</button>
                            </fieldset>


                            <p>New to this website? Please  <Link to="/register">Register</Link> </p>

                            <button onClick={handleGoogleSignIn} className="btn-ghost">Sign In With Google </button>
                           
                        </div>
                    </div>

                </div>

            </form>
        </div>
    );
};

export default Login;