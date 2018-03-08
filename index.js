import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import App from './src/App';
export default class reactNativeFast extends Component {
    render() {
        return (
            <App />
        );
    }
}
AppRegistry.registerComponent('react_native_fast', () => reactNativeFast);