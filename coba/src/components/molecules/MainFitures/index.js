import React, {Component}from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Image
} from 'react-native';

class MainFiture extends Component{
    render(){
      return (
        <View style={{width:'25%',alignItems:'center'}}>
          <View style={{width:58,height:58,borderWidth:1,borderColor:'#EFEFEF',borderRadius:18,justifyContent:'center',alignItems:'center'}}>
            <Image source={this.props.img}/>
      <Text style={{fontSize:10,fontWeight:'bold',textAlign:'center',marginTop:6}}>{this.props.teks}</Text>
          </View>
         </View>
      )
    }
  }
  export default MainFiture;