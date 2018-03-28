import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Drawers from './routes';
import getStore from './redux'

const store = getStore();

export default class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Provider store={store}>
                <Drawers/>
            </Provider>
        )
    }
}
