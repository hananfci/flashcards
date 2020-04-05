
import React,{ Component } from 'react'
import { Platform} from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import NewDeck from './NewDeck'
import DeckStack from './DeckStack'
//import  EntryDetail from './EntryDetail'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { purple, white,gray } from '../utils/colors'


const Tabs =
  Platform.OS === "ios"
    ? createBottomTabNavigator()
    : createMaterialBottomTabNavigator();
class Navigator extends Component  {

  render() {
    const Tabsnavigator = ()=> {
      return (

        <Tabs.Navigator
        
        initialRouteName="Deck List"
        screenOptions=
        {({ route }) => ({
          tabBarIcon: ({ tintColor}) => {
            let icon;
            if (route.name === "Deck List") {
              icon = (
                <MaterialCommunityIcons name="cards-outline" size={30} color={tintColor} />
              );
            } else if (route.name === "New Deck") {
              icon = (
                
                <FontAwesome name="plus-square" size={30} color={tintColor} />
                
              );
            }
            
            return icon;
          }
          
          
        }
        )
      }
       
        tabBarOptions={{
          tintColor:gray,
          activeTintColor: purple,
          style: {
            fontSize:30,
            backgroundColor: white,
          },
          labelStyle: { fontSize: 40 },
          tabStyle: { width: 200 },
          style: { backgroundColor: white },
         
        }} >
          <Tabs.Screen
           name="Deck List"
            component={DeckStack}
           options={{
            tabBarLabel: 'Home',
          }} />
        <Tabs.Screen
         name="New Deck"
          component={NewDeck}
         options={{
          backgroundColor: white,
          tabBarLabel: 'New Deck',
        }} />
      
      </Tabs.Navigator>
   

    )};
    return (
       <NavigationContainer>
        
       <Tabsnavigator/>
        </NavigationContainer>


  
    );
  }
}
export default Navigator 
