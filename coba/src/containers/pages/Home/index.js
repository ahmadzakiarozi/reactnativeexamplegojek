import React, {Component} from 'react';
import {
  
  Text,
  View,
  Image,
  
  ScrollView,
  
  TouchableOpacity
} from 'react-native';

import GopayFeature from '../../../components/molecules/GopayFeatures/index.js';
import SearcFeatures from '../../../components/molecules/SearchFeatures/index.js'
import GoNews from '../../../components/molecules/GoNews/index.js';
import GoInfo from '../../../components/molecules/GoInfo/index.js';
import GoBanner from '../../../components/molecules/GoBanner/index.js';
import ScrollProduct from '../../../containers/organisms/ScrollProduct/index.js';
import Navbar from '../../../components/molecules/Navbar/index.js';
import MainFiture from '../../../components/molecules/MainFitures/index.js'
import NavbarIcon from '../../../components/molecules/NavbarIcon/index.js';

class Home extends Component{
    render() {
        return(
            
      <View style= {{flex: 1}}>
  
      <ScrollView style={{flex:1, backgroundColor:'white'}}>
        {/* Search Bar */}
      <SearcFeatures/>
      {/* PEMBAYARAN */}
      <View style={{marginHorizontal:17,marginTop:8}}>
        <View style={{flexDirection:'row', justifyContent:'space-between',backgroundColor:'#2C5FB8',borderTopLeftRadius:4,borderTopRightRadius:4,padding:14}}> 
        {/* rata kiri-kanan justifyt */}
        <Image source={require('../../../assets/icon/gopay.png')}/>
        <Text style={{fontSize:17, fontWeight:'bold',color:'white'}} >Rp.500.000</Text>
        </View>
        <View style={{flexDirection:'row',paddingTop:20,paddingBottom:14,backgroundColor:'#2F65BD'}}>
        
          <GopayFeature onPress={()=>this.props.navigation.navigate('ScanQRCode')} title="Pay"  img={require('../../../assets/icon/pay.png')}/>
          <GopayFeature title="Nearby" img={require('../../../assets/icon/nearby.png')}/>
          <GopayFeature title="Top Up" img={require('../../../assets/icon/topup.png')}/>
          <GopayFeature title="More" img={require('../../../assets/icon/more.png')}/>
        </View>
      </View>
      
      {/* Main Fitur */}

      <View style={{flexDirection:'row',flexWrap:'wrap',marginHorizontal:0,marginTop:18}}>

         {/* membuat dua bagian dengan space-between */}
        <View style={{justifyContent:'space-between',flexDirection:'row',width:'100%',marginBottom:18}}>
         
          <MainFiture teks="Go Ride" img={require('../../../assets/icon/go-ride.png')}/>
          <MainFiture teks="Go Car" img={require('../../../assets/icon/go-car.png')}/>
          <MainFiture teks="Go BlueBird" img={require('../../../assets/icon/go-bluebird.png')}/>
          <MainFiture teks="Go Send" img={require('../../../assets/icon/go-send.png')}/>        
        </View>

      {/* membuat dua bagian dengan space-between */}
        <View style={{justifyContent:'space-between',flexDirection:'row',width:'100%',marginBottom:18}} >
      
          <MainFiture teks="Go Deals" img={require('../../../assets/icon/go-deals.png')}/>
          <MainFiture teks="Go Pulsa" img={require('../../../assets/icon/go-pulsa.png')}/>
          <MainFiture teks="Go Food" img={require('../../../assets/icon/go-food1.png')}/>
          <MainFiture teks="Go More" img={require('../../../assets/icon/go-more.png')}/>
          
        </View>
     
      </View>
      <View style={{height:17,backgroundColor:'#F2F2F4',marginTop:10}}>

      </View>

      {/* NEW SECTION OF NEWS */}
      <GoNews  onPress={() => this.props.navigation.navigate('NewsDetail')}/>

      {/* INTERNAL INFORMATION SECTION */}
     <GoInfo />

      {/* GO-FOOD BANNER SECTION */}
      <GoBanner />

        {/* BERITAKEDUA */}
      

      {/* NEARBY RESTAURANT */}
     <ScrollProduct></ScrollProduct>

     </ScrollView>

      
        {/* TOOLS BAWAH */}
        <NavbarIcon></NavbarIcon>
    
      </View>
            )
        
    }
}

export default Home;