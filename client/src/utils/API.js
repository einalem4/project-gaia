export const geoCode = (query) => {
    return fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${query}&key${process.env.REACT_APP_GOOGLE_KEY}`);
};