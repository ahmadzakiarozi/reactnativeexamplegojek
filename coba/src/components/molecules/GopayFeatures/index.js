import React, {Component} from 'react';
import {
  
  Text,
  View,
  Image,
 
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

// PROPS MEMBUAT DINAMIS COMPONENT
// DENGAN FUNCTIONAL COMPONENT
// DENGANFOLDERMOLECULES

const GopayFeature = (props) => {
    return(
        <View style={{flex:1,alignItems:'center'}}>
          
          <TouchableOpacity onPress={props.onPress}>
          <Image source={props.img}/>
          <Text style={{fontSize:13,fontWeight:'bold',marginTop:15,color:'white',borderBottomLeftRadius:4,borderBottomRightRadius:4}}> {props.title}</Text>
          </TouchableOpacity>
         </View>
     
      
    )
  }
  export default GopayFeature;

