import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { Icon } from 'react-native-elements'


export default function rest({ navigation }) {
  return (
    <View style={styles.viewAlign}>
      <View style={styles.restView}>
        <TouchableOpacity style={styles.restButton} onPress={() => navigation.push('Spread')}>
          <Icon
            name='caret-left'
            type='font-awesome'
            color='#518226'
          />
          <Text style={styles.restStyle}>Spread</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.restButton} onPress={() => navigation.push('Hook')}>
          <Text style={styles.restStyle}>Hook</Text>
          <Icon
            name='caret-right'
            type='font-awesome'
            color='#518226'
          />
        </TouchableOpacity>
      </View> 
      <View style={styles.restText}>
        <Text style={{fontSize: 20}}>Identycznie jak spread syntax wygląda rest parameter, różnicą jest miejsce użycia - w tym przypadku jako parametr funkcji. Zapis ten umożliwia zbieranie w jedną zmienną (będącą tablicą) wielu parametrów przekazywanych do funkcji. Rest operator możemy też wykorzystywać do pobierania w formie tablicy "pozostałych" wartości. Trzeba pamiętać, że rest musi występować jako ostatni w parametrach.</Text>
      </View>
    </View>
  );
}