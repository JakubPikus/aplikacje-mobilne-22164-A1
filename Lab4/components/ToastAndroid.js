import React, { Component, useEffect, useState} from 'react';
import {View, Text, Modal,ToastAndroid, TouchableOpacity, ActivityIndicator  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements'
import styles from './styles';

export default function(props) {
  const navigation = useNavigation();
  return <ToastAndroidComp {...props} navigation={navigation} />;
}

const ToastButton = () => {
const [visible, setvisible] = React.useState(false);
const [switchOn, setswitchOn] = React.useState(false);
const [time, setTime] = useState(0);

useEffect(() => setvisible(false), [visible]);

const handleButtonPress = () => {
  setvisible(true);
};

const onToggleSwitch = () => {
  setswitchOn(!switchOn);
};


var promise = null
const createPromise = () => {
  let time = Math.floor(Math.random()*10000)
  setTime(time)
  promise = new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve('ukryj');
      }, time);
  });
}

return (
  <View >
      <Toast visible={visible} />
      
      

        <TouchableOpacity 
        onPress={() => {
          onToggleSwitch()
          handleButtonPress()
          createPromise()
          promise.then((value) => {
              if(value == 'ukryj'){
                  setswitchOn(false)
              }
          });
        }}>
          <Icon raised
            name='clock-o'
            type='font-awesome'
            color='#7a0ce9'
          />
        </TouchableOpacity>

      <Modal
          animationType="fade"
          visible={switchOn}
          onRequestClose={() => {
              setModalVisible(!switchOn);
          }}
      >
          <View style={styles.ToastViewIn} >
              <View style={styles.ToastViewInMid}>
                  <Text style={styles.ToastText} onPress={onToggleSwitch} >Modal wyłączy się za {time/1000} sekund</Text>
              </View>
              <ActivityIndicator style={{top:50}} size="large" color="#fff" />
          </View>
      </Modal> 
  </View>
);
};

const Toast = ({ visible}) => {
  if (visible) {
      ToastAndroid.showWithGravityAndOffset(
          "Loading",
          ToastAndroid.LONG,
          ToastAndroid.CENTER,
          0,
          500
      );
  }
  return null;
};


class ToastAndroidComp extends Component {
  render(){
    return (
      <View style={styles.ToastView}>
        <ToastButton />
      </View>
    );
  }
}


