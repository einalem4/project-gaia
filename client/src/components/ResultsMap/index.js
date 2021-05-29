// import React from 'react';
// import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps';
// const GOOGLE_KEY = process.env.REACT_APP_GOOGLE_KEY;

// function Map() {
//     const events = [
//         {
//             name: 'Cleanup 1',
//             address: '1213 Summa Blvd, Lehigh Acres'
//         }
//     ];
    
//     return(
//         <GoogleMap 
//             defaultZoom={10} 
//             defaultCenter={{ lat: 26.611080, lng: -81.634163 }} 
//         >
//         </GoogleMap>
//     );
// };

// const WrappedMap = withScriptjs(withGoogleMap(Map));

// const ResultsMap = () => {
//     return(
//         <div style={ {width: '100vw', height: '100vh'} }>
//             <WrappedMap 
//                 googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${GOOGLE_KEY}`}
//                 loadingElement={<div style={ {height: '100%'} } />} 
//                 containerElement={<div style={ {height: '100%'} } />} 
//                 mapElement={<div style={ {height: '100%'} } />} 
//             />
//         </div>
//     );
// };

// export default ResultsMap;