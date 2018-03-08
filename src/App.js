import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Routers from './routes';
import getStore from './redux'

const store = getStore();

export default class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Provider store={store}>
                <Routers/>
            </Provider>
        )
    }
}
