import React from 'react';
import {
    Text,
    View,
    Button
} from 'react-native';
import NavbarIcon from '../../../components/molecules/NavbarIcon';
const Orders = () => {
    return (
        <View style={{flex:1}}>
            <View style={{flex:1}}> 
            
            <Button title="Go Details" onPress={()=> props.navigation.navigate('OrderDetail')}></Button>
            
            </View>
            <NavbarIcon />
        </View>
            
    )
}
export default Orders;