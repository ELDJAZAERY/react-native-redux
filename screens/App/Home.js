import React, { Component } from 'react'
import {
  Text,
  View,
  StatusBar,
} from 'react-native'

import Icon from 'react-native-vector-icons/AntDesign';


export default class Home extends Component {
  
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: () => (
      <Icon name="home" size={27} color="#900" />
    ),
  };


  render() {
    return (
      <View>
        <StatusBar backgroundColor = 'rgba(0,0,0,.3)' />
        <View >


        </View>
        <Text> Home Screen !!! </Text>
      </View>
    )
  }

}
