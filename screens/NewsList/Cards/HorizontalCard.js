import React from 'react'
import { View,Text,ImageBackground } from "react-native";

const image = {uri:'https://reactjs.org/logo-og.png'}

function HorizontalCard(){
    return (
        <ImageBackground source={image} resizeMode="cover">
        <Text> hello this is it</Text>
        </ImageBackground>
    )
}


export default HorizontalCard