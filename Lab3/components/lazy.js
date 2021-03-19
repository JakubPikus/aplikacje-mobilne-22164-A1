import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { Icon } from 'react-native-elements'


export default class lazy extends Component {
  render(){
    return (
      <View style={styles.viewAlign}>
        <View style={styles.restView}>
        
        </View> 
        <View style={styles.restText}>
        
        </View>
      </View>
  );
  }
}