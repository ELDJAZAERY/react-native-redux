import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  StatusBar,
  Dimensions,
} from 'react-native'
import { Button } from 'react-native-elements'

const { width, height } = Dimensions.get("window");
const background = require("../assets/background1.jpg");
const backIcon = require("../assets/back.png");
const personIcon = require("../assets/signup_person.png");
const lockIcon = require("../assets/signup_lock.png");
const emailIcon = require("../assets/signup_email.png");
const birthdayIcon = require("../assets/signup_birthday.png");

export default class SignupVriew extends Component {
  static navigationOptions = {
    header: null
  }
  state = {
    username: '',
    password: '',
    iconSignup: 'navigate-next',
    loadingSignup: false,

  }
  signupPressed = () => {
    this.setState({ loadingSignup: true })
    this.props.navigation.navigate('phoneAuth')
  }
  
  render() {
    return (
      <View style={styles.container}>
        <StatusBar translucent={true} backgroundColor={'rgba(0,0,0,.3)'} />
        <ImageBackground source={background} style={styles.background} resizeMode="cover">
          <View style={styles.groupContainer}>
            <KeyboardAvoidingView style={styles.inputsContainer} behavior="padding" enabled>
              <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
                <View style={styles.scrollContainer}>

                  <View style={{...styles.inputContainer,marginTop : 50}}>
                    <View style={styles.iconContainer}>
                      <Image
                        source={personIcon}
                        style={styles.inputIcon}
                        resizeMode="contain"
                      />
                    </View>
                    <TextInput
                      style={[styles.input, styles.whiteFont]}
                      placeholder="Nom d'utilisateur"
                      placeholderTextColor="#FFF"
                      underlineColorAndroid='transparent'
                    />
                  </View>

                  <View style={styles.inputContainer}>
                    <View style={styles.iconContainer}>
                      <Image
                        source={emailIcon}
                        style={styles.inputIcon}
                        resizeMode="contain"
                      />
                    </View>
                    <TextInput
                      style={[styles.input, styles.whiteFont]}
                      placeholder="Email"
                      placeholderTextColor="#FFF"
                    />
                  </View>

                  <View style={styles.inputContainer}>
                    <View style={styles.iconContainer}>
                      <Image
                        source={lockIcon}
                        style={styles.inputIcon}
                        resizeMode="contain"
                      />
                    </View>
                    <TextInput
                      secureTextEntry={true}
                      style={[styles.input, styles.whiteFont]}
                      placeholder="Mot de Pass"
                      placeholderTextColor="#FFF"
                    />
                  </View>

                  <View style={styles.inputContainer}>
                    <View style={styles.iconContainer}>
                      <Image
                        source={birthdayIcon}
                        style={styles.inputIcon}
                        resizeMode="contain"
                      />
                    </View>
                    <TextInput
                      style={[styles.input, styles.whiteFont]}
                      placeholder="N° de registre Commerce"
                      placeholderTextColor="#FFF"
                      underlineColorAndroid='transparent'
                    />
                  </View>

                  <View style={styles.footerContainer}>
                    <TouchableOpacity>
                      <Button
                        title='Inscription'
                        onPress={this.signupPressed}
                        rightIcon={{ name: this.state.iconSignup, size: 20 }}
                        backgroundColor='#A5000D'
                        loading={this.state.loadingSignup}
                        onPress={this.signupPressed}
                        rounded
                        large
                      />
                    </TouchableOpacity>

                    <TouchableOpacity onPress = { () => this.props.navigation.navigate('login')}>
                      <View style={styles.signin}>
                        <Text style={styles.greyFont}>
                          Vous avez déjà un compte?
                        <Text style={styles.whiteFont}> Se connecter</Text>
                        </Text>
                      </View>
                    </TouchableOpacity>

                  </View>
                </View>
              </ScrollView>
            </KeyboardAvoidingView>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  groupContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,.5)',
    padding: 30,
  },
  background: {
    width,
    height,
  },
  scrollContainer : {
    flex : 10 ,
    justifyContent : 'center',
   
  },
  inputsContainer: {
    flex: 1,
    marginTop: 10,
  },
  footerContainer: {
    flex:1,
    marginTop : 50,
  },
  inputs: {
    paddingVertical: 20,
    color: "white"
  },
  inputContainer: {
    borderWidth: 1,
    borderBottomColor: '#CCC',
    borderColor: 'transparent',
    flexDirection: 'row',
    height: 75,
  },
  iconContainer: {
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputIcon: {
    width: 30,
    height: 30,
  },
  input: {
    flex: 1,
    fontSize: 20,
  },
  signup: {
    backgroundColor: '#A5000D',
  },
  signin: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    marginTop: 5,
  },
  greyFont: {
    color: '#D8D8D8'
  },
  whiteFont: {
    color: '#FFF'
  }
})