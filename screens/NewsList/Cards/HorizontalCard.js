import React from 'react'
import { View,Text,ImageBackground } from "react-native";

const image = {uri:'https://reactjs.org/logo-og.png'}

function HorizontalCard(){
    return (
        <ImageBackground imageStyle={{borderRadius:10}}  source={image} style={{
            height:150,
            width:300,
            padding:10,
            // flexDirection:"row",
            justifyContent:'flex-end',
            alignItems:'flex-start'
            }} resizeMode="cover">
            <Text style={{color:'white'}} > hello this is it  </Text>
            <Text style={{color:'white'}} > hello this is it  </Text>
        </ImageBackground>
        
    )
}


export default HorizontalCard