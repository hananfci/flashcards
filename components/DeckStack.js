


import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DeckList from "./DeckList";
import DeckDetails from"./DeckDetails";
import NewCard from './NewCard';
import Quiz from './Quiz'
import { purple, white } from "../utils/colors";

const Stack = createStackNavigator();

const DeckStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="DeckList" component={DeckList}
        options={{
          title: 'All Decks' ,
          headerTintColor:white,
          headerStyle :{
           backgroundColor:purple,
          }}}
      />
      <Stack.Screen
        name="DeckDetails"
        component={DeckDetails}  
        options={{ 
          title: 'Deck Info',
          headerTintColor:white,
          headerStyle :{
           backgroundColor:purple,
          } }}  
      />
       <Stack.Screen
        name="NewCard"
        component={NewCard} 
        options={{
           title: 'Add New Card' ,
           headerTintColor:white,
           headerStyle :{
            backgroundColor:purple,
           }}}   
      />
       <Stack.Screen
        name="Quiz"
        component={Quiz} 
        options={{
           title: 'Quiz',          
           headerTintColor:white,
           headerStyle :{
            backgroundColor:purple,
           }
          }}    
      />

    </Stack.Navigator>
  );
};

export default DeckStack;