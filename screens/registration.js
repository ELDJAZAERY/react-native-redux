import React from 'react'
import {View, StyleSheet, StatusBar} from 'react-native'

import ActionSheet from "./actionSheet";
import SearchBar from './components/searchBar'
import { Avatar } from 'react-native-elements';

class registration extends React.Component {

  constructor(props){
    super(props);
    this.state={
      showAction:false,
      showSearchBar:false,
    }
  }

  static navigationOptions=({navigation})=>{
    return{
      headerTitle: 'Enregistrement',
      headerTitleStyle: {
        fontWeight: 'bold',
        color:"white",
        alignSelf:'center',
        textAlign:'center',
        width: '90%',
      },
      headerLeft: (<View></View>),
      headerStyle: {backgroundColor:"#A5000D", marginTop: StatusBar.currentHeight},
    }
  }

  
  _handelShowAction=()=>{
    this.state.showAction ? this.setState({showAction:false}): this.setState({showAction:true})
    this.setState({showSearchBar:false})
  }
  
  _handelShowSearchBar=()=>{
    this.state.showSearchBar ? this.setState({showSearchBar:false}): this.setState({showSearchBar:true})
    this.setState({showAction:false})
  }
  
  addClicked=()=>{
    this.props.navigation.navigate('qrScanner')
  }
  
  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%"
        }}
      />
  )}
 
  render () {
    return (

      <View style={styles.container}>
        <StatusBar translucent={true} backgroundColor={'rgba(165,0,13,1)'} animated={true}/>
        <SearchBar showSearchBar={this.state.showSearchBar}/>
        <ActionSheet showAction={this.state.showAction}/>
        <View style={styles.regContainer} >
        </View>
        <View style={{position:'absolute', bottom:20, right:20}}>
          <Avatar
            large
            rounded
            overlayContainerStyle={{backgroundColor: '#A5000D'}}
            icon={{name: 'add' ,size:45}}  
            activeOpacity={0.7}
            onPress={this.addClicked}
          />
        </View>
      </View>
    );
  }
}
const styles= StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#cecece',

  },
  header:{
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems:'center',
  },
  util:{
    flexDirection: 'row',
    alignItems:'flex-start',
    justifyContent:'space-between'
  },
  headerText:{
    flex: 4,
    alignItems:'center',
    flexDirection: 'row',
    justifyContent:'space-around',

  },
  textHeader:{
    fontSize: 40,
    color: 'black',
    paddingLeft: 50,
  },
  regContainer:{
    flex:4
  },
  iconContainer:{
    flexDirection:'row',
    justifyContent:'space-between'
  }
})

export default registration;