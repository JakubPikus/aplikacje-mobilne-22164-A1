import React, { Component, useEffect, useState } from 'react';
import { Button, Text,TextInput, View } from 'react-native';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Card } from 'react-native-elements'
import { Icon } from 'react-native-elements'


export default class AsyncStorageComp extends Component {
  constructor(){
    super()
  }
  state = {
      Key:'',
      Value:'',
      readKey:''
  }
  storeData = async () => {
      var key = this.state.Key
      var value = this.state.Value
      console.log(key)
      console.log(value)
      await AsyncStorage.setItem(key,value);
      console.log(await AsyncStorage.getItem(key))
  };
  retrieveData = async () => {
      var key = this.state.readKey
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
          alert('Klucz '+key+' ma wartość '+value);
      }else{
          alert('Podany element nie istnieje');
      }
  };
  render(){
    return (
      <View style={{backgroundColor: '#e09d00', flex: 1, alignItems: 'center', justifyContent: 'space-around'}}>

      <Card>
        <View>
            <Text style={{alignSelf: 'center'}}>Podaj wartość do zapisania</Text>

            <View style={{flexDirection: 'row', paddingRight: 20}}>
                <Icon name='key' type='font-awesome' color='#e09d00' size={15} style={{paddingTop: 6, paddingRight: 6}}/>
                <TextInput onEndEditing={event =>{this.setState({Key: event.nativeEvent.text})}} placeholder="Podaj klucz" style={{borderBottomWidth: 1, borderBottomColor: '#e09d00', width: 150 }} />
            </View>

            <View style={{flexDirection: 'row'}}>
                <Icon name='arrow-right' type='font-awesome' color='#e09d00' size={15} style={{paddingTop: 6, paddingRight: 6}}/>
                <TextInput onEndEditing={event =>{this.setState({Value: event.nativeEvent.text})}} placeholder="Wpisz wartość" style={{borderBottomWidth: 1, borderBottomColor: '#e09d00', width: 150 }} />
            </View>
            <View style={{alignItems: 'center'}}>
              <Icon raised name='plus-circle' type='font-awesome' onPress={this.storeData} color='#e09d00'/>
            </View>
            
        </View>
        
        <View style={{paddingTop: 20}}>
          
            <Text style={{alignSelf: 'center'}}>Podaj klucz, aby odczytać dane</Text>
            <View style={{flexDirection: 'row', paddingRight: 20}}>
                <Icon name='key' type='font-awesome' color='#e09d00' size={15} style={{paddingTop: 6, paddingRight: 6}}/>
                <TextInput onEndEditing={event =>{this.setState({readKey: event.nativeEvent.text})}} placeholder="Wpisz klucz" style={{borderBottomWidth: 1, borderBottomColor: '#e09d00', width: 150 }}/>
            </View>
            <View style={{alignItems: 'center'}}>
              <Icon raised name='search' type='font-awesome' onPress={this.retrieveData} color='#e09d00'/>
            </View>
        </View>
      </Card>




      </View >
  );
  }
}