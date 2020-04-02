import React from 'react';
import {  StyleSheet,View, Text,TextInput,Button  } from 'react-native';
import {savedecks} from '../utils/api'
import { connect } from 'react-redux'
import {addDeck} from '../actions'

  class Deck extends React.Component{
     
      render(){
          return(
            <View>
           
                  <View >
                     <Text>Deck's details</Text>
                  </View>
             
            </View>
        )
      }
  }
  export default Deck