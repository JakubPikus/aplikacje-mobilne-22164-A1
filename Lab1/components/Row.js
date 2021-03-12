import React from 'react'
import { StyleSheet, View } from 'react-native'

const Row = ({children}) => {
    return (
        <View style={{flexDirection: 'row'}}>{children}</View>
    )
}

const styles = StyleSheet.create({})

export default Row