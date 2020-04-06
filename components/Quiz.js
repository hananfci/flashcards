import React from 'react';
import {  StyleSheet,View, Text,Animated,TouchableOpacity  } from 'react-native';
import MainStyle from '../styles/MainStyle'
import { connect } from 'react-redux'
import { white,orange,red ,purple,green }   from '../utils/colors'
import DeckButton from './DeckButton'
import Emoji from 'react-native-emoji';

class Quiz extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      questionnumber:0,  
      showQuestion:false, 
      correct:0,
      incorrect:0,   
      animation: new Animated.Value(0),
      }
      this.showanswer=this.showanswer.bind(this); 
      this.submitanswer=this.submitanswer.bind(this); 
      this.tryAgain= this.tryAgain.bind(this);
      this.goback= this.goback.bind(this);
      this.handelanimation=this.handelanimation.bind(this)
}
goback = () =>{
  const {goBack} = this.props;
  goBack();
}
showanswer = ( ) =>{
  const {showQuestion}= this.state
   {
     !showQuestion ? this.setState({showQuestion:true}):this.setState({showQuestion:false})
   }
}
tryAgain = () =>{
  this.setState({ showQuestion:false})
  this.setState({ questionnumber:0})
  this.setState({ correct:0})
  this.setState({ incorrect:false})
}
submitanswer = (answer) => {
 this.handelanimation()
  const {questionnumber,showQuestion,correct,incorrect}= this.state;
  const questionnumbefor =questionnumber
  const {decks,deckId} = this.props;
  const correctanswer = decks[deckId].questions[questionnumber].correctAnswer.toLowerCase(); 
 
  
  
  if(answer.trim() === correctanswer.trim()){
     this.setState({correct:correct+1})
  }
  else{
     this.setState({incorrect:incorrect+1})
  }
 
  this.setState({questionnumber : questionnumbefor + 1})
  this.setState({ showQuestion:false})

}
handelanimation = () => {
  Animated.sequence([
    Animated.timing(this.state.animation, { duration: 200, toValue: 1.04}),
    Animated.spring(this.state.animation, { toValue: 1.5, friction: 4})
  ]).start()
  // Will change fadeAnim value to 1 in 5 seconds
/*   Animated.timing(this.state.animation, {
    toValue: 1,
    duration: 6000
  }).start(); */
};

  render(){
 debugger;
    const {decks,deckId} = this.props
    const {questionnumber,showQuestion,correct,incorrect,animation}= this.state
    const currentquestionnumber = questionnumber + 1
  
   //console.log("question text", decks[deckId].questions[questionnumber].question)
    if (questionnumber === decks[deckId].questions.length) {
      return (
        <View  style={styles.cardContainer}>
          <View style={styles.card}>
            <Animated.View    style={[{
              opacity: animation
            },{transform: [{scale: animation}]}]
          }>
           <Text style={styles.resulttext}>you got {correct} out of {decks[deckId].questions.length} !  </Text>
            </Animated.View>
      {
        correct > incorrect? <Text style={{fontSize: 30,fontColor:{white}}} >🤩</Text> :
                              <Text style={{fontSize: 30,fontColor:{white}}}><Emoji name="anguished" style={{fontSize: 30}} /> </Text>
      } 
     
      <DeckButton  onPress={() => this.tryAgain()}
                        styles={styles}
                        text="Try Again"
                        color={green}/>
            <DeckButton onPress={() => this.goback()}
                        styles={styles}
                        text="Back"
                        color={red}/>
          </View>
        </View>
      )          
    }
      return(
      
        <View style={[styles.cardContainer]}>
          <View style={styles.card} >
              <Text style={styles.questionNumber}>{currentquestionnumber }/ {decks[deckId].questions.length}</Text>
              { !showQuestion? 
              <Animated.View  style={[{ opacity: animation },{transform: [{scale: animation}]}] }>
              <Text style={styles.questionText}>{decks[deckId].questions[questionnumber].question}</Text>
              </Animated.View> :
               <Animated.View  style={[{ opacity: animation },{transform: [{scale: animation}]}] }>
              <Text style={styles.questionText}>{decks[deckId].questions[questionnumber].answer}</Text>
              </Animated.View>
              }
                {!showQuestion? 
                 <TouchableOpacity onPress={ this.showanswer} >
                   <Text style={styles.btnAnswertext}>Show Answer</Text>
                </TouchableOpacity>:
                <TouchableOpacity onPress={ this.showanswer}>
                  <Text style={styles.btnAnswertext}>Show Question</Text>
                </TouchableOpacity>
              }
           
              <DeckButton  onPress={() => this.submitanswer('true')}
                        styles={styles}
                        text="Correct"
                        color={green}/>
            <DeckButton onPress={() => this.submitanswer('false')}
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
  resulttext:{
    color:white,
    fontSize:25,
    textAlign:'center',
    margin:20,
  }
 
})
function mapStateToProps(decks, { route }) {
  const { deckId } = route.params;
  
  return {
    decks,
    deckId
  }}
  
  function mapDispatchToProps (dispatch, { route,navigation  }) {
    return {
      goBack: () => navigation.goBack(),
    }
    }
export default connect(mapStateToProps,mapDispatchToProps)(Quiz)

  