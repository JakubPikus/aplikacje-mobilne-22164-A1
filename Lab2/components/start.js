import React from 'react';
import { TouchableOpacity, Text, View} from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View>
        <TouchableOpacity onPress={() => navigation.push('spread')}>
            <Text >Spread</Text>
        </TouchableOpacity >
        <TouchableOpacity  onPress={() => navigation.push('rest')}>
            <Text >Rest</Text>
        </TouchableOpacity >
        <TouchableOpacity  onPress={() => navigation.push('hook')}>
            <Text >Hook</Text>
        </TouchableOpacity >
    </View>
  );
}