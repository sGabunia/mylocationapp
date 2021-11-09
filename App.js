import React from 'react';
import PersonLocation from './components/PersonLocation';
import {useFonts} from 'expo-font';

const App = () => {
  const [loaded] = useFonts({
    Ubuntu: require('./assets/Ubuntu/Ubuntu-MediumItalic.ttf'),
  });

  if (!loaded) {
    return null;
  }
  return <PersonLocation />;
};

export default App;
