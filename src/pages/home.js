
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Image,
    Text,
    View
} from 'react-native';

export default class HomePage extends React.Component<{}> {
    static navigationOptions = {
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
});
