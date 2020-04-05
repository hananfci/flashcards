import React from 'react';

import {  StyleSheet,View, Text,TextInput,Button  } from 'react-native';
import {savedecks} from '../utils/api'
import { connect } from 'react-redux'
//import {addDeck} from '../actions'
import MainStyle from '../styles/MainStyle'
import {getData} from '../utils/api'
import DeckButton from './DeckButton'
//import NewCard from './NewCard'
//import Quiz from './Quiz'
//import { white } from 'react-native-paper/lib/typescript/src/styles/colors';
import { purple, white,red,orange } from '../utils/colors'

class DeckDetails extends React.Component{
  render(){
   
// const { deckId } = this.props.navigation.state.params;

const {decks,deckId, goBack} =this.props;
      return(
        <View style={[styles.cardContainer]}>
          <View  style={styles.card} >
        <Text style={styles.titleText}>{decks[deckId].title}</Text>
        <Text style={styles.cardnumText}>{decks[deckId].questions.length} Card</Text>
        <DeckButton onPress={() => this.props.navigation.navigate('NewCard', {deckId: deckId })} 
                    styles={styles}
                     text="Add Card"
                     color={purple}/>
        <DeckButton onPress={() => this.props.navigation.navigate('Quiz', {deckId: deckId })} 
                    styles={styles}
                     text="Start Quiz"
                     color={red}/>
        {/* <Button title="Go back" onPress={() => goBack()} /> */}
        </View>
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
const styles = StyleSheet.create({
  btnsubmit:{
   padding:10,
   borderRadius:7,
   width:170,
   height:45,
   margin:5,
  },
  submitbtntext:{
   color:white,
   fontSize:22,
   textAlign:'center',
  },
  card : {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:orange,
    borderRadius:10,
    height:150,
    shadowRadius: 4,
    shadowOpacity: 1,
    shadowColor: 'rgba(0, 0, 0, 0.24)',
    shadowOffset: {
      width: 0,
      height: 3
    }
  },
  cardContainer:{
    flex: 1,
    padding:8,
    alignSelf:'stretch'
  },
  titleText:{
    fontSize:40,
    color:white,
  },
  cardnumText:{
    fontSize:30,
    color:white,
    marginBottom:50,

  }

 
})
export default connect(mapStateToProps, mapDispatchToProps)(DeckDetails)




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


  