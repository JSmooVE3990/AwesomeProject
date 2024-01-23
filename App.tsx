import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Game from './src/Game';

const App = () => {
  return (
    <NavigationContainer >
      <Game/>
    </NavigationContainer>
  );
};

export default App;