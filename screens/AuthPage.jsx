import React from 'react';
import { View } from 'react-native'; // Import View from 'react-native'
import FacebookAuth from './FacebookAuth'; // Assuming you have a FacebookAuth component
import GoogleAuth from './GoogleAuth'; // Assuming you have a GoogleAuth component

const AuthPage = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <FacebookAuth />
  
        <GoogleAuth />
      
    </View>
  );
};

export default AuthPage;