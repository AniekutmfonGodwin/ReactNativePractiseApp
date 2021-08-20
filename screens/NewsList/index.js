import React from 'react'
import {View,Text,ScrollView, Button} from 'react-native';
import HorizontalCard from './Cards/HorizontalCard';
import VerticalCard from './Cards/VerticalCard';
import HorizontalScrollTab from './HorizontalScrollTab';



function NewsList({navigation}){

    return (
        <View style={{padding:10}}>
            <HorizontalScrollTab/>
            {/* <Button title="goto detail" onPress={()=>navigation.navigate("detail",{name:"anies",age:44})} /> */}
            <ScrollView horizontal={true} style={{marginTop:10}}>
                <HorizontalCard/>
                <HorizontalCard/>
                <HorizontalCard/>
                <HorizontalCard/>
                <HorizontalCard/>
                <HorizontalCard/>
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



export default NewsList