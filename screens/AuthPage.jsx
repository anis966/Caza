import React from 'react';
import { View, Text, TextInput, TouchableOpacity , StyleSheet} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import FacebookAuth from './FacebookAuth';
import GoogleAuth from './GoogleAuth';

const AuthPage = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>

      <Text style={{ color: '#2D3033', textAlign: 'center', fontSize: 18, fontWeight: '400', lineHeight: 25 }}>
        Nous sommes ravis de te revoir !
      </Text>

      <View style={{ width: '90%', height: 60, padding: 10, borderRadius: 15, backgroundColor: '#ECEFF3', alignSelf: 'center', marginTop: 20 }}>
        <TextInput
          style={{ flex: 1 }}
          placeholder="Adresse e-mail"
        />
      </View>

      <View style={{ width: '90%', height: 60, padding: 10, borderRadius: 15, backgroundColor: '#ECEFF3', alignSelf: 'center', marginTop: 10 }}>
        <TextInput
          style={{ flex: 1 }}
          placeholder="mot de passe"
          secureTextEntry
        />
      </View>

    
      <TouchableOpacity style={styles.buttonContainer}>
      <LinearGradient colors={['#4B9AFF', '#004CAD']} style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Continuer</Text>
        </LinearGradient>
      </TouchableOpacity>

      <Text style={styles.forgotPassword}>Mot de passe oublié ?</Text>
      <View style={styles.lineContainer}>
        <View style={styles.line}></View>
        <Text style={styles.orText}>Ou</Text>
        <View style={styles.line}></View>
      </View>
      <View style={{ marginVertical: 10 }} /> 

      <GoogleAuth />
      <View style={{ marginVertical: 10 }} /> 
      <FacebookAuth />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: '90%',
    height: 60,
    padding: 10,
    borderRadius: 15,
    backgroundColor: '#ECEFF3',
    alignSelf: 'center',
    marginTop: 10,
  },
  buttonContainer: {
    width: '90%',
    height: 54,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
    marginVertical: 10,
    borderRadius: 40,
    backgroundColor: 'linear-gradient(91deg, #4B9AFF -3.39%, #004CAD 100.14%)',
    },
    buttonText: {
      color: 'white',
    },
  forgotPassword: {
    color: '#344254',
    textAlign: 'center',
    marginTop: 10,
  },
  lineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#344254',
    marginHorizontal: 10,
  },
  orText: {
    color: '#344254',
    fontSize: 16,
  },
});

export default AuthPage;
