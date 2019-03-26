import React from 'react'
import { 
  createStackNavigator,
  createSwitchNavigator,
  createDrawerNavigator,
  createAppContainer,
} from "react-navigation";
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import store, { persistor } from './redux/store'


// ### Public Screens 
import intro       from "./screens/intro/intro";
import walkthrough from "./screens/intro/walkthrough";

import login       from './screens/auth/login'
import signup      from './screens/auth/signup'

// ## phoneAuth
import first       from './screens/phoneAuth/first'
import second      from './screens/phoneAuth/second'


// ### App Screens 
import Home     from './screens/App/Home'
import Settings from './screens/App/Settings.js'


const AuthStack = createStackNavigator({
    login,
    signup,
    first,
    second,
},{
    initialRouteName: 'login'
})

 
const AppStack = createDrawerNavigator({
    Home,
    Settings,
},{
    initialRouteName: "Home"
});


const AppContainer = createAppContainer(createSwitchNavigator({
  intro,
  walkthrough,
  AuthStack,
  AppStack,
},{
    initialRouteName: 'intro',
}));

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <AppContainer />
        </PersistGate>
      </Provider>
    )
  }
}
