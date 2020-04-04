import React from 'react';
import {connect} from 'react-redux'
import {  StyleSheet,View, Text,TouchableOpacity  } from 'react-native';
 import MainStyle from '../styles/MainStyle'
import {getDecks} from '../utils/api'
import {receiveDecks} from '../actions'

  class DeckList extends React.Component {
 
  componentDidMount() {
    const { recicveAllDecks } = this.props;
    getDecks()
    .then ( (alldecks) =>  recicveAllDecks(alldecks))
  }

      render(){
     
        const {decks} =this.props
        console.log("hhhhh",decks)
          return(
            <View style={MainStyle.container}>
        {
              Object.keys(decks).map((deck) => {
                const {title, questions} = decks[deck]
                return (
                  <View key={deck}>
                    <TouchableOpacity 
                    //key={deck.id}
                    onPress={() =>
                     
                      this.props.navigation.navigate('DeckDetails', {
                        deckId: deck,
                        
                      })}
                    >
                     <Text>{title}</Text>
                     <Text>{questions.length}</Text>
                   
                     </TouchableOpacity>
                  </View>
                )
              
              

              })
            } 
           
            </View>
        )
      }
  }

  function mapStateToProps( decks ) {
    //const list  = decks;
    //console.log("list ", list)
    return {       
      decks
    }
  }
  function mapDispatchToProps( dispatch ) {
    return {   
      recicveAllDecks: (prevdecks) => { 
        dispatch(receiveDecks(prevdecks))
      }
    }
  }


  export default connect(mapStateToProps, mapDispatchToProps)(DeckList)
 // export default connect(mapStateToProps,mapDispatchToProps)(DeckList)
