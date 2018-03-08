'use strict';
import { combineReducers } from 'redux';
import configureStore from  './store'
import currentUser from  './login'
export default ()=>{
    let rootReducer = combineReducers({
        currentUser
    });

    const appReducer = (state, action) => {
        if (action.type === 'LOGOUT') {
            state = {}
        }
        return rootReducer(state, action)
    };

    const store = configureStore(appReducer);
    return store
}

