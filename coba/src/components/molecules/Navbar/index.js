import React, {Component} from 'react';

import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';


const Navbar = (props) => {
    return (
        <View style={{alignItems:'center',flex:2, justifyContent:'center'}}>  
        
        <TouchableOpacity onPress={props.onPress}>
        <Image source= {props.gambar} style={{width:19,height:19}} />
        <Text style={{fontSize: 10, color:'#545454',marginTop:3,color:props.activate ? '#43AB4A':'#545454'}}>{props.judul1}</Text>
        </TouchableOpacity>
        </View>
        
    )
}
export default Navbar;