


import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DeckList from "./DeckList";
import DeckDetails from"./DeckDetails";
import { purple, white } from "../utils/colors";

const Stack = createStackNavigator();

const DeckStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="DeckList" component={DeckList}   />
      <Stack.Screen
        name="DeckDetails"
        component={DeckDetails}
     
      />
    </Stack.Navigator>
  );
};

export default DeckStack;