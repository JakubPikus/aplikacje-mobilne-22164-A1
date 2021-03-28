import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet} from 'react-native';
import styles from './styles';

export default function Start({ navigation }) {
  return (
    <View style={styles.startView}>
        <TouchableOpacity style={styles.startButton} onPress={() => navigation.push('TextInput')}>
            <Text style={styles.startText}>TextInput</Text>
        </TouchableOpacity >
        <TouchableOpacity style={styles.startButton}  onPress={() => navigation.push('Select i Picker')}>
            <Text style={styles.startText} >Select i Picker</Text>
        </TouchableOpacity >
        <TouchableOpacity style={styles.startButton}  onPress={() => navigation.push('Modal')}>
            <Text style={styles.startText}>Modal</Text>
        </TouchableOpacity >
        <TouchableOpacity style={styles.startButton}  onPress={() => navigation.push('DatePicker')}>
            <Text style={styles.startText}>DatePicker</Text>
        </TouchableOpacity >
        <TouchableOpacity style={styles.startButton}  onPress={() => navigation.push('ToastAndroid')}>
            <Text style={styles.startText}>ToastAndroid</Text>
        </TouchableOpacity >
    </View>
  );
}









