import React from 'react';
import { GoogleMap, useLoadScript, withGoogleMap, Marker } from '@react-google-maps/api';
import { geoCodeCity, geoCodeEvents } from '../../utils/API';

const mapContainerStyle = {
    width: '100%',
    height: '100%'
};

const options = {
    disableDefaultUI: true,
    zoomControl: true
}

const ResultsMap = ({city, mapData}) => {
    const center = {
        lat: '',
        lng: ''
    };

    const [coordinates, setCoordinates] = useState(center);

    const getCenter = async () => {return await geoCodeCity(city)};
    

    const markers = [];
    
    Promise.all(mapData.map(async (event) => {
        return markers.push(await geoCodeEvents(event));
    }));

    console.log(markers);


    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY
    });


    if (loadError) return "Error loading maps";
    if (!isLoaded) return "Loading Maps";

    return(
        <div style={{height: '100%'}}>
            <GoogleMap
                mapContainerStyle={mapContainerStyle} 
                zoom={13}
                center={center}
                options={options}  
            >
                {markers.map((event) => (
                    <Marker 
                        key={event.results[0].formatted_address} 
                        position={{ lat: event.results[0].geometry.location.lat, lng: event.results[0].geometry.location.lng }} 
                    />
                ))}
            </GoogleMap>
        </div>
    )
}

export default ResultsMap;