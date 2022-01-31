import React,{useState,useEffect} from 'react'
import {View,Dimensions,Image,Text,Button,TextInput} from 'react-native'
import Home from './screens/Home'
import { AntDesign } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductDetail from './screens/ProductDetail';


let dimension = Dimensions.get("window")

function Screen1(props){
  console.log("props with navigatons",props)
  return <Home title="hello" p={props} />
  // return (
  //   <View>
  //     <Text>Screen1</Text>
  //     <Button title="go to screen2" onPress={()=>props.navigation.navigate("Screen2")}/>
  //   </View>
  // )
}


function RedText(props) {
  return <Text style={{
    borderBottomColor:props.colored?"red":"#efefef",
    borderBottomWidth:10,
  }}>
    {props.title}
  </Text>
}


function Screen2(props){
  let [query,setQuery] = useState('')
  let [selected,setSelected] = useState("daniel")
  let [names,setNames] = useState([
    "anies",
    "akan",
    "daniel",
    "id",
    "gracious"
  ])

  function search() {
    console.log("searching for ",query)
  }

  function addName() {
    if(query){
      setNames([...names,query])
      setQuery('')

    }
  }

  // setInterval(increment,3000)

  useEffect(()=>{
    console.log("this component has been rendered")
    if(query){
      search()
    }

    return ()=>{
      console.log("component unmount")
    }
  },[query])

  // return <Home title="hello" />
 
  return (
    <View>
      {/* <Text>Screen2 query {query}</Text> */}
      {/* <Button title="increment" onPress={increment}/> */}
      {/* {
        [
          <Text>{arr[0]}</Text>,
          <Text>{arr[1]}</Text>,
          <Text>{arr[2]}</Text>
        ]
      } */}
      {
        names.map((name)=>(
        // <Text>{name}</Text>
        <RedText title={name} colored={selected==name} />
        ))
      }
    
      <TextInput placeholder='enter the username' onChangeText={setQuery} value={query} />
      <Button title="add name" onPress={addName}/>
    </View>
  )
}



function Screen3(props){
  return (
    <View>
      <Text>Screen3</Text>
      
    </View>
  )
}


{/* <Dot index={2} /> */}

const Stack = createStackNavigator();

function App(){
  const [value,setValue] = useState(0)

  
  // setInterval(() => {
  //   setValue((new Date()).toISOString())
  // }, 1000);

 
  
  // return (
  //   <View>
  //     <Home  uri="hdhgggdgd" bgColor={"#f7f4f4"}  username={"anies"} level={value} myColor={"h"}   />
  //     <Button onPress={greet("hello")} title='greet' />
  //   </View>
    // ii0
  // )
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Screen2" component={Screen2} />
        <Stack.Screen name="Screen1" component={Home} />
        <Stack.Screen name="Screen3" component={Screen3} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default App
