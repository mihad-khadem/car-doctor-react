// import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';
import useServices from '../../../hooks/useServices';
import { useState } from 'react';

// !! Service Main Component

const Service = () => {
    const [asc, setAsc] = useState(true)
    const [search, setSearch] = useState('')
    const services = useServices(asc, search)
//     const [services, setServices] = useState([])

// useEffect(() => {
//     fetch('https://car-dr-server.vercel.app/services')
//     .then(res => res.json())
//     .then(data => setServices(data))

// }, [])
// console.log(services);

const handleSearch = e => {
    e.preventDefault();
    const form = new FormData(e.currentTarget)
    const searchText = form.get('search')
    // console.log(searchText);
    setSearch(searchText)
}


    return (
        <div id='#service'>
            <div >
                <div className='text-center space-y-5'>
                    <h2 className='text-xl font-semibold text-[#FF3811]'>Service</h2>
                    <h2 className='text-5xl font-semibold '>Our Service Area</h2>
                    <p className='text-[#737373]'>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <button onClick={() => setAsc(!asc)} className='btn bg-neutral text-white'>{asc ? 'High to Low' : 'Low to High'}</button>
                    <form onSubmit={handleSearch}>
                    <input type="text" name='search' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    <input type="submit" className='btn btn-outline ml-2' value="Search Here"/>
                    </form>
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