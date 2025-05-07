import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';

const Register = () => {
    const [error, setError] = useState("");
    const [show, setShow] = useState(false);
    const { createUser, setUser, updateUser, signInGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleEye = () => {
        setShow(!show);
    }
    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;


        if (password !== confirmPassword) {
            setError("Password not Match!");
            toast.error("Password not Match!")
            return;
        }
        if (password.length < 6) {
            setError("Password must be at least 6 characters long!");
            toast.error("Password must be at least 6 characters long!")
            return;
        }

        if (!/[A-Z]/.test(password)) {
            setError("Password must contain at least one uppercase letter!");
            toast.error("Password must contain at least one uppercase letter!")
            return;
        }

        if (!/[a-z]/.test(password)) {
            setError("Password must contain at least one lowercase letter!");
            toast.error("Password must contain at least one lowercase letter!")
            return;
        }

        createUser(email, password)
            .then(res => {
                const user = res.user;
                // setUser(user);
                // console.log(user);
                updateUser({ displayName: name, photoURL: photo })
                    .then(() => {
                        setUser({ ...user, displayName: name, photoURL: photo });
                        toast.success("Register Successful!")
                        navigate("/");
                    })
                    .catch((error) => {
                        console.log(error);
                        setUser(user);
                    })
            })
            .catch(error => {
                const errorCode = error.code;
                console.log(errorCode)
            })
    }
    const handleGoogleLogIn = () => {
        signInGoogle()
            .then((result) => {
                console.log("result", result);
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
                <title>Register</title>

            </Helmet>
            <h1 className="text-5xl font-bold">Register now!</h1>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <form onSubmit={handleRegister} className="fieldset">
                        <label className="label">Name</label>
                        <input name='name' type="text" className="input" placeholder="Name" />
                        <label className="label">Photo URL</label>
                        <input name='photo' type="text" className="input" placeholder="Photo URL" />
                        <label className="label">Email</label>
                        <input name='email' type="email" className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input name='password' type={show ? "password" : "text"} className="input relative" placeholder="Password" />
                        <label className="label">Confirm Password</label>
                        <input name='confirmPassword' type={show ? "password" : "text"} className="input relative" placeholder="Password" />
                        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                        <button type='submit' className="btn btn-neutral mt-4">Register</button>
                    </form>
                    <button className='cursor-pointer absolute top-68 z-1 right-15' onClick={handleEye}>{show ? <IoMdEyeOff size={20} /> : <IoMdEye size={20} />}</button>
                    <button className='cursor-pointer absolute top-86 z-1 right-15' onClick={handleEye}>{show ? <IoMdEyeOff size={20} /> : <IoMdEye size={20} />}</button>
                    <p>Already Have an Account ? Please <Link className='text-blue-500 underline' to={"/login"}>Log in</Link> Now</p>
                    <button onClick={handleGoogleLogIn} className="btn bg-white text-black border-[#e5e5e5]">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Register;