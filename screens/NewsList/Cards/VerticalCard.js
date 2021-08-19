import React from 'react'
import {View,Text,Image} from 'react-native'
import { AntDesign } from '@expo/vector-icons';


export default function VerticalCard() {
    return (
        <View style={{
            marginTop:40,
            height:200,
            width:"100%",
            borderRadius:10,
            flexDirection:'row'
            }}>

            <Image style={{
                height:200,
                width:100,
                borderTopLeftRadius:10,
                borderBottomLeftRadius:10
                }} 
                source={{uri:"https://mythologysource.com/wp-content/uploads/2021/01/hel.png"}} 
                
                />

            <View style={{padding:10,justifyContent:"space-evenly",backgroundColor:'#e7e9eb',borderBottomRightRadius:10,borderTopRightRadius:10}}>
                {/* title */}
                <Text style={{color:"#e93d25",fontWeight:600,fontSize:18}}>
                    hello world
                </Text>


                {/* description */}
                <Text style={{color:"#26262d",fontWeight:800,width:200}}>
                "Neque porro quisquam est qui dolorem ipsum 
                quia dolor sit amet, consectetur, adipisci 
                velit..."
                </Text>



                {/* bootom view for icons */}
                <View style={{flexDirection:"row",justifyContent:"space-evenly",alignItems:"center"}}>

                    <View style={{flexDirection:"row",marginHorizontal:4,justifyContent:"center",alignItems:"center"}}>
                        <AntDesign name="rightcircle" size={24} color="black" />
                        <Text style={{marginHorizontal:5}}>
                            33.3k
                        </Text>
                    </View>
                    
                    <View style={{flexDirection:"row",marginHorizontal:4,justifyContent:"center",alignItems:"center"}}>
                        <AntDesign name="rightcircle" size={24} color="black" />
                        <Text style={{marginHorizontal:5}}>
                            33.3k
                        </Text>
                    </View>
                    <View style={{flexDirection:"row",marginHorizontal:4,justifyContent:"center",alignItems:"center"}}>
                        <AntDesign name="rightcircle" size={24} color="black" />
                        <Text style={{marginHorizontal:5}}>
                            33.3k
                        </Text>
                    </View>
                   
                    
                </View>
            </View>
        </View>
    )
}
