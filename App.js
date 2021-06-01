import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Button,Alert,TextInput  } from 'react-native';

export default function App() {


  function Greet(text) {
    console.log("good morning "+text)
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
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <TextInput onChangeText={Greet} placeholder="Enter your name" />

      <Button title="Press"  onPress={Greet}  />
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
