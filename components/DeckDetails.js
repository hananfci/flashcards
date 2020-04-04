import React from 'react';

import {  StyleSheet,View, Text,TextInput,Button  } from 'react-native';
import {savedecks} from '../utils/api'
import { connect } from 'react-redux'
//import {addDeck} from '../actions'
import MainStyle from '../styles/MainStyle'
import {getData} from '../utils/api'

/*  function DeckDetails({ navigation }) {
  //const deck=  route.params.deckId;
  const {decks,deckId} =this.props;
  return (
    <View style={MainStyle.container}>
      <Text>{decks[deckId].title}</Text>
      <Text>{decks[deckId].questions.length}</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
} */
/* function mapStateToProps( decks ) {
  return {       
    decks
  }
} */
/* function mapStateToProps(decks, { route }) {
  const { deckId } = route.params;
  return {
    decks,
    deckId
  };
}
export default connect(mapStateToProps, null)(DeckDetails) */


  class DeckDetails extends React.Component{
      render(){
       
  // const { deckId } = this.props.navigation.state.params;
    
   const {decks,deckId, goBack} =this.props;
          return(
            <View style={MainStyle.container}>
            <Text>{decks[deckId].title}</Text>
            <Text>{decks[deckId].questions.length}</Text>
            <Button title="Go back" onPress={() => goBack()} />
          </View>
        )
      }
  }
  function mapStateToProps(decks, { route }) {
    const { deckId } = route.params;
    return {
      decks,
      deckId
    };
  }

  function mapDispatchToProps (dispatch, { route,navigation  }) {
   
  
    return {
      goBack: () => navigation.goBack(),
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(DeckDetails)
  