import React, { Component, useState } from 'react';
import { View, ScrollView, Text, Button } from 'react-native';
import styles from './styles';
import NetInfo from "@react-native-community/netinfo";
import { Card } from 'react-native-elements'




export default class NetInfoComp extends Component{
  NetInfoSubscribtion = null;

  constructor(props) {
    super(props);
    this.state = {
      connection_status: false,
      connection_type: null,
      connection_net_reachable: false,
      connection_wifi_enabled: false,
      connection_details: null,
    }
  }

  componentDidMount() {

    this.NetInfoSubscribtion = NetInfo.addEventListener(
      this._handleConnectivityChange,
    );

  }

  componentWillUnmount() {
    this.NetInfoSubscribtion && this.NetInfoSubscribtion();
  }

  _handleConnectivityChange = (state) => {
    this.setState({
      connection_status: state.isConnected,
      connection_type: state.type,
      connection_net_reachable: state.isInternetReachable,
      connection_wifi_enabled: state.isWifiEnabled,
      connection_details: state.details,
    })
  }
  render(){
    return (
      <View style={{backgroundColor: '#518226', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Card>
          <Text style={{fontSize: 20, alignSelf: 'center', padding: 6}}>Status połączenia: {this.state.connection_status ? 'Połączony' : 'Rozłączony'}</Text>
          <Text style={{fontSize: 20, alignSelf: 'center', padding: 6}}>Typ połączenia: {this.state.connection_type}</Text>
          <Text style={{fontSize: 20, alignSelf: 'center', padding: 6}}>Dostępność internetu: {this.state.connection_net_reachable ? 'Tak' : 'Nie'}</Text>
          <Text style={{fontSize: 20, alignSelf: 'center', padding: 6}}>Wifi: {this.state.connection_wifi_enabled ? 'Tak' : 'Nie'} </Text>
        </Card>
      </View>
    );
  }
}
