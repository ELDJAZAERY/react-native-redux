import React from 'react';
import { StyleSheet,View,StatusBar } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {connect} from 'react-redux'
import  {updateWalkthrough} from '../../redux/actionCreators'


const styles = StyleSheet.create({
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 320,
    height: 320,
    resizeMode: 'contain'
  }, 
  bigImage:{
    width: 400,
    height: 200,
    resizeMode: 'contain'
  },
  lastText:{
    fontSize:30,
  },
  lastTitle:{
    color:'#A5000D',
    fontSize:40,
    textAlign:'center',
  },
  secondTitle:{
    textAlign:'center',
  }
});

const slides = [
  {
    key: '1',
    title:'Archiver l’information',
    text: "Vos comptes rendus de visites commerciales resteront consultables à vie, dans l’espace « Back-office » de l’application !",
    image: require('../assets/cartintro1.png'),
    imageStyle: styles.image,
    backgroundColor: '#A5000D',
  },
  {
    key: '2',
    title: "Rester informé",
    titleStyle:styles.secondTitle,
    text:"A l’aide de scénarios d’e-mail envoyez automatiquement aux acteurs concernés vos factures et devis et accélérez leur traitement.",
    image: require('../assets/cartintro2.jpeg'),
    imageStyle: styles.image,
    backgroundColor: '#019587',
  },
  {
    key: '3',
    title: "Merci pour votre confiance",
    titleStyle: styles.lastTitle,
    text:"Allons-y -->",
    textStyle:styles.lastText,
    image: require('../assets/cartintro3.png'),
    imageStyle: styles.bigImage,
    backgroundColor: '#C2C2C2',
  }
];

class walkthough extends React.Component {
  static navigationOptions={
    header: null
  }
  _onDone = () => {
    this.props.updateWalkthrough(true)
    this.props.navigation.navigate('login')
  }
  _renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon
          name="keyboard-arrow-right"
          color="rgba(255, 255, 255, .9)"
          size={30}
          style={{ backgroundColor: 'transparent' }}
        />
      </View>
    );
  }
  _renderPrevButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon
          name="keyboard-arrow-left"
          color="rgba(255, 255, 255, .9)"
          size={30}
          style={{ backgroundColor: 'transparent' }}
        />
      </View>
    );
  }
  _renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon
          name="check"
          color="rgba(255, 255, 255, .9)"
          size={30}
          style={{ backgroundColor: 'transparent' }}
        />
      </View>
    );
  }
  render() {
    return(
      <AppIntroSlider
        slides={slides}
        onDone={this._onDone}
        showPrevButton={true}
        renderDoneButton={this._renderDoneButton}
        renderNextButton={this._renderNextButton}
        renderPrevButton={this._renderPrevButton}
      />
    )
  }
}

export default connect(null, {updateWalkthrough})(walkthough)