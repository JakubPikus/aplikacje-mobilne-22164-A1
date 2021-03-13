import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';
import { Icon } from 'react-native-elements'


export default function spread({ navigation }) {
  return (
    <View>
      <View style={styles.spreadDescription} >
        <Text style={styles.spreadText}>Wprowadza możliwość łatwiejszego i szybszego wykonania niektórych operacji. Jego zadaniem jest „rozbicie” powtarzalnych kolekcji danych (tj. tablice, ciągi znaków) na pojedyncze elementy, które można przypisać do zmiennych lub używać w wieloargumentowych funkcjach.</Text>
      </View>

      <View style={styles.spreadView}>
        <TouchableOpacity style={styles.viewAlign}  onPress={() => navigation.push('Rest')}>
          <Icon reverse
            name='external-link'
            type='font-awesome'
            color='#1791e8'
          />
          <Text style={styles.spreadText}>Rest</Text>
        </TouchableOpacity >
        <TouchableOpacity style={styles.viewAlign} onPress={() => navigation.push('Hook')}>
          <Icon reverse
            name='external-link'
            type='font-awesome'
            color='#1791e8'
          />
          <Text style={styles.spreadText} >Hook</Text>
        </TouchableOpacity >
      </View>



      
    </View>
  );
}