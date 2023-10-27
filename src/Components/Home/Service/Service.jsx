import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

// !! Service Main Component

const Service = () => {
    const [services, setServices] = useState([])

useEffect(() => {
    fetch('http://localhost:5000/services')
    .then(res => res.json())
    .then(data => setServices(data))

}, [])
// console.log(services);


    return (
        <div>
            <div>
                <div className='text-center space-y-5'>
                    <h2 className='text-xl font-semibold text-[#FF3811]'>Service</h2>
                    <h2 className='text-5xl font-semibold '>Our Service Area</h2>
                    <p className='text-[#737373]'>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {
                   services?.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Service;