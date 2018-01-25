import React, { Component } from 'react';
import { Text, Image } from 'react-native';


export default class App extends Component {
  render() {
    return (
      <Image source={require('./ballotbox-logo-blue-31405a.png')} style={{width: 470, height: 130}} />
    );
  }
}
