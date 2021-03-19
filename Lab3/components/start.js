import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet} from 'react-native';
import styles from './styles';

export default function start({ navigation }) {
  return (
    <View style={styles.startView}>
        <TouchableOpacity style={styles.startButton} onPress={() => navigation.push('Sortowanie i filtrowanie')}>
            <Text style={styles.startText}>Sortowanie i filtrowanie</Text>
        </TouchableOpacity >
        <TouchableOpacity style={styles.startButton}  onPress={() => navigation.push('Lazy loading')}>
            <Text style={styles.startText} >Lazy loading</Text>
        </TouchableOpacity >
        <TouchableOpacity style={styles.startButton}  onPress={() => navigation.push('Step progress')}>
            <Text style={styles.startText}>Step progress</Text>
        </TouchableOpacity >
    </View>
  );
}









