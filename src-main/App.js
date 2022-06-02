import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import firebase from 'firebase';
import Router from './router';
import Animated, {Easing} from 'react-native-reanimated';
import {runTiming} from 'react-native-redash';
import MapView from 'react-native-maps';

export default class App extends Component {
  componentDidMount() {
    const config = {
      apiKey: 'AIzaSyCdhwzjrv_90SD-dY7fvvKHuutOptRL9pU',
      authDomain: 'catproject-754bf.firebaseapp.com',
      databaseURL: 'https://catproject-754bf.firebaseio.com',
      projectId: 'catproject-754bf',
      storageBucket: 'catproject-754bf.appspot.com',
      messagingSenderId: '314000045535',
      appId: '1:314000045535:web:88030a35cd6042a86c406a',
      measurementId: 'G-X0DD94KEF3',
    };
    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
