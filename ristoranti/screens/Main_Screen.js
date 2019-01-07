import React from 'react';
import { StyleSheet, Text, View, Image,StatusBar ,TouchableHighlight }from 'react-native';

// import { createBottomTabNavigator } from 'react-navigation'
import Explore from './Explore'
import Saved from './Saved'
import Inbox from './Inbox'
import Trips from './Trips'
import { Provider } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons'

import reducers from '../reducers';
// import { Font } from 'expo';


// import { StyleSheet, Text, View, Platform, StatusBar } from 'react-native';
import { TabNavigator, StackNavigator,createDrawerNavigator ,createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { firebaseConfig } from '../config/auth';
import { bootstrap } from '../config/bootstrap';
import { RkStyleSheet, RkTheme } from 'react-native-ui-kitten';
import NavigatorService from '../utils/navigator';

// import KittenTheme from './config/theme';

import Welcome_Screen from './Welcome_Screen';
import Register_Screen from './Register_Screen';
import Login_Screen from './Login_Screen';
// import Loading_Screen from './screens/Loading_Screen';
import Menu_Screen from './Menu_Screen';
import Orders_Screen from './Orders_Screen';
import Location_Screen from './Location_Screen';
import Profile_Screen from './Profile_Screen';
import Reset_Screen from './Reset_Screen';
import Settings_Screen from './Settings_Screen';
import { RootStack } from '../config/router';
import drawerStyles from '../drawerStyles';
import Drawer from 'react-native-drawer';


import HomeComponent from '../components/HomeComponent/HomeComponent';
import {Home} from './screenName';
var {height, width } = 100;
let routeConfigs = {
  Home: {
    screen: HomeComponent
  }
};

let drawerNavigatorConfig = {
// initialRouteName : Home,
drawerWidth : width /2
};

const Toolbar = createDrawerNavigator(routeConfigs, drawerNavigatorConfig);
export default class MainNavigator extends React.Component {

  //state = { loggedIn: true };
  state = {
    isLoaded: false,
  };

  constructor(props) {
    
    super(props);
    this.state = {drawerOpen: null};
  
    bootstrap();
  }

  componentWillMount() {
  }


  // async componentDidMount() {
  //   await  Expo.Font.loadAsync({
  //     'fontawesome': require('./assets/fonts/fontawesome.ttf'),
  //     'icomoon': require('./assets/fonts/icomoon.ttf'),
  //     'Righteous-Regular': require('./assets/fonts/Righteous-Regular.ttf'),
  //     'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
  //     'Roboto-Light': require('./assets/fonts/Roboto-Light.ttf'),
  //     'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
  //     'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
  //   });
  // }


/*

menu_scr: {
  screen: StackNavigator({
    menu_screen: { screen: Menu_Screen },
    location_screen: { screen: Location_Screen },
  })
},
orders_screen: { screen: Orders_Screen },
settings_screen: { screen: Settings_Screen },

*/
renderSideMenuContent = () => {
  return (
    <View style={{height: '100%'}}>
      <Text style={styles.sideMenuContentItem}>
        This is the side menu
      </Text>
    </View>
  )
}

renderMainContent = () => {
  if (!this.state.drawerOpen) {
    return (
      <View>
        <Text style={styles.welcome}>Push to Open Side Menu</Text>
      </View>
    )
  } else {
    return (
      <Text style={styles.drawerOpen}>
        The side menu is open
      </Text>
    )
  }
}



  render() {

    // const MainNavigator = TabNavigator({
      
    const MainNavigator = createBottomTabNavigator({
      // settings_screen: { screen: Settings_Screen },

      Explore: {
        screen: Explore,
        navigationOptions: {
          tabBarLabel: 'ESPLORA',
          tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-search-outline" color={tintColor} size={24} />
          )
        }
      },
      Saved: {
        screen: Saved,
        navigationOptions: {
          tabBarLabel: 'PREFERITI',
          tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-heart-outline" color={tintColor} size={24} />
          )
        }
      },
      Trips: {
        screen: Trips,
        navigationOptions: {
          tabBarLabel: 'PRENOTAZIONI',
          tabBarIcon: ({ tintColor }) => (
            <Image source={require('../assets/airbnb.png')} style={{ height: 24, width: 24, tintColor: tintColor }} />
          )
        }
      },
      Inbox: {
        screen: Inbox,
        navigationOptions: {
          tabBarLabel: 'RICHIESTE',
          tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-chatboxes-outline" color={tintColor} size={24} />
          )
        }
      },
      Profile: {
        screen: Login_Screen,
        navigationOptions: {
          tabBarLabel: 'PROFILO',
          tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-person-outline" color={tintColor} size={24} />
          )
        }
      }
    }, {
        tabBarOptions: {
          activeTintColor: 'red',
          inactiveTintColor: 'grey',
          style: {
            backgroundColor: 'white',
            borderTopWidth: 0,
            shadowOffset: { width: 5, height: 3 },
            shadowColor: 'black',
            shadowOpacity: 0.5,
            elevation: 5
          }
        }
      })

//       loading_scr: { screen: Loading_Screen },

    
      return (

          <View style={styles2.container}>
          {/* <Toolbar/> */}
                      <MainNavigator/>

          </View>
      );
  }
}







const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

let styles2 = RkStyleSheet.create(theme => ({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
}));