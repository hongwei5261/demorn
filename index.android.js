/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

var LoginView = require('./loginview')
var ThemeMainView = require('./thememain')

export default class untitled_rn1 extends Component {
  render() {
    return (
      <LoginView/>
    );
  }
}


AppRegistry.registerComponent('untitled_rn1', () => untitled_rn1);
