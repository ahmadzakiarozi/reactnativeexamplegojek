import React from 'react';
import { RNCamera } from 'react-native-camera';
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

const IconWithText =(props)=>{
    return(
        <View>
            <View style={{width:60,height:60, backgroundColor:'green',borderRadius:60  }} />
            <Text style={{maxWidth:70,textAlign:'center',marginTop:10}}>{props.title}</Text>
        </View>
    )
}

const IconAction = () =>{
    return (
        <View style={{width:35,height:35,backgroundColor:'white',borderRadius:35}} />
    )

}
class ScanQRCode extends React.Component {
    
    render() {
        return (
        
            <View style={{flex:1}}>
                <View style={{flex:1,backgroundColor:'grey'}}>
                <RNCamera
              ref={ref => {
                this.camera = ref;
              }}
              style={styles.preview}
              type={RNCamera.Constants.Type.back}
              flashMode={RNCamera.Constants.FlashMode.on}
              androidCameraPermissionOptions={{
                title: 'Permission to use camera',
                message: 'We need your permission to use your camera',
                buttonPositive: 'Ok',
                buttonNegative: 'Cancel',
              }}
              androidRecordAudioPermissionOptions={{
                title: 'Permission to use audio recording',
                message: 'We need your permission to use your audio',
                buttonPositive: 'Ok',
                buttonNegative: 'Cancel',
              }}
              onGoogleVisionBarcodesDetected={({ barcodes }) => {
                console.log(barcodes);
              }}
            />
                    <View style={{flexDirection:'row',paddingHorizontal:16,marginHorizontal:16,justifyContent:'space-between',  position:'absolute',left:0,top:0}}>
                        <IconAction />
                    
                        <View style={{flexDirection:'row',justifyContent:'space-between',width:80}}>
                            <IconAction/>
                            <IconAction/>
                        </View>
                     
           
        </View>
        </View>
            <View>
                <View style={{height:200,backgroundColor:'white',paddingHorizontal:16}}>
                   <View style={{alignItems:'center',marginTop:8,marginBottom:18}}>
                       <View style={{width:40,height:4,backgroundColor:'#E0E0E0',marginVertical:1}}></View>
                       <View style={{width:40,height:4,backgroundColor:'#E0E0E0',marginVertical:1}}></View>
                   </View>
                   
                    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                    <Text style={{fontSize:24,fontWeight:'bold'}}>More Options</Text>
                    <Text style={{fontSize:14,fontWeight:'bold',color:'#61A756'}}>SHORTCUT</Text>
                   
                 
                </View>
                <View style={{flexDirection:'row',alignItems:'flex-start',marginTop:14}}>
                    <View style={{flexDirection:'row',alignItems:'flex-start',width:180,justifyContent:'space-between'}}>
                        <IconWithText title="Phone Number"/>
                        <IconWithText title="Gopay Code"/>
                    </View>
                    <View style={{width:1,height:60,backgroundColor:'grey'}} />
                        <Text style={{flex:1,paddingLeft:14}}>Your Recent Gopay receivers will show here. No Admin fees!</Text>
                   
    
                    </View>
                </View>
            </View>
            </View>
            
        )  
    }

    
    
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'black',
    },
    preview: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
      width:'100%',
      height:'100%'
     
    },
    capture: {
      flex: 0,
      backgroundColor: '#fff',
      borderRadius: 5,
      padding: 15,
      paddingHorizontal: 20,
      alignSelf: 'center',
      margin: 20,
    },
  });
export default ScanQRCode;