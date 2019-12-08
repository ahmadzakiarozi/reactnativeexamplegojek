import React, {Component} from 'react';

import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';

import Navbar from '../../molecules/Navbar/index.js'
import { withNavigation } from 'react-navigation';

class NavbarIcon  extends Component {
    render(){
        return (
            <View style={{height:54, backgroundColor: 'white',flexDirection:'row',}}>
            <Navbar onPress={()=> this.props.navigation.navigate('Home')} gambar={require('../../../assets/icon/home.png')} judul1="Home" active={true}/>
            <Navbar  onPress={()=> this.props.navigation.navigate('Orders')} gambar={require('../../../assets/icon/order.png')} judul1="Orders"/>
            <Navbar gambar={require('../../../assets/icon/inbox.png')} judul1="Inbox"/>
            <Navbar gambar={require('../../../assets/icon/help.png')} judul1="Help"/>
            <Navbar gambar={require('../../../assets/icon/account.png')} judul1="Accounts"/>
        </View>
        
    );
    }
    
}
export default withNavigation(NavbarIcon);
