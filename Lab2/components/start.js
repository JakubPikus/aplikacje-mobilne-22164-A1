import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet} from 'react-native';
import styles from './styles';

export default function start({ navigation }) {
  return (
    <View style={styles.startView}>
        <TouchableOpacity style={styles.startButton} onPress={() => navigation.push('Spread')}>
            <Text style={styles.startText}>Spread</Text>
        </TouchableOpacity >
        <TouchableOpacity style={styles.startButton}  onPress={() => navigation.push('Rest')}>
            <Text style={styles.startText} >Rest</Text>
        </TouchableOpacity >
        <TouchableOpacity style={styles.startButton}  onPress={() => navigation.push('Hook')}>
            <Text style={styles.startText}>Hook</Text>
        </TouchableOpacity >
    </View>
  );
}









