import React from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity} from 'react-native'

const screen = Dimensions.get("window")
const buttonWidth = screen.width / 4
const Button = ({onPress, text}) => {
    
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}



const styles = StyleSheet.create({
    text: {
        color:'#fff',
        fontSize: 25
    },
    textSecondary:{
        color: '#060606'

    },
    button: {
        backgroundColor: '#333333',
        flex: 1,
        height: buttonWidth - 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: buttonWidth,
        margin: 5
    },
})

export default Button