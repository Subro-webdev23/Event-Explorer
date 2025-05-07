import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useLocation } from 'react-router';

const ForgetPassword = () => {
    const { ForgetPassword } = useContext(AuthContext)
    const location = useLocation();
    console.log("forget pass", location);

    const handleReset = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;

    }
    return (
        <div>
            <div className="min-h-screen flex items-center justify-center px-4">
                <div className="max-w-md w-full bg-base-300 p-8 rounded-2xl shadow-lg">
                    <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
                        Forgot Your Password?
                    </h2>
                    <p className="text-sm text-gray-600 mb-6 text-center">
                        Enter your email and we'll send you a password reset link.
                    </p>
                    <form onSubmit={handleReset} className="space-y-4">
                        <input
                            type="email"
                            defaultValue={location.state}
                            name='email'
                            placeholder="Email address"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                            type='submit'
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition">
                            Reset
                        </button>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgetPassword;