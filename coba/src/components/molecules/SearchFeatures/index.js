import React , {Component} from 'react';
import {
View,
Text,
ScrollView,
Image,
TextInput
} from 'react-native';

const SearchFeatures = () => {

    return (

        <View style={{marginHorizontal:17, flexDirection:'row',paddingTop:20}}>
        <View style={{position:'relative',flex:1}}>
        <TextInput placeholder="What Do You Want To Search ?" style={{borderWidth:1,paddingLeft:45,paddingRight:14, borderColor:'#E8E8E8',borderRadius:20, height:40,fontSize:13,backgroundColor:'white',marginRight:18}}/>
        <Image source= {require('../../../assets/icon/search.png')} style={{width:24,height:24, position:'absolute',top:5,left:12}} />
        </View>
        <View style={{width:35, alignItems:"center",justifyContent:"center"}}>
      <Image source={require('../../../assets/icon/promo.png')} style={{width:24,height:24,}} />
        </View>
      </View>

    )
}
export default SearchFeatures;