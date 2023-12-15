import React from 'react';
import { View, Button } from 'react-native';
import Constants from 'expo-constants';
import * as Facebook from 'expo-auth-session/providers/facebook';
import * as AuthSession from 'expo-auth-session';
import { ResponseType } from 'expo-auth-session';
import * as WebBrowser from 'expo-web-browser';

WebBrowser.maybeCompleteAuthSession();


export default function FacebookAuth() {
  const [request, response, prompt] = Facebook.useAuthRequest(
    {
      clientId: "1103569104349638",
      responseType: ResponseType.Code,
    }

  );

  React.useEffect(() => {
    console.log("response: => ", response);
    if (response?.type === 'success') {
      const { code } = response.params;

       const fetchData = async () => {
        
        const requestOptions = {
          method: 'GET',
          headers: {
            "Content-Type": "application/json"
          }
        };

        const link = "https://graph.facebook.com/v7.0/oauth/access_token" +
        "?client_id=*******************" +
        "&redirect_uri=https://auth.expo.io/@********/**********" +
        "&client_secret=*******************" +
        "&code=" + code;
        
        const response = await fetch(link, requestOptions);
        const body = await response.json();
        console.log("fetchData response: => ", body);
      }

      fetchData().catch(console.error);
    }
  }, [response]);
  

  return (
    <View style={{ flex: 1, justifyContent: 'space-evenly', width: '50%', alignSelf: 'center', marginVertical: '10%' }}>
      <Button onPress={() => prompt()} title="Login with FB" />
    </View>
  );
}
