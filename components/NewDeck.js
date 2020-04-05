import React from 'react';
import {  StyleSheet,View, Text,TextInput,Button,TouchableOpacity  } from 'react-native';
import {savedecks} from '../utils/api'
import { connect } from 'react-redux'
import {addDeck} from '../actions'
import MainStyle from '../styles/MainStyle'
import {saveDeckTitle}  from '../utils/api'
import { white,orange }   from '../utils/colors'

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
                        <TouchableOpacity style={styles.btnSubmit} onPress={this.submitname}>
                    <Text style={styles.btnSubmttext}> submit</Text>
                </TouchableOpacity>
{/*                      <Button title='submit' onPress={this.submitname}  style={styles.btnSubmttext}/>
 */}                 
              
            </View>
        )
      }
  }

  const styles= StyleSheet.create({
    btnSubmttext: {
        color:white,
        fontSize:22,
        textAlign:'center'
    },
    btnSubmit: {
        borderWidth:8.5,
        borderColor:"#d6d7da",
        padding:10,
        backgroundColor:orange,
        borderRadius:7,
        overflow:"hidden"
    }
  })
  function mapDispatchToProps( dispatch ) {
    return {   
      newDeckName: (prevdecks) => { 
        dispatch(addDeck(prevdecks))
      }
    }
  }

  export default connect(null,mapDispatchToProps) (NewDeck)