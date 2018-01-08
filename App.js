
import React, { Component } from 'react';
import Home from './src/Home';
import Chat from './src/Chat';
import {
  Router,
  Scene,
  Stack,
 } from 'react-native-router-flux';
 import {
  Platform,
 } from 'react-native';

 console.ignoredYellowBox = [
  'Setting a timer'
  ]

export default class App extends Component {
  render() {
    return (
      <Router>
        <Stack key='root' >
          <Scene key='home' component={Home} hideNavBar='true'/>
          <Scene key='chat' component={Chat} title='Chat'/>
        </Stack>
      </Router>
    );
  }
}

