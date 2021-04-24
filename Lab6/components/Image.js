import React, { Component } from 'react';
import { Text, View, TextInput, Image } from 'react-native';
import styles from './styles';
import { Card } from 'react-native-elements'




export default class ImageComp extends Component {

  render(){
    return (
      <View style={{backgroundColor: '#1791e8', flex: 1, alignItems: 'center', justifyContent: 'space-around'}}>
        <Card>
        <Image
            source={{uri: 'https://zapodaj.net/images/d3eb72e56ad54.png'}}
            style={{width: 356,
              height: 149, }}
          />
        </Card>
        <Card>
          <Image
            source={require('../static/2.png')}
            style={{width: 356,
            height: 149, }}
          />
        </Card>
          
      </View>
    )
  }
}