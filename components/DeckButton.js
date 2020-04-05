import React from 'react';
import { Text,TouchableOpacity  } from 'react-native';

 export default  function DeckButton ({onPress,styles,text,color}){
    return (
      <TouchableOpacity onPress={onPress} style={[styles.btnsubmit,{backgroundColor:color}]}>

        <Text style={styles.submitbtntext}>
           {text}
        </Text>

      </TouchableOpacity>
    )
}