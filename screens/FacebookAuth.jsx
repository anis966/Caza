import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { loginInWithPermissions } from '@fadidev/react-native-fblogin';
import { WebView } from 'react-native-webview';

class FacebookAuth extends Component {
  loginIn = () => {
    return loginInWithPermissions({
      runNow: true,
      redirectUrl: 'https://facebook.com/connect/login_success.html',
      getMyInformationsFields: ['id,first_name,last_name,name,email,picture'],
      clientId: '1103569104349638',
      secretKey: 'ba96e245e20b8a1b5b64a9d03efb08a7',
      onLoginSuccess: data => console.log(data),
      onLoginFailure: error => console.log(error),
    });
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'space-evenly', width: '50%', alignSelf: 'center', marginVertical: '10%' }}>
        <Button onPress={this.loginIn} title="Login" />
      </View>
    );
  }
}

export default FacebookAuth;
