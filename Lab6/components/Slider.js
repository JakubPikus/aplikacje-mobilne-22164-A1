import React, { Component, useState } from 'react';
import { View, Slider, Image} from 'react-native';
import styles from './styles';



export default class SliderComp extends Component {
  state = {
    firstImageScale: 1
  }
  resizeFirstImage = (value) => {
      this.setState({firstImageScale: value});
  }
  render(){
      return (
        <View style={{backgroundColor: '#e09d00', flex: 1, alignItems: 'center', justifyContent: 'space-around'}}>
          <Image  source={require('../static/smile.png')}     
                  style={{ width: 180,height: 180, transform: [{ scale: this.state.firstImageScale }] }} 
          /> 
          <Slider
              style={{width: 400, height: 40}}
              value={1}
              minimumValue={0.1}
              maximumValue={2}
              thumbTintColor='#FFFFFF'
              minimumTrackTintColor="#FFFFFF"
              maximumTrackTintColor="#000000"
              onValueChange={this.resizeFirstImage}
          />
        </View>
      );
    }
  }