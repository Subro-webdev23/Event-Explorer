import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import EventCard from '../../Component/EventCard/EventCard';
import { Helmet } from 'react-helmet';

const SelectCetagory = () => {
    const data = useLoaderData()
    const { cetagory } = useParams();
    // console.log(cetagory, "select");
    const filterData = data.filter(even => even.category == cetagory);
    // console.log(filterData, "fil");


    return (
        <>
            <Helmet>
                <title>{cetagory}</title>

            </Helmet>
            <h2 className='text-3xl font-bold my-15'>Filter by {cetagory}</h2>

            <div className='grid grid-cols-3 gap-5'>
                {
                    filterData.map(signleEvent => <EventCard key={signleEvent.id} signleEvent={signleEvent}></EventCard>)
                }
            </div>
        </>

    );
};

export default SelectCetagory;