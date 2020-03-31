
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
export function getdecks(deck){
    return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then (results => {
        if (results=== null){
            AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(Data))
            return Data
        }
        else{
            return JSON.parse(results)
        }

    })
}
export function savedecks(title){
    return AsyncStorage.setItem(DECK_STORAGE_KEY,JSON.stringify({

    [title]:{
    title:title,
    questions:[]
    }
}))
  
}