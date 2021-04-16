import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet} from 'react-native';
import styles from './styles';

export default function Start({ navigation }) {
  return (
    <View style={styles.startView}>
        <TouchableOpacity style={styles.startButton} onPress={() => navigation.push('Image')}>
            <Text style={styles.startText}>Image</Text>
        </TouchableOpacity >
        <TouchableOpacity style={styles.startButton}  onPress={() => navigation.push('NetInfo')}>
            <Text style={styles.startText} >NetInfo</Text>
        </TouchableOpacity >
        <TouchableOpacity style={styles.startButton}  onPress={() => navigation.push('Slider')}>
            <Text style={styles.startText}>Slider</Text>
        </TouchableOpacity >
        <TouchableOpacity style={styles.startButton}  onPress={() => navigation.push('LazyIcons')}>
            <Text style={styles.startText}>Lazy Icons</Text>
        </TouchableOpacity >
        <TouchableOpacity style={styles.startButton}  onPress={() => navigation.push('SynchronizacjaDanych')}>
            <Text style={styles.startText}>Synchronizacja Danych</Text>
        </TouchableOpacity >
        <TouchableOpacity style={styles.startButton}  onPress={() => navigation.push('AsyncStorage')}>
            <Text style={styles.startText}>Async Storage</Text>
        </TouchableOpacity >
    </View>
  );
}









