import React, { useState, useEffect } from 'react';
import '../LocationInfo/LocationInfo.css'



function LocationInfo() {
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [sunrise, setSunrise] = useState('');
    const [sunset, setSunset] = useState('');

    useEffect(() => {
        // Use HTML Geolocation API to get latitude and longitude
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                setLatitude(position.coords.latitude);
                setLongitude(position.coords.longitude);
            });
        }

        // Fetch sunrise and sunset data
        fetchSunriseSunsetData();
    }, []);

    const fetchSunriseSunsetData = () => {
        // Replace with the actual URL to fetch sunrise/sunset data
        const apiUrl = `https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}`;


        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                if (data.results) {
                    const today = data.results.sunrise;
                    const tomorrow = data.results.sunset;

                    setSunrise(today);
                    setSunset(tomorrow);
                }
            })
            .catch((error) => {
                console.error('Error fetching sunrise/sunset data:', error);
            });
    };

    return (
        <div className="location-details">
            <div className="location-info">
                <p>
                    Latitude: {latitude} <br />
                    Longitude: {longitude}
                </p>
                <p>
                    Sunrise today: {sunrise} <br />
                    Sunset today: {sunset}
                </p>
            </div>
        </div>
    );
}

export default LocationInfo;
