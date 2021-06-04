export const geoCodeEvents = (event) => {
    const regEx = / /g;
    return fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${event.address.replace(regEx, '%') + '%' + event.city.replace(regEx, '%') + '%' + event.state}&key=${process.env.REACT_APP_GOOGLE_KEY}`).then(response => response.json());
};

export const geoCodeCity = (city) => {
    const regEx = / /g;
    return fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${city.replace(regEx, '%')}&key=${process.env.REACT_APP_GOOGLE_KEY}`).then(response => response.json());
};