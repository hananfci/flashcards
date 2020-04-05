
import AsyncStorage from '@react-native-community/async-storage';

const DECK_STORAGE_KEY = 'Flashcarding:decks';
const Data = {
    React: {
      title: 'React',
      questions: [
        {
          question: 'What is React?',
          answer: 'A library for managing user interfaces',
          correctAnswer:'false'
        },
        {
          question: 'Where do you make Ajax requests in React?',
          answer: 'The componentDidMount lifecycle event',
          correctAnswer:'true'
        }
      ]
    },
    JavaScript: {
      title: 'JavaScript',
      questions: [
        {
          question: 'What is a closure?',
          answer: 'The combination of a function and the lexical environment within which that function was declared.',
          correctAnswer:'false'
        }
      ]
    }
  }
export const getData= () =>{
    return Data;
}
export function getDecks(){
 // alert("fun database");
    return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then (results => {
        if (results=== null){
          alert("nooooooo empty");
          return AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(Data) 
          ).then(() => Data);
        
        }
      
            return JSON.parse(results)
       

    })
}


export function saveDeckTitle(title){
    return AsyncStorage.mergeItem(DECK_STORAGE_KEY,JSON.stringify({

    [title]:{
    title:title,
    questions:[]
    }
}))
  
}
export function saveCardToDeck(name,card){
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
  .then (results =>JSON.parse(results) )
  .then (results => {
    results[name].questions.push(card)
    AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(results)) 
   
    return results
  })
}