import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {Home,NewsDetail,Orders,OrdersDetail,ScanQRCode} from '../../containers/pages'

// STACKNAVIGATOR BERPINDAH HALAMAN

const HomeStack = createStackNavigator(
  {
  
  Home: {
    screen: Home,
  },
  NewsDetail: {
      screen: NewsDetail,
    },
},
{
  headerMode:'none',
  initialRouteName:'Home'
  }

);

const OrderStack = createStackNavigator(
  {
  
  Orders:{
    screen: Orders
  },
  OrdersDetail:{
    screen: OrdersDetail
  }
  },
{
  headerMode:'none',
  initialRouteName:'Orders'
  }

);

const ScanStack = createStackNavigator(
  {
  
  ScanQRCode:{
    screen:ScanQRCode
  }
  },
{
  headerMode:'none',
  initialRouteName:'ScanQRCode'
  }

);

// createSwitchNavigator= Tidak memiliki fungsi back
const Router = createSwitchNavigator(
    {
    
    HomeStack,OrderStack,ScanStack
    },
  {
    headerMode:'none',
    initialRouteName:'HomeStack'
    }

  );

  export default createAppContainer(Router);