import React from 'react';
import {  StyleSheet,View, Text,TextInput,Button  } from 'react-native';
import {savedecks} from '../utils/api'
import { connect } from 'react-redux'
import {addDeck} from '../actions'

  class NewDeck extends React.Component{
      state ={
          text:''
      }
      submitname =()=>{
          const {text}= this.state;

      }
      render(){
          return(
            <View>
           
                  <View >
                     <Text>What's the new  Deck's Name</Text>
                     <TextInput 
                     placeholder="the new  Deck's Name"
                     onChangeText ={(text) => this.setState({text})}
                     value= {this.state.text}
                     />
                     <Button titile='submit' onPress={this.submitname} />
                  </View>
             
            </View>
        )
      }
  }
  export default NewDeck