import React, { useState } from 'react';
import { View, ScrollView, Text, Button, SafeAreaView, KeyboardAvoidingView } from 'react-native';
import styles from './styles';
import NetInfo from "@react-native-community/netinfo";
import { Card } from 'react-native-elements'
import * as SQLite from 'expo-sqlite';
import Mytextinput from './Mytextinput';
import Mybutton from './Mybutton';

var db = SQLite.openDatabase("UserDatabase.db");



const Edycja = ({ navigation }) => {
  let [inputUserId, setInputUserId] = useState('');
  let [userName, setUserName] = useState('');
  let [userContact, setUserContact] = useState('');
  let [userAddress, setUserAddress] = useState('');

  let updateAllStates = (name, contact, address) => {
    setUserName(name);
    setUserContact(contact);
    setUserAddress(address);
  };

  let searchUser = () => {
    console.log(inputUserId);
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM table_user where user_id = ?',
        [inputUserId],
        (tx, results) => {
          var len = results.rows.length;
          if (len > 0) {
            let res = results.rows.item(0);
            updateAllStates(
              res.user_name,
              res.user_contact,
              res.user_address
            );
          } else {
            alert('Nie znalezionu użytkownika');
            updateAllStates('', '', '');
          }
        }
      );
    });
  };
  let updateUser = () => {
    console.log(inputUserId, userName, userContact, userAddress);

    if (!inputUserId) {
      alert('Wpisz Id');
      return;
    }
    if (!userName) {
      alert('Wpisz imie');
      return;
    }
    if (!userContact) {
      alert('Wpisz numer');
      return;
    }
    if (!userAddress) {
      alert('Wpisz adres');
      return;
    }

    db.transaction((tx) => {
      tx.executeSql(
        'UPDATE table_user set user_name=?, user_contact=? , user_address=? where user_id=?',
        [userName, userContact, userAddress, inputUserId],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Sukces',
              'Użytkonik zmieniony',
              [
                {
                  text: 'Ok',
                  onPress: () => navigation.navigate('Start'),
                },
              ],
              { cancelable: false }
            );
          } else alert('Edycja nieudana');
        }
      );
    });
  };
  
  return (
    
        <View>
              <Mytextinput
                placeholder="Wpisz Id Użytkownika"
                style={{ padding: 10 }}
                onChangeText={
                  (inputUserId) => setInputUserId(inputUserId)
                }
              />
              <View style={{ alignItems: 'center', paddingTop: 15 }}>
                <Mybutton title="Wyszukaj Użytkownika" customClick={searchUser} />
              </View>
              <Mytextinput
                placeholder="Wpisz Imie"
                value={userName}
                style={{ padding: 10 }}
                onChangeText={
                  (userName) => setUserName(userName)
                }
              />
              <Mytextinput
                placeholder="Wpisz numer"
                value={'' + userContact}
                onChangeText={
                  (userContact) => setUserContact(userContact)
                }
                maxLength={10}
                style={{ padding: 10 }}
                keyboardType="numeric"
              />
              <Mytextinput
                value={userAddress}
                placeholder="Wpisz adres"
                onChangeText={
                  (userAddress) => setUserAddress(userAddress)
                }
                maxLength={225}
                numberOfLines={5}
                multiline={true}
                style={{ textAlignVertical: 'top', padding: 10 }}
              />
              <View style={{ alignItems: 'center', paddingTop: 15 }}>
                <Mybutton title="Edytuj użytkownika" customClick={updateUser}/>
              </View>
        </View>
      
  );
  
}
export default Edycja;
