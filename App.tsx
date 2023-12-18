import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GoogleAuth from './screens/GoogleAuth'; 
import HomeScreen from './screens/HomeScreen'; 
import FacebookAuth from './screens/FacebookAuth'; 
import AuthPage from './screens/AuthPage'; 


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="AuthPage"
        screenOptions={{
          headerShown: false, // Hide the header for all screens
        }}
      >
        <Stack.Screen name="AuthPage" component={AuthPage} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="GoogleAuth" component={GoogleAuth} />
        <Stack.Screen name="fbAuth" component={FacebookAuth} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
