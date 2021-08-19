import React from 'react'
import {View,Text,ScrollView, Button} from 'react-native';
import HorizontalCard from './Cards/HorizontalCard';
import VerticalCard from './Cards/VerticalCard';



function NewsList({navigation}){
    return (
        <View>
            <Button title="goto detail" onPress={()=>navigation.navigate("detail",{name:"anies",age:44})} />
            <ScrollView horizontal={true}>
                <HorizontalCard/>
                <HorizontalCard/>
                <HorizontalCard/>
                <HorizontalCard/>
                <HorizontalCard/>
                <HorizontalCard/>
            </ScrollView>
            <View>
                <VerticalCard/>
            </View>
        </View>
    )
}



export default NewsList