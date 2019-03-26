import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
  StatusBar,
  KeyboardAvoidingView,
  ScrollView
} from 'react-native';

import { ImageLoader } from '../intro/intro'
import { connect } from 'react-redux'
import { loginUser} from '../../redux/actionCreators'
import SnackBar from 'react-native-snackbar'
import { Button } from 'react-native-elements'


const { width, height } = Dimensions.get("window");
const background = require("../assets/background1.jpg");
const mark = require("../assets/wazy.png");
const lockIcon = require("../assets/login1_lock.png");
const personIcon = require("../assets/login1_person.png");

class LoginScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      usernameError: '',
      passwordError: '',
      loadingSignIn: false,
      iconLogin: 'touch-app'
    }
    this.handelUsername = this.handelUsername.bind(this)
  }

  static navigationOptions = {
    header: null
  }


  onSignupPressed = () => {
    this.props.navigation.navigate('signup')
  }


  signInPressed = () => {
    if(this.state.username && this.state.password){
      this.setState({ loadingSignIn: true })
      this.props.loginUser(this.state.username, this.state.password)  
    }else{
      if(this.state.username = "")
        this.setState({usernameError : "Veuillez donner vort nom !!"})
      if(this.state.password = "")
        this.setState({passwordError : "Veuillez ecrire votre mot de passe !!"})
    }
  }


  componentWillReceiveProps(nextProps) {
    //loginStatus

    this.setState({ loadingSignIn: false })

    if (nextProps.user.loginError) {
      SnackBar.show({
        title: nextProps.user.loginError,
        duration: SnackBar.LENGTH_INDEFINITE,
        action: {
          title: 'CLOSE',
          color: 'white',
        },
      })
      return;
    }
    
    if (nextProps.user.token) {
      this.setState({ iconLogin: 'done' })
      SnackBar.show({
        title: "Connection reussite :) ",
        duration: SnackBar.LENGTH_SHORT,
      })
      this.props.navigation.navigate('AppStack')
    }
  
  }

  handelUsername = (username) => {
    if (username.includes(' ')) {
      this.setState({ usernameError: "le Nom ne doit pas contenir d'espace" })
    }
    else {
      this.setState({ usernameError: "" })
      this.setState({ username: username })
    }
  }

  handelPassword = (password) => {
    //this.setState({usernameError:""})
    this.setState({ password })
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar translucent={true} backgroundColor={'rgba(0,0,0,.3)'} />
        <ImageBackground source={background} style={styles.background} resizeMode="cover">
          <View style={styles.groupContainer}>
            <KeyboardAvoidingView style={styles.wrapper} behavior='padding' enabled>
              <ScrollView showsVerticalScrollIndicator={false} >
                <View style={styles.markWrap}>
                  <ImageLoader source={mark} style={styles.mark} resizeMode="contain" />
                </View>
                <View style={styles.inputWrap}>
                  <View style={styles.iconWrap}>
                    <Image source={personIcon} style={styles.icon} resizeMode="contain" />
                  </View>
                  <TextInput
                    ref={ref => this.usernameInput = ref}
                    placeholder="Nom d'utilisateur"
                    placeholderTextColor="#FFF"
                    style={styles.input}
                    value={this.state.username}
                    onChangeText={this.handelUsername}
                  />

                </View>
                {(this.state.usernameError)
                  ? (<View style={{ paddingLeft: 50 , backgroundColor : 'rgba(255,255,255,.3)'}}>
                      <Text style={{ color: "#A5000D" }}>{this.state.usernameError}</Text>
                    </View>)
                  : (<View></View>)
                }
                <View style={styles.inputWrap}>
                  <View style={styles.iconWrap}>
                    <Image source={lockIcon} style={styles.icon} resizeMode="contain" />
                  </View>
                  <TextInput
                    placeholderTextColor="#FFF"
                    placeholder="Mot de Pass"
                    style={styles.input}
                    value={this.state.password}
                    onChangeText={this.handelPassword}
                    secureTextEntry
                  />
                </View>
                {(this.state.passwordError)
                  ? (<View style={{ paddingLeft: 50 , backgroundColor : 'rgba(255,255,255,.3)'}}>
                      <Text style={{ color: "#A5000D" }}>{this.state.passwordError}</Text>
                    </View>)
                  : (<View></View>)
                }
                <TouchableOpacity activeOpacity={.5}>
                  <View>
                    <Text style={styles.forgotPasswordText}>Mot de passe oublié?</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={.5} /*onPress={this.signInPressed}*/>
                  <View style={{ paddingTop: 15 }} >
                    <Button
                      title='Se Connecter'
                      rightIcon={{ name: this.state.iconLogin }}
                      backgroundColor='#A5000D'
                      loading={this.state.loadingSignIn}
                      onPress={this.signInPressed}
                      rounded
                      large
                    />
                  </View>
                </TouchableOpacity>
                <View style={styles.container}>
                  <View style={styles.signupWrap}>
                    <Text style={styles.accountText}>Vous n'avez pas de compte?</Text>
                    <TouchableOpacity activeOpacity={.5} onPress={this.onSignupPressed}>
                      <View>
                        <Text pointerEvents="none" style={styles.signupLinkText}>Inscription</Text>
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

const styles = StyleSheet.create({
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
  markWrap: {
    flex: 1,
    paddingVertical: 50,
  },
  mark: {
    flex: 1,
  },
  wrapper: {
    flex : 1,
  },
  inputWrap: {
    flexDirection: "row",
    marginVertical: 10,
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#CCC",
  },
  iconWrap: {
    paddingHorizontal: 7,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    height: 20,
    width: 20,
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    fontSize: 18,
    color: 'white',
  },
  button: {
    backgroundColor: "#A5000D",
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
  },
  forgotPasswordText: {
    color: "#D8D8D8",
    backgroundColor: "transparent",
    textAlign: "right",
    paddingRight: 15,
  },
  signupWrap: {
    paddingVertical: 20,
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  accountText: {
    color: "#D8D8D8"
  },
  signupLinkText: {
    color: "#FFF",
    fontWeight: 'bold',
    marginLeft: 5,
    fontSize: 16,
  }
});

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps, { loginUser })(LoginScreen)