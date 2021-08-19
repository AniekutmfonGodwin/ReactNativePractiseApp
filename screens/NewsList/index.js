import React from 'react'
import {View,Text,ScrollView} from 'react-native';
import HorizontalCard from './Cards/HorizontalCard';
import VerticalCard from './Cards/VerticalCard';



function NewsList(){
    return (
        <View>
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