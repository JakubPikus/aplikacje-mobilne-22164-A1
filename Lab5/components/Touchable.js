import React, { Component } from 'react';
import {View, Text,  Touchable, TouchableOpacity, TouchableHighlight} from 'react-native';
import styles from './styles';
import renderIf from './renderIf'
import { Icon } from 'react-native-elements'



export default class TouchableComp extends Component{

  constructor(){
    super();
    this.state ={
      status:false
    }
  }

  toggleStatus(){
    this.setState({
      status:!this.state.status
    });
  }
  render(){
    return (
      <View style={{backgroundColor: '#e09d00', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        
        <View>
        {renderIf(!this.state.status)(
          <TouchableOpacity onPress={()=>this.toggleStatus()}>
          <Icon raised
            name='smile-o'
            type='font-awesome'
            color='#a67503'
          />
          </TouchableOpacity>)}


          {renderIf(this.state.status)(
          <TouchableHighlight onPress={()=>this.toggleStatus()}>
          <Icon raised
            name='frown-o'
            type='font-awesome'
            color='#a67503'
          />
          </TouchableHighlight>)}


        </View>


        
      </View>
    );
  }
}