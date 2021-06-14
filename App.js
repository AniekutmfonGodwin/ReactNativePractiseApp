import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Button,Alert,TextInput  } from 'react-native';
import Element from './Element'

export default function App() {
  const [state, setstate] = React.useState('')

  

  function Greet(n) {
    
    setstate(n)
  }


  function format(){
    alert(Number(state))
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
      <Element/>
      <Element/>
      <Element/>
      <Element/>
      <Element/>
      <Element/>
      <Element/>
      <Element/>
      <Element/>
      <Element/>
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
