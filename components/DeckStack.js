


import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DeckList from "./DeckList";
import Deck from "./Deck";
import { purple, white } from "../utils/colors";

const Stack = createStackNavigator();

const DeckStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="DeckList" component={DeckList} />
      <Stack.Screen
        name="Deck"
        component={Deck}
     
      />
    </Stack.Navigator>
  );
};

export default DeckStack;