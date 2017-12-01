
import { AppRegistry } from 'react-native';
import {StackNavigator,TabNavigator} from 'react-navigation';
import FristPage from './js/pages/frist'
import HomePage from './js/pages/home';
import MePage from './js/pages/me';

const TabNav = TabNavigator({
    Mine: {screen: HomePage},
    Me: {screen: MePage}
})

const rout =  StackNavigator({
    Mine: {screen: FristPage},
    Home: {screen: TabNav}
});



AppRegistry.registerComponent('react_native_fast', () => rout);