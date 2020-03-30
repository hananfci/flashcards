

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import * as Font from 'expo-font';

export default class App extends React.Component { 
  state = {
    fontLoaded: false,
  };
  componentDidMount() {
   Font.loadAsync({
      'ComicNeue-Bold': require('./assets/fonts/ComicNeue-Bold.ttf'),
    });

    this.setState({ fontLoaded: true });
  }
  render(){
  return (
  
     
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {
        this.state.fontLoaded ? (
          <Text style={{ fontFamily: 'ComicNeue-Bold', fontSize: 20 }}>
            Hello, world!
          </Text>
        ) : null
      }
    </View>
   
  );
}}
