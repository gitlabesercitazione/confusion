import { createStackNavigator } from 'react-navigation'
import MenuContainer from './Menu'
import Login from '../components/Login/Login'
const EntryStack = createStackNavigator(
  {
    UserLogin: {
      screen: Login,
    }
  },
  {
    headerMode: 'float', 
  }
);
export const RootStack = createStackNavigator(
  {
    EntryStack: { screen: EntryStack },
    MenuStack: { screen: MenuContainer },
  },
  {
    headerMode: 'none',
  }
)