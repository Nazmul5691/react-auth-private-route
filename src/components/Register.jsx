
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const Register = () => {

    const {createUser} = useContext(AuthContext);
    const navigate = useNavigate();

    console.log(createUser);

    const handleRegister = (e) =>{
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(name, email, password);

        createUser(email, password)
        .then(result =>{
            console.log(result.user);
            e.target.reset();
            navigate('/')
        })
        .catch(error =>{
            console.log(error.message);
        })
        
    }



    return (
        <div>
            <h1 className="text-4xl text-green-600 py-5 text-center">Register</h1>
            <form onSubmit={handleRegister}>
                <div className="hero bg-base-200 py-10">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <fieldset className="fieldset">
                                <label className="fieldset-label">Name</label>
                                <input type="text" name="name" className="input" placeholder="name" />
                                <label className="fieldset-label">Email</label>
                                <input type="email" name="email" className="input" placeholder="Email" />
                                <div className="py-2 relative ">
                                    <div className="">
                                        <label className="fieldset-label mb-1">Password</label>
                                        <input type="password" name="password" className="input" placeholder="Password" />
                                    </div>
                                </div>
                                <button className="btn btn-neutral mt-4">Register</button>
                            </fieldset>
                            <p>All ready have an account! Please  <Link to="/login">Log In</Link> </p>
                        </div>
                    </div>

                </div>

            </form>
        </div>
    );
};

export default Register;