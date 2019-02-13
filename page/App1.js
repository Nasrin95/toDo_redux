import React, { Component } from 'react'
import { StyleSheet} from 'react-native'
import { createStore , applyMiddleware  } from 'redux'
import {Provider}  from 'react-redux'
import UserChanger from '../Component/UserChanger';
import Userlistener from '../Component/UserListener';
import reducer from '../service/reducer'
import thunk from "redux-thunk";

createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
export const store = createStoreWithMiddleware(reducer);

export default class App1 extends Component{
    render(){
        return(
            <Provider style={styles.container} store={store}>
                <Userlistener />
                <UserChanger />
            </Provider>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E1E2E7',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E1E2E7',
    },
});