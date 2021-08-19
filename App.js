import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text,View,Button,TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
// import UserProfile from './MyComponents'
import NewsDetail from './screens/NewsDetail';
import NewsList from './screens/NewsList';
import Settings from './screens/Settings';

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


function SelectedText(props){
  return <Text style={{borderBottomColor:"red",borderBottomWidth:2,marginHorizontal:5,padding:4}}>
    {props.text}
  </Text>
}


function NonSelectedText(props){
  return <Text style={{marginHorizontal:5,padding:4}}>
    {props.text}
  </Text>
}

  
  
let arr = [1,2,3,4,5,6,7,8]

function App() {
  const [select,setselect] = useState(1)

  function toggle(){
    setselect(!select)
  }
  
  return (
    <View  >
      
      {/* <NewsList/> */}
      
      
      {/* <ScrollView horizontal={true}>
          {
            arr.map((id)=>{
              return (
                <TouchableOpacity key={id} onPress={()=>setselect(id)} >
                  {
                    select===id?<SelectedText text={"hello word "+id} />:<NonSelectedText text={"hello world "+id} />
                  }
                </TouchableOpacity>
              )
            })
          }

      </ScrollView> */}

      
      {/* <Button onPress={toggle} title="increment" /> */}
      {/* <AntDesign name="exclamationcircle" size={24} color="black" /> */}
      <NewsList/>
    </View>
  );
}


export default App


