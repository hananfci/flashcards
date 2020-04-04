import React from 'react';
import {  StyleSheet,View, Text,TextInput,Button  } from 'react-native';
import {savedecks} from '../utils/api'
import { connect } from 'react-redux'
import {addDeck} from '../actions'
import MainStyle from '../styles/MainStyle'
import {saveDeckTitle}  from '../utils/api'

  class NewDeck extends React.Component{
      state ={
          deckName:''
      }
      submitname =()=>{
          const {deckName}= this.state;
          const { newDeckName } = this.props;
          saveDeckTitle(deckName);
          newDeckName(deckName);
          this.props.navigation.navigate('DeckDetails', {
            deckId: deckName })
            this.setState({deckName:''})

      }
      render(){
          return(
            <View style={MainStyle.container}>
                     <Text style={MainStyle.addCardTitle}>What's the new  Deck's Name</Text>
                     <TextInput  style={MainStyle.input}
                     placeholder="the new  Deck's Name"
                     onChangeText ={(deckName) => this.setState({deckName})}
                     value= {this.state.text}
                     />
                     <Button title='submit' onPress={this.submitname}  style={MainStyle.submit}/>
                 
              
            </View>
        )
      }
  }

  function mapDispatchToProps( dispatch ) {
    return {   
      newDeckName: (prevdecks) => { 
        dispatch(addDeck(prevdecks))
      }
    }
  }

  export default connect(null,mapDispatchToProps) (NewDeck)