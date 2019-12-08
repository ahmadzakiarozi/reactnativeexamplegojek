import React , {Component} from 'react';
import {
View,
Text,
ScrollView,
Image,
TextInput,
TouchableOpacity
} from 'react-native';


const GoBanner = () =>{
    return(
        <View style={{paddingTop:16, paddingHorizontal:16}}>
          <View style={{position:'relative'}}>
            <Image source={require('../../../assets/icon/food-banner.jpg')} style={{height: 180, width:'100%',borderRadius:7}}/> 
            <View style={{width:'100%',height:'100%',position:'absolute',top:0,left:0,backgroundColor:'black',opacity:0.3,borderRadius:7}}> 
            </View>
            <View style={{height:20, width:80, position:'absolute',top:16,left:10}}>
            <Image source={require('../../../assets/icon/go-food.png')} style={{width:undefined, height:undefined,resizeMode:'contain',flex:1}} />
            </View>
          </View>
          <View style={{paddingTop:16, paddingBottom:20,borderBottomColor:'#E8E9ED',borderBottomWidth:1}}>
          <Text style={{fontSize:16, fontWeight:'bold', color:'#1C1C1C'}}>  Go - Food Banner</Text>
          <Text style={{fontSize:14,fontWeight:'normal',color:'#7A7A7A',marginBottom:12}}> Banner Untuk Go Food</Text>
            {/* BUTTON */}
          <View style={{flex:1,paddingLeft:12}}>
          <TouchableOpacity style={{backgroundColor:'#61A756',borderRadius:6,paddingHorizontal:12,alignSelf:"flex-end"}}>
          <Text style={{fontSize:14, fontWeight:'bold', color:'white'}}>VOUCHER</Text>
          </TouchableOpacity>
          </View>
          </View>
      </View>

    )

}
export default GoBanner;