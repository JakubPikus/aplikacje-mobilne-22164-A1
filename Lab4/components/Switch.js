import React, { useState } from 'react';
import { Text, View, Modal, Switch, TouchableOpacity} from 'react-native';
import styles from './styles';
import { Icon } from 'react-native-elements'



export default function SwitchComp() {
  const [modalVisible, setModalVisible] = useState(false);
    return (
      <View style={styles.SwitchView}>
        <Modal
          animationType="fade"
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.SwitchModalView}>
            <View style={{top: 28}}>
              <Text style={styles.SwitchText}>{Math.floor(Math.random()*100)}</Text>
              <TouchableOpacity 
              onPress={() => setModalVisible(false)}>
                <Icon raised
                  name='times'
                  type='font-awesome'
                  color='#e09d00'
                />
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <Text style={styles.SwitchText}>Pokaż pseudolosową liczbę</Text>
        <TouchableOpacity 
        onPress={() => setModalVisible(true)}>
          <Icon raised
            name='random'
            type='font-awesome'
            color='#e09d00'
          />
        </TouchableOpacity>
      </View>
    );
  }