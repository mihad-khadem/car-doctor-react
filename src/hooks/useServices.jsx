import React, { useEffect, useState } from 'react';
import { axiosSecure } from './useAxios';

const useServices = (asc, search) => {
    const [services, setServices] = useState([])
    useEffect(() => {
        // fetch('https://car-dr-server.vercel.app/services')
        // .then((response) => response.json())
        // .then(data => {
        //     setServices(data)
        //     console.log(data);
        // })
        axiosSecure(`/services?sort=${asc ? 'asc' : 'desc'}&search=${search}`)
        .then(res => setServices(res.data))

    }, [asc, search])
    return services
};

export default useServices;