import React, { Component } from 'react';
import { View } from 'react-native';
import styles from './styles';
import DatePicker from 'react-native-datepicker'


export default class DatePickerComp extends Component {
  constructor(props){
    super(props)
    this.state = {date: new Date()}
}
  render(){
    return (
      <View style={styles.DatePickerView}>
        <View style={styles.DatePickerViewCal}>
          <View style={styles.DatePickerViewCalMid}>
            <DatePicker style={{alignSelf: 'center'}}
                date={this.state.date}
                mode="date"
                format="DD-MM-YYYY"
                onDateChange={(date) => {
                    this.setState({date: date});
                    alert(this.state.date)
                }}
            />
          </View>
        </View>
      </View >
  );
  }
}


