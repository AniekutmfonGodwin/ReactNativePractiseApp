import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Button,Alert,TextInput  } from 'react-native';

export default function App() {
  const [state, setstate] = React.useState('')

  

  function Greet(n) {
    
    setstate(n)
  }


  function format(){
    alert(Number(state))
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
      <Text>This is the current state: {state}</Text>
      <StatusBar style="auto" />
      <TextInput value={state} keyboardType="numeric" onChangeText={Greet} placeholder="Enter Amount" />

      <Button title="Press"  onPress={format}  />
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
