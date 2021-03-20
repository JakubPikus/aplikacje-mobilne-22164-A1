import React, { Component } from 'react';
import { Text, ActivityIndicator, View } from 'react-native';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import styles from './styles';



export default class Step extends Component {
  render(){
    const stepButton = {
      color: '#ffffff',
      fontWeight: 'bold'
    };
    const ikonyStyle = {
            activeStepIconBorderColor: '#ffffff',
            activeLabelColor: '#ffffff',
            activeStepNumColor: 'white',
            activeStepIconColor: '#ffffff',
            completedStepIconColor: '#ffffff',
            completedProgressBarColor: '#ffffff',
            completedCheckColor: '#e09d00'
          };

   
    return (
      <View style={styles.hookView}>


        <View style={{flex: 1}}>
        <ProgressSteps {...ikonyStyle}>

        <ProgressStep label="Strona pierwsza" previousBtnTextStyle={stepButton} nextBtnTextStyle={stepButton}>
            <View style={{ alignItems: 'center' }}>
            </View>
            <ActivityIndicator size="large" color="#654336" />
        </ProgressStep>


        <ProgressStep label="Strona druga" previousBtnTextStyle={stepButton} nextBtnTextStyle={stepButton}>
            <View style={{ alignItems: 'center' }}>
            </View>
            <ActivityIndicator size = "large" color = '#ffffff'/>
        </ProgressStep>


        <ProgressStep label="Strona trzecia" previousBtnTextStyle={stepButton} nextBtnTextStyle={stepButton} >
            <View style={{ alignItems: 'center' }}>
            </View>
            <ActivityIndicator size="small" color="#ff0000" />
        </ProgressStep>


        </ProgressSteps>
        </View>

      </View>
    );
  }
}