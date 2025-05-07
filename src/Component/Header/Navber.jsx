import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const Navber = () => {
    const { user, logOut } = useContext(AuthContext);
    // console.log("Header", user);
    const handleLogOut = () => {
        logOut()
            .then(() => {
                // alert("Log out Successfully!")
                toast.error("Log out Successfully!")
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const links = <>
        <NavLink to="/" className="font-medium mr-5">Home</NavLink>
        <NavLink to="/creatEvent" className="font-medium mr-5">Creat Event</NavLink>
        <NavLink to="/profile" className="font-medium mr-5">My Profile</NavLink>
    </>
    return (
        <div className='sticky top-0 mb-5 z-10'>
            <div className='bg-[#EFF6FF70] backdrop-blur-xl  shadow-sm'>
                <div className="navbar  md:max-w-6xl mx-auto px-0">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                {
                                    links
                                }
                            </ul>
                        </div>
                        <a className="font-bold text-3xl">Event Explorer</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <div className="navbar-end">
                        {user?.photoURL && (
                            <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
                                <img
                                    src={user.photoURL}
                                    alt="User"
                                    className="w-8 h-8 rounded-full mr-5 "
                                />
                            </div>
                        )}

                        {/* <img className='w-8 h-8 mr-5 hover:' src={user?.photoURL} alt={user?.displayName} /> */}

                        {user ? <Link onClick={handleLogOut} className="btn">Log out</Link> : <Link to={"/login"} className="btn">Log in</Link>}
                    </div>
                </div>
            </div >
        </div>


    );
};

export default Navber;