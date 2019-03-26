import React, { Component } from 'react'
import { Text, View } from 'react-native'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Settings extends Component {

  static navigationOptions = {
    drawerLabel: 'Settings',
    drawerIcon: () => (
      <Icon name="settings" size={27} color="#900" />
    ),
  };

  render() {
    return (
      <View>
        <Text> Settings Screen !! </Text>
      </View>
    )
  }

}
