import React from 'react';
import { View, Button, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import Constants from 'expo-constants';
import * as Facebook from 'expo-auth-session/providers/facebook';
import * as AuthSession from 'expo-auth-session';
import { ResponseType } from 'expo-auth-session';
import * as WebBrowser from 'expo-web-browser';
import { useNavigation } from "@react-navigation/native";

WebBrowser.maybeCompleteAuthSession();


export default function FacebookAuth() {

  const navigation = useNavigation();


  const [request, response, promptAsync] = Facebook.useAuthRequest({
    clientId: '1103569104349638',
    responseType: ResponseType.Code,
    redirectUri: "https://6001-apolloimmo-appclient-3vo7irhin8u.ws-eu107.gitpod.io/auth1/facebook"

  });



  console.log("request: => ", request);
  console.log("response: => ", response);

  React.useEffect(() => {
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
          "?client_id=1103569104349638" +
          "&redirect_uri=https://6001-apolloimmo-appclient-3vo7irhin8u.ws-eu107.gitpod.io/auth1/facebook" +
          "&client_secret=ba96e245e20b8a1b5b64a9d03efb08a7" +
          "&grant_type=authorization_code" +
          "&code_verifier=" + request?.codeVerifier +
          "&code=" + code;

        const response = await fetch(link, requestOptions);
        const body = await response.json();
        console.log("fetchData response: => ", body);

        const { access_token } = body;

        const response2 = await fetch(
          `https://graph.facebook.com/me?access_token=${access_token}&fields=id,name,picture,email`, requestOptions
        );

        const parsedResponse = await response2.json();
        console.log(parsedResponse)
        const picture = parsedResponse?.picture?.data?.url;
        const email = parsedResponse?.email;
        const name = parsedResponse?.name;
        const user = {
          name,
          picture,
          email
        };

        // navigate to the HomeScreen and pass the user object
        navigation.navigate("Home", { user });



      }

      fetchData().catch(console.error);
    }
  }, [response]);

  return (
    <TouchableOpacity onPress={() => promptAsync()} style={styles.facebookButton}>
      <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png' }} style={styles.facebookLogo} />
      <Text style={styles.buttonText}>Continuer avec Facebook</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  facebookButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 48,
    borderWidth: 1,
    borderColor: '#344254',
    paddingVertical: 10,
    paddingHorizontal: 15,
    width: '80%',

  },
  text: {
    color: 'white',
    fontSize: 20,

  },
  buttonText: {
    color: '#1F2C39',
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 25,
  },
  facebookLogo: {
    width: 20,
    height: 20,
    borderRadius: 50 / 2,
    marginRight: 10,
  },
});