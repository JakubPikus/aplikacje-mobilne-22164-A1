import React, {Component} from 'react';
import {Text, View} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class ComponentToLoad extends Component {
    constructor(props){
        super(props)

        const n = props.length ? props.length : 0
        
        const znaki ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let ciag = ' ';
        const znakiN = znaki.length;
        for ( let i = 0; i < n; i++ ) {
            ciag += znaki.charAt(Math.floor(Math.random() * znakiN));
        }

        this.state = { text: ciag }
    }
    render(){ 
        return (
            <ScrollView>
                <Text>{this.state.text}</Text>
            </ScrollView>
        )
    };
}