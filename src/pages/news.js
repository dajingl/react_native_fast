
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Image,
    Text,
    View
} from 'react-native';

export default class NewPage extends React.Component<{}> {
    static navigationOptions = {
        title: 'News',
        tabBarLabel: 'news',
        tabBarIcon: ({ tintColor}) => (
            <Image
                source={require('../assets/imgs/tab-news.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />)
    };

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <View style={styles.container}>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    icon: {
        width: 25,
        height: 25,
    },
});
