import React from 'react';
import Slider from '../../Component/Slider/Slider';
import { Link, useLoaderData } from 'react-router';
import EventCard from '../../Component/EventCard/EventCard';
import { Helmet } from 'react-helmet';

const Home = () => {
    const data = useLoaderData();
    // console.log(data);
    const popularData = data.filter(signleEvent => signleEvent.interested > 2000);
    const unique = [...  new Set(data.map(signleCetagory => signleCetagory.category))]
    // console.log("unique", typeof unique);


    return (
        <div>
            <Helmet>
                <title>Home</title>

            </Helmet>
            {/* Slider section*/}
            <section className='bg-base-100'>
                <Slider data={data}></Slider>
            </section>
            {/* Popular Events */}
            <section>
                <h2 className='text-3xl font-bold mt-25 my-15'>Popular Events</h2>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5'>
                    {
                        popularData.map(signleEvent => <EventCard key={signleEvent.id} signleEvent={signleEvent}></EventCard>)
                    }
                </div>
            </section>
            {/* Upcoming Events Section */}
            <section>
                <h2 className='text-3xl font-bold my-15'>Upcoming Events Section</h2>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5'>
                    {
                        data.map(signleEvent => <EventCard key={signleEvent.id} signleEvent={signleEvent}></EventCard>)
                    }
                </div>
            </section>
            {/* Interested Events */}
            <section>
                <h2 className='text-3xl font-bold my-15'>Select your Interested Events by Category</h2>
                <div className='grid grid-cols-3 gap-5 md:grid-cols-4 mb-15'>
                    {
                        unique.map(cetagory => <Link key={cetagory.id} to={`/selectCetagory/${cetagory}`} className="btn btn-outline btn-primary ">{cetagory}</Link>)
                    }
                </div>

            </section>
        </div>
    );
};

export default Home;