import React, { Component } from 'react';
import {StackNavigator,TabNavigator} from 'react-navigation';
import {
    Image, StyleSheet,
} from 'react-native';
import {
    FristPage,
    HomePage,
    MePage,
    NewPage} from './pages'

const TabNav = TabNavigator({
    New: {screen: NewPage},
    Home: {screen: HomePage},
    Me: {screen: MePage}

}, {
    navigationOptions: ({navigation}) => ({
        title:function(){
            const {routeName} = navigation.state;
            switch (routeName) {
                case 'Home':
                    return 'Home';
                case 'New':
                    return 'News';
                default:
                    return 'Me';
            }
        }(),
        tabBarLabel: function(){
            const {routeName} = navigation.state;
            switch (routeName) {
                case 'Home':
                    return 'Home';
                case 'New':
                    return 'News';
                default:
                    return 'Me';
            }
        }(),
        tabBarIcon: ({focused, tintColor}) => {
            const {routeName} = navigation.state;
            switch (routeName) {
                case 'Home':
                    return  <Image
                        source={require('./assets/imgs/tab-home.png')}
                        style={[styles.icon, {tintColor: tintColor}]}
                    />;
                case 'New':
                    return <Image
                        source={require('./assets/imgs/tab-news.png')}
                         style={[styles.icon, {tintColor: tintColor}]}
                    />;
                default:
                    return <Image
                        source={require('./assets/imgs/tab-me.png')}
                        style={[styles.icon, {tintColor: tintColor}]}
                    />;
            }
        },
        tabBarOptions: {
            activeTintColor: 'red',
            inactiveTintColor: 'gray',
        },
    }),
})

const styles = StyleSheet.create({
    icon: {
        width: 25,
        height: 25,
    },
});



const Routes =  StackNavigator({
    Frist: {screen: FristPage},
    Home: {screen: TabNav},
},{
    navigationOptions: {

    }
});



export default Routes;