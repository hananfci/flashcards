

import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { View,  Text,StatusBar} from 'react-native';
import MainStyle from './styles/MainStyle';
import Navigator from './components/Navigator'
import DeckList from './components/DeckList';
import Constants from 'expo-constants';
import { purple, white } from './utils/colors'

export default class App extends React.Component { 
 
  render(){
  return (
    <Provider store={createStore(reducer)}>
      <View style={{flex:1}} >  
      <View style={{ height: Constants.statusBarHeight }}>
              <StatusBar
              backgroundColor={purple}
                barStyle="light-content" />
              </View>
      <Navigator/> 
    </View>
    </Provider>
   
  );
}
}
