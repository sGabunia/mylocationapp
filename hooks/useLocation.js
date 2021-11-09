import React, {useState, useEffect} from 'react';
import * as Location from 'expo-location';

const useLocation = () => {
  const [location, setLocation] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const getLocation = async () => {
    const {status} = await Location.requestForegroundPermissionsAsync();

    if (status !== 'granted') {
      setErrorMessage('you do not have permission');
      return;
    }

    const {coords} = await Location.getCurrentPositionAsync({});
    const [locationData] = await Location.reverseGeocodeAsync({
      latitude: coords.latitude,
      longitude: coords.longitude,
    });

    setLocation(locationData);
  };

  useEffect(() => {
    getLocation();
  }, []);

  return [location, errorMessage];
};

export default useLocation;
