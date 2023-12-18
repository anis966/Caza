import { StyleSheet, Text, TouchableOpacity, View , Image} from "react-native";
import React from "react";
import * as WebBrowser from "expo-web-browser";
import { useNavigation } from "@react-navigation/native";
import * as Linking from "expo-linking";


const GoogleUp = () => {

  const navigation = useNavigation();


  const GOOGLE_CLIENT_ID = "889361832969-bimdap0ffqo6tp49a23brnmav427nn41.apps.googleusercontent.com"
  const GOOGLE_REDIRECT_URI = "https://6001-apolloimmo-appclient-3vo7irhin8u.ws-eu107.gitpod.io/auth1/google"

  const handlePress = async () => {
    const result = await WebBrowser.openAuthSessionAsync(
      `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${GOOGLE_REDIRECT_URI}&scope=https://www.googleapis.com/auth/userinfo.email%20https://www.googleapis.com/auth/userinfo.profile&access_type=offline&state=1234_purpleGoogle&prompt=consent`,
      GOOGLE_REDIRECT_URI
    );
    console.log(result)
    if (result.type === "success" ) {

      // get back the params from the url
      const params = Linking.parse(result.url);

      const { email, name, picture } = params.queryParams;

      //pass in all the user data in an object...
      const user = {
        email,
        name,
        picture,
      };

      // navigate to the HomeScreen and pass the user object
      navigation.navigate("Home", { user });
      console.log(params)


    }
  }

  return (
    <TouchableOpacity onPress={handlePress} style={styles.googleButton}>
      <Image source={{ uri: 'https://w7.pngwing.com/pngs/989/129/png-transparent-google-logo-google-search-meng-meng-company-text-logo-thumbnail.png' }} style={styles.googleLogo} />
      <Text style={styles.buttonText}>Continuer avec Google</Text>
    </TouchableOpacity>
  );
};


export default GoogleUp;

const styles = StyleSheet.create({
  googleButton: {
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
  googleLogo: {
    width: 30,
    height: 30,
    borderRadius: 50 / 2,
    marginRight: 10,
  },
});
