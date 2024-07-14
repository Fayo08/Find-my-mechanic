import React from 'react';
import Header from '../../components/Header/Header';
import LocationsMap from '../../components/Map/LocationsMap';
import { useState, useEffect } from 'react';

function MechanicDetails(props) {
    // const [mechanicDetails setMechanicDetails] = useState([])
    // useEffect(() => {
    //     const fetchServices = async () => {
    //       try {
    //         const response = await axios.get(`${api_URL}/api/services`);
    //         console.log("Fetched services:", response.data);
    //         setServices(response.data);
    //       } catch (error) {
    //         console.error('Failure fetching services ', error);
    //       }
    //     };
    //     fetchServices();
    //   }, []);


    return (
        <div>
            <Header />
            <LocationsMap />
            
        </div>
    );
}

export default MechanicDetails;