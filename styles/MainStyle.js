import { StyleSheet,Text,View } from 'react-native';


export default  StyleSheet.create({
  container : {
      flex: 1,
      justifyContent: 'center',
      alignItems:'center'
    },
    input:{
      width:350,
      height:44,
      borderWidth:1,
      borderColor:'#757575',
      borderRadius:8,
      margin:40,
    },
    addCardTitle: {
      fontSize:20,
      color:'#333'
    },
    submit: {
      borderWidth:0.5,
      borderColor:'#d6d7da',
      padding:10,
      borderRadius:7,
      overflow:'hidden'

    }
    })