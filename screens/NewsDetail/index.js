import React from 'react'
import {View,Text} from 'react-native';




function NewsDetail({navigation,route}){
    const { title } = route.params;
    

    return (
        <View>
            <Text>
                detaile screen with title {title}
            </Text>
        </View>
    )
}



export default NewsDetail