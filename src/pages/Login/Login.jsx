import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContrext/AuthContrext';
import signLottie from '../../assets/lottie/Sign up.json';
import Lottie from 'lottie-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import googleLogo from '../../assets/lottie/Google-Logo.json';

const Login = () => {
    // USE CONTEXT
    const { setLoading, signInUser, setUser, loading, signInWithGoogle } = useContext(AuthContext);

    // location
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state || "/";


    const handeleSignInForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const pass = form.pass.value;
        console.log(email, pass)

        // USER SIGN IN
        signInUser(email, pass)
            .then(res => {
                setUser(res.user);
                setLoading(false);
                navigate(from);
            }).catch(err => {
                console.log(err)
            })
    }

    // HANDEL GOOGLE SIGN IN
    const handelGoogleSignIn = () => {
        signInWithGoogle()
        .then(res => {
            setUser(res.user);
            setLoading(false);
            navigate(from);
        }).catch(err => {
            setLoading(false);
            console.log(err)
        })
    }
    return (
        <div>
            <div className='grid lg:grid-cols-2 items-center gap-8'>
                <div className='my-6 order-1 lg:order-0'>
                    <div className="card-body mx-auto">
                        <div>
                           {loading ? <span className="loading loading-spinner loading-xl mx-auto flex items-center justify-center"></span>
                           : <button onClick={handelGoogleSignIn} className='btn w-full border-1 border-gray-300'>
                                <div className='flex items-center justify-center'>
                                    <Lottie style={{ width: "80px", margin: "0 auto" }} animationData={googleLogo} loop={true} />
                                    <p>SignIn with Google</p>
                                </div>
                            </button>}
                        </div>
                        <div className="divider -mb-2">OR</div>
                        <form onSubmit={handeleSignInForm}>
                            <fieldset className="fieldset">
                                <label className="label">Email <span className='text-red-500'>*</span></label>
                                <input name="email" type="email" className="input w-full" placeholder="Email" required />
                                <label className="label">Password <span className='text-red-500'>*</span></label>
                                <input name='pass' type="password" className="input w-full" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                {loading ? <span className="loading loading-spinner loading-xl mx-auto"></span>
                                :<button className="btn btn-neutral mt-4 bg-second">Log In</button>}
                                <p className='mt-4 text-sm'>Are you a new user ? <Link to="/register" className='underline font-bold text-first'>Create Account</Link></p>
                            </fieldset>
                        </form>
                    </div>
                </div>
                <div className='mx-auto'>
                    <Lottie style={{ width: "500px" }} animationData={signLottie} loop={true} />
                </div>
            </div>
        </div>
    );
};

export default Login;