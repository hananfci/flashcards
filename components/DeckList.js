import React from 'react';
import {  StyleSheet,View, Text  } from 'react-native';
import {getData} from '../utils/api'
  class DeckList extends React.Component{
      render(){
        const decks =getData();
          return(
            <View>
          {/*   {
              Object.keys(decks).map((deck) => {
                const {title, questions} = decks[deck]
                return (
                  <View key={deck}>
                     <Text>{title}</Text>
                  </View>
                )
              
              

              })
            } */}
             <View >
                     <Text>test</Text>
                  </View>
            </View>
        )
      }
  }
  export default DeckList