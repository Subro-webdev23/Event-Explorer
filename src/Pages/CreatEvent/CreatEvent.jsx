import React from 'react';
import { Helmet } from 'react-helmet';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';

const CreatEvent = () => {
    const navigate = useNavigate();
    const handleCreat = (e) => {
        e.preventDefault();
        toast.success("You have to Pay to creat Event!");
        navigate("/pricing")
    }
    return (
        <div className='mb-20'>
            <Helmet>
                <title>Creat Event</title>
            </Helmet>
            <h2 className='text-3xl font-bold mt-25 '>Creat Your Event</h2>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <form onSubmit={handleCreat} className="fieldset">
                        <label className="label">Event Photo URL</label>
                        <input type="url" className="input" placeholder="Photo URL" />
                        <label className="label">Event Title</label>
                        <input type="text" className="input" placeholder="Event Title" />
                        <label className="label">Event Discription</label>
                        <input type="text" className="input" placeholder="Event DiscriptionL" />
                        <label className="label">Event Entry Fee</label>
                        <input type="number" className="input" placeholder="Event Entry Fee" />
                        <label className="label">Event Location</label>
                        <input type="text" className="input" placeholder="Event Location" />
                        <button type='submit' className="btn btn-neutral mt-4">Creat</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreatEvent;