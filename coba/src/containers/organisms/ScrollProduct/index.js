import React , {Component} from 'react';
import {
View,
Text,
ScrollView,
Image
} from 'react-native';
import ScrollableItem from '../../../components/molecules/ScrollableItem';

class ScrollProduct extends Component{
    render() {
        return(
        <View>
            <View style={{height:20, width:80,marginLeft:-3,marginLeft:20}}>
              <Image source={require('../../../assets/icon/go-food.png')} style={{width:undefined, height:undefined,marginLeft:-6,resizeMode:'contain',flex:1}} />
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:16,paddingHorizontal:16}}>
              <Text style={{fontSize:17, fontWeight:'bold',color:'#1C1C1C'}}>Nearby Restaurant</Text>
              <Text style={{fontSize:17, fontWeight:'bold',color:'#61A756'}}>See All</Text>
            </View>
            
            <ScrollView horizontal style={{flexDirection:'row'}}>
              
              <ScrollableItem  title=">KFC Aeon Mall JGC" Img={require('../../../assets/icon/go-food-kfc.jpg')}/>
              <ScrollableItem  title="Bakso GM Aeon Mall JGC" Img={require('../../../assets/icon/go-food-gm.jpg')}/>
              <ScrollableItem  title="Martabak Aeon Mall JGC" Img={require('../../../assets/icon/go-food-banka.jpg')}/>
              <ScrollableItem  title="Makanan Orins Aeon Mall JGC" Img={require('../../../assets/icon/go-food-orins.jpg')}/>
              <ScrollableItem  title="Ayam Geprek Pak Bos Aeon Mall JGC" Img={require('../../../assets/icon/go-food-pak-boss.jpg')}/>
      
            </ScrollView>
            <View style={{marginTop:16,borderBottomWidth:1,borderBottomColor:'#E8E9ED',marginHorizontal:16}}>
    
            </View>
    </View>
        )
    }
}
export default ScrollProduct;