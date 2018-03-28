import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {Sentry} from  'react-native-sentry';
if (!__DEV__) {
    Sentry.config('https://44e2a8612cab4ff1b895f617f70cab38:c0e8e62cf8944f95984ebf9f59cc7d8a@sentry.io/713856').install();
    global.console = {
        info: () => {},
        log: () => {},
        // warn: () => {},
        error: () => {},
    };
}
AppRegistry.registerComponent('react_native_fast', () => App);