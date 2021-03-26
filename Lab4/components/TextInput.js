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
          <Text style={styles.TextInputText}>1 - Bez zmian</Text>
          <TextInput style={styles.TextInput}/>
        </View>

        <View style={styles.TextInputViewText}>
          <Text style={styles.TextInputText}>2 - Placeholder</Text>
          <TextInput style={styles.TextInput} placeholder="Uzupełnij tutaj..."/>
        </View>

        <View style={styles.TextInputViewText}>
          <Text style={styles.TextInputText}>3 - Limit znaków (3)</Text>
          <TextInput style={styles.TextInput} maxLength={3}/>
        </View>

        <View style={styles.TextInputViewText}>
          <Text style={styles.TextInputText}>4 - Blokada uzupełnienia</Text>
          <TextInput style={styles.TextInput} editable={false} />
        </View>

        <View style={styles.TextInputViewText}>
          <Text style={styles.TextInputText}>5 - Odblokowane uzupełnianie w nowej lini</Text>
          <TextInput style={styles.TextInput} multiline={true} />
        </View>
      </View>
    )
  }
}