import Lottie from 'lottie-react';
import registerLottie from '../../assets/lottie/register.json';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContrext/AuthContrext';
import { Link } from 'react-router-dom';

const Register = () => {
    // USE CONTEXT
    const { setLoading, createUser, setUser, loading} = useContext(AuthContext);

    const handeleRegisterForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const pass = form.pass.value;

        // USER SIGN IN
        createUser(email, pass)
        .then(res => {
            setUser(res.user);
            setLoading(false);
        }).catch(err => {
            console.log(err)
        })
    }
    return (
        <div>
            <div className='grid lg:grid-cols-2 items-center gap-8'>
                <div className='my-6 order-1 lg:order-0'>
                    <div className="card-body mx-auto">
                        <form onSubmit={handeleRegisterForm}>
                            <fieldset className="fieldset">
                                <label className="label">Email <span className='text-red-500'>*</span></label>
                                <input name="email" type="email" className="input w-full" placeholder="Email" required />
                                <label className="label">Password <span className='text-red-500'>*</span></label>
                                <input name='pass' type="password" className="input w-full" placeholder="Password" required />
                                {loading ? <span className="loading loading-spinner loading-xl mx-auto"></span>
                                :<button className="btn btn-neutral mt-4 bg-second">Create Account</button>}
                                <p className='mt-4 text-sm'>Already have an account ? <Link to="/login" className='underline font-bold text-first'>Log-in</Link></p>
                            </fieldset>
                        </form>
                    </div>
                </div>
                <div className='mx-auto'>
                    <Lottie style={{ width: "500px" }} animationData={registerLottie} loop={true} />
                </div>
            </div>
        </div>
    );
};

export default Register;