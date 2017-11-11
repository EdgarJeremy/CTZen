/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Button,
  TouchableHighlight
} from 'react-native';
import styles from './app/styles/styles';

export default class App extends Component {
  constructor() {
    super();
  }

  handleClick(e) {
    alert("test");
  }

  render() {
    return (
      <View style={styles.container}>

        <Image
          source={require("./app/img/logo.png")}
          style={styles.logoImage}
          resizeMode="contain"
        />
        
        <TextInput
          style={styles.loginInput}
          secureTextEntry={true}
          placeholder="Secret Key"
          placeholderTextColor="#99999999"
        />

        <View>
          <TouchableHighlight onPress={this.handleClick.bind(this)} style={styles.btnLogin}>
            <Text style={{color: "#ffffff",textAlign: "center", fontSize: 16}}>MASUK</Text>
          </TouchableHighlight>
        </View>

        <Text>
          Dikembangkan oleh _tagconn developer team.
        </Text>

      </View>
    );
  }
}
