import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Game from './src/Game';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Profile from './src/Profile';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} options={{title:'Profile'}} />
      <Stack.Screen name ="Home" component={Game} options={{title:'Welcome'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;