import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './info.css';

const MyComponent = () => {
  const [locationData, setLocationData] = useState(null);

  useEffect(() => {
    // Function to update the time
    function updateTime() {
      const timeElement = document.getElementById('time');
      const now = new Date();
      const timeString = now.toLocaleTimeString();
      timeElement.textContent = `Time: ${timeString}`;
    }

    // Function to update battery status
function updateBattery() {
  const batteryElement = document.getElementById('battery');

  if ('getBattery' in navigator) {
    navigator.getBattery().then(function (battery) {
      const batteryLevel = (battery.level * 100).toFixed(2);
      batteryElement.textContent = `Battery: ${batteryLevel}%`;

      // Check if battery level is less than 20% and change text color to red
      if (battery.level < 0.2) {
        batteryElement.style.color = 'red';
        batteryElement.style.backgroundColor = 'white';
      } else {
        batteryElement.style.color = 'green';
        batteryElement.style.backgroundColor = 'transparent';

      }
    });
  } else {
    batteryElement.textContent = 'Battery status not supported';
  }
}


    // Function to fetch visitor's location and IP address
    const fetchLocation = async () => {
      try {
        const response = await axios.get('https://ipapi.co/json/');
        const data = response.data;
        setLocationData(data);
      } catch (error) {
        console.error('Error fetching location:', error);
      }
    };

    // Call the function to fetch location data when the component mounts
    fetchLocation();

  

    // Set interval to update time every second (1000ms)
    setInterval(updateTime, 1000);

    // Set interval to update battery status every second (1000ms)
    setInterval(updateBattery, 1000);

    // Clean up intervals on component unmount
    return () => {
      clearInterval(updateTime);
      clearInterval(updateBattery);
    };
  }, []);

  return (
    <div className='body'>

      {locationData && (

        <div className='info'>
        <div className='time' id="time"></div>
        <div className='battery' id="battery"></div>
        <div className='lat'>mjeevanantham2024@gmail.com</div>
        {/* <div className='city'> {locationData.city}, {locationData.region}, {locationData.country_name}</div>
        <div className='ip'> {locationData.ip}</div>
        <div className='long'>Your longitude: {locationData.longitude}</div>
        <p>*It can be only seen by you</p> */}
        </div>
      )}
    </div>
  );
};

export default MyComponent;
