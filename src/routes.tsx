import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthContext} from './contexts/AuthContext';

import Login from './pages/Login';
import Signup from './pages/Signup';
import Tabbar from './components/Tabbar';

const Stack = createStackNavigator();

const Routes = () => {
  const {token} = useContext(AuthContext);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {token ? (
          <>
            <Stack.Screen name="Tabbar" component={Tabbar} />
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
