import React from 'react';
import {  StyleSheet,View, Text,TextInput,TouchableOpacity  } from 'react-native';
import MainStyle from '../styles/MainStyle'
import { connect } from 'react-redux'
import { white,orange,red ,purple,green }   from '../utils/colors'
import DeckButton from './DeckButton'

class Quiz extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      questionnumber:0,  
      showQuestion:false, 
      correct:0,
      incorrect:0,   
      }
      this.showanswer=this.showanswer.bind(this); 
      this.submitanswer=this.submitanswer.bind(this); 
}
showanswer = ( ) =>{
  const {showQuestion}= this.state
   {
     !showQuestion ? this.setState({showQuestion:true}):this.setState({showQuestion:false})
   }
}
submitanswer = (answer) => {
  debugger;
  const {questionnumber,showQuestion,correct,incorrect,showresult}= this.state;
  const questionnumbefor =questionnumber
  const {decks,deckId} = this.props;
  const correctanswer = decks[deckId].questions[questionnumber].correctAnswer.toLowerCase(); 
 
  
  
  if(answer === correctanswer){
     this.setState({correct:correct+1})
  }
  else{
     this.setState({incorrect:incorrect+1})
  }
 
  this.setState({questionnumber : questionnumbefor + 1})
  this.setState({ showQuestion:false})

}
  render(){
 debugger;
    const {decks,deckId} = this.props
    const {questionnumber,showQuestion,correct,incorrect}= this.state
    const currentquestionnumber = questionnumber + 1
   
    if(questionnumber === decks[deckId].questions.length){
     
      return (
        <View>
          <View>
      <Text>you got {correct}out of {decks[deckId].questions.length}! </Text>
      {
      correct> incorrect? <Text>good</Text>
                            :
                            <Text>bad</Text>
      }
          </View>
        </View>
      )
          
    }
      return(
      
        <View style={[styles.cardContainer]}>
          <View style={styles.card} >
              <Text style={styles.questionNumber}>{currentquestionnumber }/ {decks[deckId].questions.length}</Text>
              {!showQuestion? 
              <View>
              <Text style={styles.questionText}>{decks[deckId].questions[questionnumber].question}</Text>
              <Text>questionnumber: {questionnumber}</Text>
              <Text>showresult: {showresult}</Text>
              </View>
              :
              <Text style={styles.questionText}>{decks[deckId].questions[questionnumber].answer}</Text>
              }
                {!showQuestion? 
                 <TouchableOpacity onPress={() => this.showanswer('true')} >
                   <Text style={styles.btnAnswertext}>Show Answer</Text>
                </TouchableOpacity>:
                <TouchableOpacity onPress={() => this.showanswer('false')}>
                  <Text style={styles.btnAnswertext}>Show Question</Text>
                </TouchableOpacity>
              }
           
              <DeckButton  onPress={this.submitanswer}
                        styles={styles}
                        text="Correct"
                        color={green}/>
            <DeckButton onPress={this.submitanswer}
                        styles={styles}
                        text="Incorrect"
                        color={red}/>
    </View>
      </View>
    )
  }
}

const styles= StyleSheet.create({

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

  },
  questionNumber:{
    alignSelf:'flex-start',
    position:"absolute",
    top:0,
    left:0,
    color:white,
    fontSize:20,
    margin:5,

  },
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
  questionText:{
   fontSize:35,
   fontWeight:'bold',
   padding:20,
  },
  btnAnswertext: {
   
      color:green,
      fontSize:22,
      textAlign:'center',
      margin:20,

  },
 
})
function mapStateToProps(decks, { route }) {
  const { deckId } = route.params;
  
  return {
    decks,
    deckId
  }}
  
 
export default connect(mapStateToProps,null)(Quiz)

  