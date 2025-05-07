import React, { use } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Link } from 'react-router';
import { CiStar } from 'react-icons/ci';

const EventCard = ({ signleEvent }) => {
    // console.log(signleEvent);
    const { setView } = use(AuthContext)
    const { id, thumbnail, name, date, location, interested } = signleEvent;

    const handleView = (viewId) => {
        setView(viewId)

    }

    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img className='w-[350px] h-[250px] object-cover'
                    src={thumbnail}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{location}</p>
                <div className='flex justify-between'>
                    <p>{date}</p>
                    <div className='text-blue-400 text-end flex items-center'><CiStar size={20} className='mr-1' />{interested} Interested</div>
                </div>

                <div className="card-actions justify-end">
                    <Link to={`/details/${id}`} onClick={() => handleView(id)} className="btn btn-primary">View More</Link>
                </div>
            </div>
        </div>
    );
};

export default EventCard;