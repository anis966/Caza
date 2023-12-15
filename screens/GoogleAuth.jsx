import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import * as WebBrowser from "expo-web-browser";
import { useNavigation } from "@react-navigation/native";
import * as Linking from "expo-linking";


const GoogleUp = () => {

  const navigation = useNavigation();


  const GOOGLE_CLIENT_ID = "889361832969-bimdap0ffqo6tp49a23brnmav427nn41.apps.googleusercontent.com"
  const GOOGLE_REDIRECT_URI = "https://6001-apolloimmo-appclient-3ogf5izk99o.ws-eu107.gitpod.io/auth1/google"

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
    <View style={styles.container}>
      <TouchableOpacity
        onPress={handlePress}
      >
        <View style={styles.circle}>
          <Text style={styles.text}>G</Text>
        </View>
      </TouchableOpacity>


    </View>
  );
};


export default GoogleUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: "#DEB887",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 20,
  },
});
