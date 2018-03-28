import React, { Component } from 'react';
import {StackNavigator,TabNavigator} from 'react-navigation';
import Drawer from 'react-native-drawer'
import {
    Image, StyleSheet,
} from 'react-native';
import {
    ControlPanel,
    CommunityScreen,
    SickListScreen,
    MessageScreen,
    AddressListScreen} from './screens'

function getRoutesName(name) {
    switch (name) {
        case 'Message':
            return '消息';
        case 'Community':
            return '社区';
        case 'AddressList':
            return '通讯录';
        default:
            return '病人';
    }
}

function getRoutImg(name, tintColor) {
    switch (name) {
        case 'Message':
            return  <Image
                source={require('./assets/imgs/message_default.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />;
        case 'Community':
            return <Image
                source={require('./assets/imgs/community_default.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />;
        case 'AddressList':
            return <Image
                source={require('./assets/imgs/adress_default.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />;
        default:
            return <Image
                source={require('./assets/imgs/home_patient_down.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />;
    }
}

const TabNav = TabNavigator({
    Message: {screen: MessageScreen},
    SickList: {screen: SickListScreen},
    Community: {screen: CommunityScreen},
    AddressList: {screen: AddressListScreen},

}, {
    navigationOptions: ({navigation}) => ({
        title:function(){
            const {routeName} = navigation.state;
            return getRoutesName(routeName)
        }(),
        tabBarLabel: function(){
            const {routeName} = navigation.state;
            return getRoutesName(routeName)
        }(),
        tabBarIcon: ({focused, tintColor}) => {
            const {routeName} = navigation.state;
            return getRoutImg(routeName,tintColor);
        },
        tabBarOptions: {
            activeTintColor: 'red',
            inactiveTintColor: 'gray',
        },
    }),
});

const styles = StyleSheet.create({
    icon: {
        width: 25,
        height: 25,
    },
});



const drawerStyles = {
    drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
    main: {paddingLeft: 3},
}



const Stack =  StackNavigator({
    Home: {screen: TabNav},
},{
    navigationOptions: {

    }
});


export default class Drawers extends Component {
    closeControlPanel = () => {
        this._drawer.close()
    };
    openControlPanel = () => {
        this._drawer.open()
    };
    render () {
        return (
            <Drawer
                type="overlay"
                content={<ControlPanel />}
                tapToClose={true}
                openDrawerOffset={0.2}
                panCloseMask={0.2}
                closedDrawerOffset={-3}
                styles={drawerStyles}
                tweenHandler={(ratio) => ({
                    main: { opacity:(2-ratio)/2 }
                })}
            >
                <Stack />
            </Drawer>
        )
    }
}
