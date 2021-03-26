import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';
import styles from './styles';
import { Icon } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';




export default class TextInputComp extends Component {

  render(){
    return (
      <View style={styles.TextInputView}>

        <View style={styles.TextInputViewText}>
          <Text style={styles.TextInputText}>Zad1</Text>
          <TextInput style={styles.TextInput} placeholder="useless placeholder" keyboardType="numeric"/>
        </View>

        <View style={styles.TextInputViewText}>
          <Text style={styles.TextInputText}>Zad2</Text>
          <TextInput style={styles.TextInput} placeholder="useless placeholder" keyboardType="numeric"/>
        </View>

        <View style={styles.TextInputViewText}>
          <Text style={styles.TextInputText}>Zad3</Text>
          <TextInput style={styles.TextInput} placeholder="useless placeholder" keyboardType="numeric"/>
        </View>

        <View style={styles.TextInputViewText}>
          <Text style={styles.TextInputText}>Zad4</Text>
          <TextInput style={styles.TextInput} placeholder="useless placeholder" keyboardType="numeric"/>
        </View>

        <View style={styles.TextInputViewText}>
          <Text style={styles.TextInputText}>Zad5</Text>
          <TextInput style={styles.TextInput} placeholder="useless placeholder" keyboardType="numeric"/>
        </View>


      </View>
    )
  }
}