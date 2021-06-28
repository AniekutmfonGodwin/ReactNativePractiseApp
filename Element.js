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



/*
looping through component
*/
var data = [
    {
            id:1,
            name:"Premium crystal black sunglasses",
            price:5000,
            image:'https://www.w3schools.com/js/default.asp',
            category:'wallet'
    },
    {
            id:2,
            name:"Premium  black sunglasses",
            price:400,
            image:'https://www.w3schools.com/js/default.asp',
            category:'jewries'
    },{
            id:3,
            name:"Premium  black sunglasses",
            price:400,
            image:'https://www.w3schools.com/js/default.asp',
            category:'facemasks'
    },

]

export default function Receipts(props) {
    const [category,setCategory] = useState("facemasks")


    
    return (
        <View>
            {data.filter((item)=>item.category===category).map((value,index)=>(
                <View>
                    <Image source={{uri:value.image}} />
                    <Text>
                        {value.name}
                    </Text>
                    <Text>
                        {value.price}
                    </Text>
                </View>
            ))}
        </View>
    )
}
