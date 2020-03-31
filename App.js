

import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { View,  Text,} from 'react-native';
import MainStyle from './styles/MainStyle';
import * as Font from 'expo-font';
import DeckList from './components/DeckList';


export default class App extends React.Component { 
 
  render(){
  return (
    <Provider store={createStore(reducer)}>
      <View style={MainStyle.container} >     
         <DeckList/>  
    </View>
    </Provider>
   
  );
}
}
