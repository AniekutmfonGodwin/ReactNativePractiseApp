import React,{useState} from 'react'
import { View, Text,ScrollView, TouchableOpacity } from 'react-native'


function Selected(props) {
    return (
        <TouchableOpacity onPress={()=>props.setSelected(props.index)}>
            <Text style={{padding:3,marginHorizontal:4,borderBottomWidth:4,borderBottomColor:'red'}}>
                {props.title}
            </Text>

        </TouchableOpacity>
    )
}
function NonSelected(props) {
    return (
        <TouchableOpacity onPress={()=>props.setSelected(props.index)}>
            <Text style={{padding:3,marginHorizontal:4}}>
                {props.title}
            </Text>
        </TouchableOpacity>
    )
}

const categories = ["All News","Business","Magazine","World","Testing 1","Testing 2","Testing 3","Testing 4","Testing 5"]

export default function HorizontalScrollTab() {
    const [selected,setSelected] = useState(0)
    

    return (
        <ScrollView horizontal={true}>
            {categories.map((value,index)=>{
                return selected===index?<Selected  setSelected={setSelected} key={index} index={index} title={value} />:<NonSelected key={index} index={index}  setSelected={setSelected} title={value} />

            })}
        </ScrollView>
    )
}
