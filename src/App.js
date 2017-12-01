
import { AppRegistry } from 'react-native';
import {StackNavigator,TabNavigator} from 'react-navigation';
import FristPage from './pages/frist'
import HomePage from './pages/home';
import MePage from './pages/me';
import NewPage from './pages/news';

const TabNav = TabNavigator({
    Mine: {screen: NewPage},
    Home: {screen: HomePage},
    Me: {screen: MePage}

},{
    navigationOptions: {
    headerLeft: null,
    }
});

const rout =  StackNavigator({
    Mine: {screen: FristPage},
    Home: {screen: TabNav}
},{
    navigationOptions: {

    }
});



AppRegistry.registerComponent('react_native_fast', () => rout);