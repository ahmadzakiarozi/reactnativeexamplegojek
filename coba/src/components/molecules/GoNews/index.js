import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';

const GoNews = ({onPress}) => {

    return (
    <View style={{paddingTop:16, paddingHorizontal:16}}>
        <View style={{position:'relative'}}>
        <Image source={require('../../../assets/icon/sepak-bola.jpg')} style={{height: 180, width:'100%',borderRadius:7}}/>
        <View style={{width:'100%',height:'100%',position:'absolute',top:0,left:0,backgroundColor:'black',opacity:0.3,borderRadius:7}}> 
        </View>
        <View style={{height:20, width:80, position:'absolute',top:16,left:10}}>
        <Image source={require('../../../assets/icon/white.png')} style={{width:undefined, height:undefined,resizeMode:'contain',flex:1}} />
        </View>
        </View>
        
        <View style={{paddingTop:16, paddingBottom:20,borderBottomColor:'#E8E9ED',borderBottomWidth:1}}>
        <Text style={{fontSize:16,fontWeight:'bold',color:'#1C1C1C'}}>Go - News</Text>
        <Text style={{fontSize:14, fontWeight:'normal',color:'#7A7A7A',marginBottom:12}}> Dimas pencetak ulung dalam timnas Indonesia U-23</Text>
           {/* CUSTOM BUTTON */}
          <TouchableOpacity onPress={onPress} style={{backgroundColor:'#61A756',borderRadius:7,paddingHorizontal:12, paddingVertical:11,alignSelf:'flex-end'}}>
            <Text style={{fontSize:13, fontWeight:'bold', color:'white'}}>READ</Text>
          </TouchableOpacity>
        </View>
        
    </View>

       
    )
}

export default GoNews;