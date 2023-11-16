import React, { useEffect, useState } from 'react';

const useServices = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then((response) => response.json())
        .then(data => {
            setServices(data)
            console.log(data);
        })

    }, [])
    return services
};

export default useServices;