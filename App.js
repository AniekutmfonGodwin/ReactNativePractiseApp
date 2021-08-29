import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text,View,TextInput,Button,TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
// import UserProfile from './MyComponents'
import NewsDetail from './screens/NewsDetail';
import EntryComponent from './screens/NewsList';
import Settings from './screens/Settings';


import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';





/**
 * https://www.behance.net/gallery/102996435/News-App-Design?tracking_source=search_projects_recommended%7Cnews%20mobile%20app
 * install vs code
 * install node
 * install expo cli  command => npm install --global expo-cli
 * create a folder for our app
 * open run expo init
 * run => expo start --web 
 * to lunch
 * 
 */


/*
functional
class 
 */
  
// class UserProfile extends React.Component {

  

//   render() {
    
//     return <View>Hello</View>;
//   }

// }






const Tab = createBottomTabNavigator()

function ComponentTest(props) {
  return <View><Text>am in</Text></View>
}

function App() {
  

  function handleSubmitUsername(text){
    
    changedata(prev=>({...prev,username:text}))
    
  }

  function handleSubmitPassword(text){
    
    changedata(prev=>({...prev,password:text}))
    
  }

  
  return (
    <NavigationContainer >
      <Tab.Navigator>
        <Tab.Screen options={{headerShown:false}} name="main" component={EntryComponent} />
        <Tab.Screen options={{headerShown:false}} name="new" component={ComponentTest} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


export default App


