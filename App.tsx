import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Game from './src/Game';
import Cafe from './src/Cafe';
import Profile from './src/Profile';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen name ="Home" component={Game} options={{title:'Welcome'}}/>
        <Stack.Screen name="Profile" component={Profile} options={{title:'Profile'}} />
        <Stack.Screen name="Cafe" component={Cafe} options={{title:'Cafe'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;