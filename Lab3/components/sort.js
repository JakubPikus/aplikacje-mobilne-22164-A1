import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';
import { Icon } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';



const Array = ({ liczby }) => {
  var nr = 0
      return (
          <ScrollView >
           {liczby.map(liczba => <Text style={styles.sortArray} key={nr++} >{liczba}</Text>)}
          </ScrollView>
      );
};


export default class Sort extends Component {


  constructor() {
    super()
    const array = []


    for (let i = 0; i < 100; i++) {
      array.push(Math.floor(Math.random() * 1000)+1)
    }

    this.state = { 
      array 
    };

  }

  
  sort = () =>{
      this.state.array.sort((a,b) => a > b ? 1:-1)
      this.forceUpdate()
  }

  new = () => {
    const newArray = [];
    for (let j = 0; j < 100; j++) {
      newArray.push(Math.floor(Math.random() * 1000)+1)
    }

    this.state.array = newArray
    this.forceUpdate()

  }




  render(){
    return (
      <View>
        <View style={styles.sortButtons} >

          <TouchableOpacity onPress={this.sort}>
             <Icon reverse
               name='sort-numeric-asc'
               type='font-awesome'
               color='#1791e8'
             />
          </TouchableOpacity>

          <TouchableOpacity onPress={this.new}>
             <Icon reverse
               name='random'
               type='font-awesome'
               color='#1791e8'
             />
          </TouchableOpacity>
        </View>

        <View style={styles.sortViewArray}>
          <Array liczby={this.state.array} />
        
        </View>
      </View>
    );
  }
}