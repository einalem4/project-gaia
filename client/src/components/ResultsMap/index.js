import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps';
import { geoCode } from '../../utils/API';

const GOOGLE_KEY = process.env.REACT_APP_GOOGLE_KEY;

const ResultsMap = props => {
    // const eventData = [props];

    // console.log(eventData);

    // const getGeoCode = async (query) => {
    //     try {
    //         const response = await geoCode(query)

    //         if(!response.ok) {
    //             throw new Error('Something went wrong');
    //         }

    //         const { coordinates } = await response.json();

    //         console.log(coordinates);
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };

    // const returnedEventData = eventData.mapData.map(event => (getGeoCode(event)));

    // console.log(returnedEventData);
    
    function Map() {
        return(
            <GoogleMap 
                defaultZoom={10} 
                defaultCenter={{ lat: 26.611080, lng: -81.634163 }} 
            >
            </GoogleMap>
        );
    };
    
    const WrappedMap = withScriptjs(withGoogleMap(Map));

    return(
        <div style={ {width: '100%', height: '100%'} }>
            <WrappedMap 
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${GOOGLE_KEY}`}
                loadingElement={<div style={ {height: '100%'} } />} 
                containerElement={<div style={ {height: '100%'} } />} 
                mapElement={<div style={ {height: '100%'} } />} 
            />
        </div>
    )
};

export default ResultsMap;