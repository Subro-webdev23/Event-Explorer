import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const Profile = () => {
    const { user, updateUser, setUser } = useContext(AuthContext);
    console.log("profile", user.displayName);
    const handleSave = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const url = form.url.value;
        updateUser({ displayName: name, photoURL: url })
            .then(() => {
                setUser({ ...user, displayName: name, photoURL: url });
                toast.success("Update Successful!")
            })
            .catch((error) => {
                console.log(error);
            })

    }
    return (
        <div>
            <Helmet>
                <title>Profile</title>
            </Helmet>

            <div className=" flex lg:flex-row py-10 gap-10">
                <img
                    src={user.photoURL}
                    className="max-w-sm rounded-lg h-80 object-cover shadow-2xl"
                />
                <div>
                    <h1 className="text-5xl font-bold">{user.displayName}</h1>
                    <p className="py-6">Email: {user.email} </p>
                    {/* <button className="btn btn-primary">Get Started</button> */}
                    <div className="card-body card">
                        <form onSubmit={handleSave} className="fieldset">
                            <input className='p-3 rounded border-1 border-gray-300 mb-5' name='name' type="text" placeholder='Name' required />
                            <input className='p-3 rounded border-1 border-gray-300 mb-5' name='url' type="text" placeholder='Photo URL' required /><br />
                            <button type='submit' className="btn btn-primary">Save</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Profile;