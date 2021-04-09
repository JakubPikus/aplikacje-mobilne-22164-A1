import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet} from 'react-native';
import styles from './styles';

export default function Start({ navigation }) {
  return (
    <View style={styles.startView}>
        <TouchableOpacity style={styles.startButton} onPress={() => navigation.push('ScrollView v1')}>
            <Text style={styles.startText}>ScrollView v1</Text>
        </TouchableOpacity >
        <TouchableOpacity style={styles.startButton}  onPress={() => navigation.push('ScrollView v2')}>
            <Text style={styles.startText} >ScrollView v2</Text>
        </TouchableOpacity >
        <TouchableOpacity style={styles.startButton}  onPress={() => navigation.push('Touchable')}>
            <Text style={styles.startText}>Touchable</Text>
        </TouchableOpacity >
        <TouchableOpacity style={styles.startButton}  onPress={() => navigation.push('Swipeable')}>
            <Text style={styles.startText}>Swipeable</Text>
        </TouchableOpacity >
    </View>
  );
}









