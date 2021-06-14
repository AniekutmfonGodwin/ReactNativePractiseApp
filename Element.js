import React from 'react';
import {View,Text,Button} from 'react-native';


// class based commponent and func



function Element(props) {
    // {
    //     name:"anies",
    //     age:22,
    //     format:func
    // }
    return (
        <View>
            {/* <Button onPress={props.format}  title ="click" />
            <Text>
                {props.name}
                {props.age}
            </Text> */}
            <View>
                {props.children}
            </View>
        </View>
    )
}



export default Element
