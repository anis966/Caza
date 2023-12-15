import React, { Component, useState  } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

export default class HomeScreen extends Component {


  constructor(props) {
    super(props);
    this.state = {
      userInfo: null,
      name: null,
      picture: null,
      email: null,
    };
  }

  
  render() {

// from the props we passed from the other file we will be recieving it here!
    const { user } = this.props.route.params
    //destructure the object to get what we need..
    const { name, email, picture } = user;

// then display the data!
    return (
      <View style={styles.container}>
        {/* print props */}
        <Image source={{ uri: picture }} style={{ width: 100, height: 100 }} />
        <Text style={styles.info}>Name: {name}</Text>
        <Text style={styles.info}>Email: {email}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  info: {
    fontSize: 20,
    color: 'black',
  },
});