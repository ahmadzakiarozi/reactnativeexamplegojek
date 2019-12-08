import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  Button,
  TouchableOpacity
} from 'react-native';
import 'react-native-gesture-handler';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import GopayFeature from './src/components/molecules/GopayFeatures/index.js';
import SearcFeatures from './src/components/molecules/SearchFeatures/index.js'
import GoNews from './src/components/molecules/GoNews/index.js';
import GoInfo from './src/components/molecules/GoInfo/index.js';
import GoBanner from './src/components/molecules/GoBanner/index.js';
import ScrollProduct from './src/containers/organisms/ScrollProduct/index.js';
import Navbar from './src/components/molecules/Navbar/index.js';
import MainFiture from './src/components/molecules/MainFitures/index.js'

import Router from './src/config/router'
// PROPS MEMBUAT DINAMIS COMPONENT
// DENGAN FUNCTIONAL COMPONENT


// KELAS KOMPONENT

export class HomeScreen extends Component{
  render() {
    return (
      <Router/>
    );
  }
}
const styles = StyleSheet.create({
  
});

export default HomeScreen;


