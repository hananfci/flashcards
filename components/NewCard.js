import React from 'react';
import {  StyleSheet,View, Text,TextInput,Platform,TouchableOpacity,KeyboardAvoidingView  } from 'react-native';
import MainStyle from '../styles/MainStyle'
import { connect } from 'react-redux'
import {addCard} from '../actions'
import {saveCardToDeck}  from '../utils/api'
import { white,orange }   from '../utils/colors'

class NewCard extends React.Component{
    
        constructor(props) {
          super(props);
          this.state = {
            question:'',
            answer:'',
            correctAnswer:''        
            }
            this.submitnewcard=this.submitnewcard.bind(this);
      }
       // componentDidMount() {}
        submitnewcard() {
        
            const {question,answer,correctAnswer}  = this.state  
            const deck =this.props.deckId          
            const {addCardDeck,goBack} = this.props
            saveCardToDeck(deck,{question,answer,correctAnswer})
              addCardDeck({question,answer,deck,correctAnswer})      
             this.setState({ question:'', answer:'', correctAnswer:'' }) 
               goBack()
         
         
           }
   
  render() {
    //const {deckId} = this.props
    const {question,answer,correctAnswer} =this.state;
      return(
        <KeyboardAvoidingView style={MainStyle.container} behavior={Platform.Os == "ios" ? "padding" : "height"}>
            <View style={MainStyle.container}>
                <Text style={styles.title}>What's  new question?</Text>
                <TextInput
                style={styles.input}
                onChangeText={(question) => this.setState({question})}
                value={question}
                />
                <Text style={styles.title}>What's the answer</Text>
                <TextInput
                 style={styles.input}
                 onChangeText={(answer) => { this.setState({answer})}}
                 value={answer}/>

               <Text style={styles.title}>Is this Correct answer</Text>
                <TextInput
                 style={styles.input}
                 onChangeText={(correctAnswer) => this.setState({correctAnswer})}
                 value={correctAnswer}/>

                <TouchableOpacity style={styles.btnSubmit} onPress={this.submitnewcard}>
                    <Text style={styles.btnSubmttext}> submit</Text>
                </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
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
    },
    title: {
        fontSize:30,
        color:'#333'
    },
    input: {
        width:250,
        height:40,
        padding:8,
        borderWidth:1,
        borderColor:'#757575',
        margin:20,
        borderRadius:7,
    }

})
function mapStateToProps(decks, { route }) {
    const { deckId } = route.params;
    return {
      decks,
      deckId
    }}
    
   function mapDispatchToProps (dispatch, { navigation  }) {
    return { 
     addCardDeck: ({question,answer,deck,correctAnswer}) => { 
              dispatch(addCard({question,answer,deck,correctAnswer}))
          },
         
    goBack: () => navigation.goBack(),
     }
   }
export default connect(mapStateToProps, mapDispatchToProps)(NewCard)


  