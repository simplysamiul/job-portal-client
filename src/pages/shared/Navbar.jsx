import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo-01.svg'
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContrext/AuthContrext';

const Navbar = () => {
    const {user, logOut, setLoading} = useContext(AuthContext);
    const links = <>
        <li><NavLink to="/" className='text-second font-semibold'>Home</NavLink></li>
        <li><a className='text-second font-semibold'>Find Job</a></li>
        <li><a className='text-second font-semibold'>Recruiters</a></li>
        <li><a className='text-second font-semibold'>Candidate</a></li>
        <li><a className='text-second font-semibold'>Blog</a></li>
        {user && <>
            <li><NavLink to="/myApplications" className='text-second font-semibold'>My Applications</NavLink></li>
        </>}
    </>

    const handelSignOut = () => {
        logOut()
        .then(() => {
            setLoading(false)
        }).catch(err => {
            setLoading(false)
            console.log(err)
        })
    }
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                       {links}
                    </ul>
                </div>
                <Link to="/"><img src={logo} alt="Logo-Img" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                   {links}
                </ul>
            </div>
            <div className="navbar-end">
                {user ?<button onClick={handelSignOut} className='btn font-bold text-first border-1 border-first'>Log Out</button>
                :<Link className='btn text-white font-bold bg-first' to="/login">Log In</Link>}
            </div>
        </div>
    );
};

export default Navbar;