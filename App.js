import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text,View,Button,TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
// import UserProfile from './MyComponents'
import NewsDetail from './screens/NewsDetail';
import NewsList from './screens/NewsList';
import Settings from './screens/Settings';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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



const Stack = createNativeStackNavigator();





function App() {
  const [select,setselect] = useState(1)

  function toggle(){
    setselect(!select)
  }
  
  return (
    <NavigationContainer >

      <Stack.Navigator>
        <Stack.Screen name="list" component={NewsList} options={{
          headerShown:false
        }} />
        <Stack.Screen name="profile" component={NewsList}/>
        <Stack.Screen name="detail" component={NewsDetail} />
      </Stack.Navigator>

    </NavigationContainer>
  );
}


export default App


