import React from "react";
import PropTypes from "prop-types";
import { View, Picker, Text } from "react-native";

export default function Select(props) {
  return (
    <View>
      <Text>{props.label}</Text>
      <Picker {...props}>
        {props.items.map(i => (
          <Picker.Item key={i.label} {...i} />
        ))}
      </Picker>
    </View>
  );
}

Select.propTypes = {
  items: PropTypes.array,
  label: PropTypes.string
};