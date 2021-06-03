import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Mybutton = (props) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={props.customClick}>
      <Text style={styles.text}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 70,
    width: 300,
    backgroundColor: '#884444',
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40
  },
  text: {
    color: '#ffffff',
  },
});

export default Mybutton;