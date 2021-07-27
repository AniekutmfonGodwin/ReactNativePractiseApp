import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text,View,Button } from 'react-native';


/**
 * install vs code
 * install node
 * install expo cli  command => npm install --global expo-cli
 * create a folder for our app
 * open run expo init
 * run => expo start --web 
 * to lunch
 * 
 */
function greet(){
  console.log("hello world")
}

function fullName(args){
  //     console.log(args.a)
  
      return args
  
  
  }
  
  
  let args = {a:33,b:44,c:33}
  
  const results = fullName(args)

export default function App() {
  return (
    <View >
      <View style={{backgroundColor:"blue"}}>
        <Text>
          am a blue container
        </Text>
      </View>


      <View style={{backgroundColor:"green"}}>
        <Text>
          am a green container
        </Text>

      </View>
      <Button onPress={greet}  title="Learn More" color="#000B40" />
    </View>
  );
}


