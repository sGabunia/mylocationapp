import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import useLocation from '../hooks/useLocation';

const PersonLocation = () => {
  const [location, errorMessage] = useLocation();

  if (!location) {
    return <ActivityIndicator size="large" color="#000" />;
  }
  return (
    <View style={styles.screen}>
      {errorMessage ? (
        <Text style={styles.warning}>{errorMessage}</Text>
      ) : (
        <View style={styles.location}>
          <Ionicons name="location-sharp" size={50} color="black" />

          <View style={styles.wrapper}>
            <Text style={styles.text}>
              {`Your location is ${location.city}, ${location.street}, ${location.region}, ${location.country} `}{' '}
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default PersonLocation;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  location: {
    alignItems: 'center',
  },
  text: {
    color: '#000',
    fontFamily: 'Ubuntu',
    fontSize: 22,
  },
  warning: {
    color: 'red',
  },
});
