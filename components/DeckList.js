import React from 'react';
import {connect} from 'react-redux'
import {  StyleSheet,View, Text,TouchableOpacity,FlatList  } from 'react-native';
 import MainStyle from '../styles/MainStyle'
import {getDecks} from '../utils/api'
import {receiveDecks} from '../actions'
import { orange, white } from '../utils/colors';

  class DeckList extends React.Component {
 
  componentDidMount() {
    const { recicveAllDecks } = this.props;
    getDecks()
    .then ( (alldecks) =>  recicveAllDecks(alldecks))
  }

      render(){
     
        const {decks} =this.props
        console.log("decks data",decks)
          return(
            <View style={styles.cardContainer}>
      <FlatList
              data= {decks}
              renderItem= {({deck}) => (
                        <View  style={styles.card}>
                        <TouchableOpacity  onPress={() =>
                        
                          this.props.navigation.navigate('DeckDetails', {
                            deckId: deck.id,
                            
                          })}
                          style={styles.touchbtn}
                        >
                        <Text style={styles.cardText}> {deck.title}</Text>
                        <Text style={styles.cardText}>{deck.questions.length}</Text>
                      
                        </TouchableOpacity>
                      </View>
              )

              }
              /> 
 {/*                    <FlatList
                        data={decks}
                        renderItem={({ item }) => (
                          <TouchableOpacity
                            key={item.id}
                            onPress={() =>
                              this.props.navigation.navigate('DeckDetail', {
                                deckId: item.id,
                              })
                            }
                          >
                           
                          </TouchableOpacity>
                        )}
        /> */}

   {/*     {
              Object.keys(decks).map((deck) => {
                const {title, questions} = decks[deck]
                return (
                  <View key={deck}  style={styles.card}>
                    <TouchableOpacity  onPress={() =>
                     
                      this.props.navigation.navigate('DeckDetails', {
                        deckId: deck,
                        
                      })}
                      style={styles.touchbtn}
                    >
                     <Text style={styles.cardText}>{title}</Text>
                     <Text style={styles.cardText}>{questions.length} Card</Text>
                   
                     </TouchableOpacity>
                  </View>
                )
              
              

              })
            }   */}
           
            </View>
        )
      }
  }

 const styles= StyleSheet.create({
    cardContainer:{
      flex: 1,
      padding:8,
      alignSelf: 'stretch',
    },
    touchbtn:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    },
    card : {
    
          backgroundColor:orange,
          margin:8,
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
    cardText : {
    fontSize:25,
    color:white,
        },

    })
  function mapStateToProps( decks ) {
    //const list  = decks;
    //console.log("list ", list)
   

const dataArray = Object.keys(decks).map(key => {
 
  return {
      id: key,
      key,
      title: decks[key].title,
      questions:decks[key].questions
    }
})

    return {       
      decks:dataArray
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
