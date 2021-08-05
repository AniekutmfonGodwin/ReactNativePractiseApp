import React from 'react';
import {View,Text} from 'react-native'




function UserProfile({name,children,age}){
    console.log("this is an age",age)
    
    return (
      <View>
        <Text styel={{
            
        }}>
          Hello { name} 
        </Text>
        {children}
      </View>
    )
  }


  export default UserProfile


