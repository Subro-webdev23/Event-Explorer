import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useLoaderData, useParams } from 'react-router';

const EventDetails = () => {
    const [success, setSuccess] = useState(false);
    const { id } = useParams();
    const data = useLoaderData();


    const findEvent = data.find(event => event.id == id);
    // console.log(findEvent);
    const { description, entry_fee, location, name, thumbnail } = findEvent;
    const handleBook = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        console.log(name, email);
        setSuccess(true);
        setTimeout(() => {
            setSuccess(false);
        }, 2000);


    }
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <Helmet>
                <title>Details</title>

            </Helmet>
            <figure>
                <img
                    src={thumbnail}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <p>Entry_fee :{entry_fee}</p>
                <p>Location : {location}</p>
                {/* add icon Location*/}
                <div>
                    <form onSubmit={handleBook} >
                        <input className='p-3 rounded border-1 border-gray-300 mb-5' name='name' type="text" placeholder='Name' required />
                        <input className='p-3 rounded border-1 border-gray-300 mb-5' name='email' type="Email" placeholder='Email' required /><br />
                        <button type='submit' className="btn btn-primary">Reserve Seat</button>
                    </form>
                    <p className='text-green-700 mt-5'>{success ? "Success! Your seat is booked." : ""}</p>
                </div>
            </div>
        </div>
    );
};

export default EventDetails;