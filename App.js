import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text,View,Button } from 'react-native';

import UserProfile from './MyComponents'

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




  
  
  

function App() {
  return (
    <View  >
      <UserProfile name="anies" />

      {/* <UserProfile name="akan"  />
      <UserProfile name="Daniel"  /> */}
      
      
    </View>
  );
}


export default App


