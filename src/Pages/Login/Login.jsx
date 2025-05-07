import React, { useContext, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';

const Login = () => {
    const [show, setShow] = useState(false);
    const { signIn, signInGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const emailInputRef = useRef();
    const handleForgetPassword = () => {
        const value = emailInputRef.current.value;
        // console.log(value);
        navigate("/forget", { state: value })
    }
    const handleEye = () => {
        setShow(!show);
    }
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(res => {
                const user = res.user;
                // console.log(user);
                navigate(`${location.state ? location.state : "/"}`);

            })
            .catch(error => {
                const errorCode = error.code;
                // const errorMassage = error.massage;
                toast.error(errorCode)
                // alert(errorCode);
                // console.log(error);

            })
    }
    const handleGoogleLogIn = () => {
        signInGoogle()
            .then((result) => {
                // console.log("result", result);
                toast.success("Loged in Successeful!")
                navigate(`${location.state ? location.state : "/"}`);

            })
            .catch(error => {
                const errorCode = error.code;
                alert(errorCode);
            })
    }

    return (
        <div className="hero-content flex-col">
            <Helmet>
                <title>Log in</title>
            </Helmet>
            <h1 className="text-5xl font-bold">Login now!</h1>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <form onSubmit={handleLogin} className="fieldset">
                        <label className="label">Email</label>
                        <input ref={emailInputRef} name='email' type="email" defaultValue={"google@gmail.com"} className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input name='password' defaultValue={"google@gmail.com"} type={show ? "text" : "password"} className="input relative" placeholder="Password" />

                        <div><p onClick={() => handleForgetPassword()} className="link link-hover">Forgot password?</p></div>

                        <button className="btn btn-neutral mt-4">Login</button>
                    </form>

                    <button className='cursor-pointer absolute top-33 z-1 right-15' onClick={handleEye}>{show ? <IoMdEye size={20} /> : <IoMdEyeOff size={20} />}</button>
                    <p>Don't Have an Account ? Please <Link className='text-blue-500 underline' to={"/register"}>Register</Link> Now</p>
                    <button onClick={handleGoogleLogIn} className="btn bg-white text-black border-[#e5e5e5]">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;