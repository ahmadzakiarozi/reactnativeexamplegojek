import React , {Component} from 'react';
import {
View,
Text,
ScrollView,
Image,
TextInput,
TouchableOpacity
} from 'react-native';

const GoInfo = () => {
    return(
<View style={{padding:16}}>
 <View style={{height:20, width:80,marginLeft:-3}}>
   <Image source={require('../../../assets/icon/gojek.png')} style={{width:undefined, height:undefined,marginLeft:-6,resizeMode:'contain',flex:1}} />
 </View>
 <Text style={{marginBottom:20,fontSize:17,fontWeight:'bold',color:'#1C1C1C',marginTop:15,marginBottom:20}}>Complete Your Profile</Text>
 <View > 
   <View style={{flexDirection:'row'}}>
     <Image source={require('../../../assets/icon/facebook-connect.png')} />
   
   <View style={{marginLeft:20,marginBottom:10,flex:1}}> 
     <Text style={{fontSize:15, color:'#4A4A4A',fontWeight:'bold'}}>Connect With Facebook</Text>
     <Text style={{fontSize:15,fontWeight:'normal',width:'70%'}}>Login Faster Without Verification Code</Text>
   </View>
 </View>
 </View>
 <TouchableOpacity style={{backgroundColor:'#61A756',borderRadius:7,paddingHorizontal:12, paddingVertical:11,alignSelf:'flex-end'}}>
     <Text style={{fontSize:13, fontWeight:'bold', color:'white',textAlign:"center"}}>CONNECT</Text>
   </TouchableOpacity>
   <View style={{borderBottomColor:'#E8E9ED', borderBottomWidth:1,marginTop:16,marginBottom:20}}></View>
</View>
    )
}
 
export default GoInfo;