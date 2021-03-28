import React, { useState } from 'react';
import { Text, View, Modal, TouchableOpacity, Switch} from 'react-native';
import styles from './styles';
import { Icon } from 'react-native-elements'



export default function ModalComp() {
  const [modalVisible, setModalVisible] = useState(false);
    return (
      <View style={styles.ModalView}>
        <Modal
          animationType="fade"
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.ModalViewIn}>
            <View style={{top: 28}}>
              <Text style={styles.ModalText}>{Math.floor(Math.random()*100)}</Text>
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
        <Text style={styles.ModalText}>Pokaż pseudolosową liczbę</Text>
        <Switch 
        trackColor={{true: 'white', false: 'grey'}}
        thumbColor='#FFF'
        value={modalVisible} 
        onValueChange={() => setModalVisible(true)}
        />
      </View>
    );
  }