import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { Icon } from 'react-native-elements'


export default function hook({ navigation }) {
  return (
    <View style={styles.hookView}>


      <View style={styles.viewAlign}>
        <View style={styles.hookBorderText}>
          <Text style={styles.hookText} >Hook jest specjalną funkcją, która pozwala „zahaczyć się” w wewnętrzne mechanizmy Reacta. Na przykład useState jest hookiem, który pozwala korzystać ze stanu w komponencie funkcyjnym. Jeśli po stworzeniu komponentu funkcyjnego zorientujemy się, że potrzebujemy przechować kilka wartości w stanie, można skorzystać z hooka z wewnątrz istniejącego komponentu funkcyjnego.</Text>
        </View>
      </View>

      <View style={styles.hookButton}>
        <TouchableOpacity onPress={() => navigation.push('Spread')}>
          <Icon
            name='chevron-circle-left'
            type='font-awesome'
            color='#ffffff'
          />
        </TouchableOpacity >


        <TouchableOpacity onPress={() => navigation.push('Rest')}>

        <Icon
          name='chevron-circle-right'
          type='font-awesome'
          color='#ffffff'
        />
        </TouchableOpacity>
      </View>

      

     
      
      

      

      
      
    </View>
  );
}