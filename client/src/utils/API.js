const GOOGLE_KEY = process.env.REACT_APP_GOOGLE_KEY;

export const geoCode = (query) => {
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${query.address.replace(' ', '+')}&key${GOOGLE_KEY}`);
};