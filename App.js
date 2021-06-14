import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Button,Alert,TextInput  } from 'react-native';
import Element from './Element'




const NewElement = (props) =>{

  return (
    <View>
      <Text>
        hello world : {props.name}
      </Text>
    </View>
  )
}




export default function App() {
  const [state, setstate] = React.useState('')

  

  function Greet(n) {
    
    setstate(n)
  }


  function greet(){
    // alert(Number(state))
    console.log("hello")
    alert("hello world")
  }

  const myStyle = {
    con:{width:200,flexDirection:"row"},
    top:{width:200,flexDirection:"row"}
  }
  /**
   * learn about functions
   * -functions
   * -events
   * - high order functions
   * Textinput
   */
  return (
    <View style={styles.container}>
      <NewElement name="anies"/> 
      <Element name="Anies" age={22} format={greet}>
        <Text>
          am a child
        </Text>
      </Element>
      <Element name="Anies" age={22} format={greet}>
        <View style={{
          width:20,
          height: 30,
          backgroundColor:'red'
        }}>
          
        </View>
      </Element>

     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
