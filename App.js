
import { AppRegistry } from 'react-native';
import {StackNavigator} from 'react-navigation';
import FristPge from './js/frist'
import HomePage from './js/home';

const rout =  StackNavigator({
    Frist: {screen: FristPge},
    Home: {screen: HomePage},
});



AppRegistry.registerComponent('react_native_fast', () => rout);