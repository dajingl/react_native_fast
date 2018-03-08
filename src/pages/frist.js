
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    Button,
    View
} from 'react-native';

export default class FristPage extends React.Component<{}> {
    static navigationOptions = {
        header: null
    };
    constructor(props) {
        super(props);
        this.state = {};
    };

    GoHomePage() {
        const navigate = this.props.navigation.navigate;
         navigate('Home', {} , '');
    }


    render() {
        return (
            <View style={styles.container}>
                <Text>Do something</Text>
                <Button
                    onPress = {this.GoHomePage.bind(this)}
                    title="Go >>"
                />
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
