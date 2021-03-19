import React, { Component } from 'react';
import { ActivityIndicator, View } from 'react-native';
import styles from './styles';



export default class step extends Component {
  render(){
    return (
      <View style={styles.hookView}>


        <View style={[styles.container, styles.horizontal]}>
          <ActivityIndicator />
          <ActivityIndicator size="large" />
          <ActivityIndicator size="small" color="#0000ff" />
          <ActivityIndicator size="large" color="#00ff00" />
        </View>

      </View>
    );
  }
}