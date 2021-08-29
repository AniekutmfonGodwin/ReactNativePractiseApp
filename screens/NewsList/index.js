import React, { useState } from 'react'
import {View,Text,ScrollView, Button, TouchableOpacity} from 'react-native';
import HorizontalCard from './Cards/HorizontalCard';
import VerticalCard from './Cards/VerticalCard';
import HorizontalScrollTab from './HorizontalScrollTab';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NewsDetail from '../NewsDetail';



const Stack = createNativeStackNavigator()

function NewsList({navigation}){
    const [data, setdata] = useState([
        {
            title:"news10",
            news:"hahagaga"
        },
        {
            title:"news11",
            news:"hahagaga"
        },
        {
            title:"news12",
            news:"hahagaga"
        },
    ])
    // fetch("https://mywebsite.com").then(({data})=>{
    //     setdata(data)
    // })
    // navigation.navigate("detail")

    return (
        <View style={{padding:10}}>
            <HorizontalScrollTab/>
            {/* <Button title="goto detail" onPress={()=>navigation.navigate("detail",{name:"anies",age:44})} /> */}
            <ScrollView horizontal={true} style={{marginTop:10}}>
                {
                    data.map((value)=>(
                        <TouchableOpacity onPress={()=>navigation.navigate("detail",value)}>
                            <HorizontalCard />
                        </TouchableOpacity>
                        
                    ))
                }
                
            </ScrollView>
            <View style={{marginTop:30}}>
                <View style={{marginBottom:20}}>
                    <Text style={{fontSize:20,fontWeight:600,color:"grey"}}>
                        Recent News
                    </Text>
                </View>
                <VerticalCard/>
                <VerticalCard/>
                <VerticalCard/>
                <VerticalCard/>
                <VerticalCard/>
                <VerticalCard/>
                <VerticalCard/>
                <VerticalCard/>
                <VerticalCard/>
            </View>
        </View>
    )
}



const EntryComponent = () =>{
    return (
        <Stack.Navigator>
            <Stack.Screen name="list" component={NewsList} />
            <Stack.Screen name="detail" component={NewsDetail} />
        </Stack.Navigator>
    )
}



export default EntryComponent