import React, { useState } from 'react';
import { View, ScrollView, KeyboardAvoidingView, Alert, SafeAreaView, Text } from 'react-native';
import styles from './styles';
import { Card } from 'react-native-elements'
import Mytextinput from './Mytextinput';
import Mybutton from './Mybutton';
import * as SQLite from 'expo-sqlite';

var db = SQLite.openDatabase("UserDatabase.db");

const Zarejestruj = ({ navigation }) => {
  let [userName, setUserName] = useState('');
  let [userContact, setUserContact] = useState('');
  let [userAddress, setUserAddress] = useState('');

  let register_user = () => {
    console.log(userName, userContact, userAddress);

    if (!userName) {
      alert('Wpisz Imie');
      return;
    }
    if (!userContact) {
      alert('Wpisz Numer');
      return;
    }
    if (!userAddress) {
      alert('Wpisz Adres');
      return;
    }

    db.transaction(function (tx) {
      tx.executeSql(
        'INSERT INTO table_user (user_name, user_contact, user_address) VALUES (?,?,?)',
        [userName, userContact, userAddress],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Sukces',
              'Rejestracja powiodła się',
              [
                {
                  text: 'Ok',
                  onPress: () => navigation.navigate('Start'),
                },
              ],
              { cancelable: false }
            );
          } else alert('Rejestracja nie powiodła się');
        }
      );
    });
  };

  
  return (
            <View>
              <Mytextinput
                placeholder="Wpisz Imie"
                onChangeText={
                  (userName) => setUserName(userName)
                }
                style={{ padding: 10 }}
              />
              <Mytextinput
                placeholder="Wpisz Numer"
                onChangeText={
                  (userContact) => setUserContact(userContact)
                }
                maxLength={10}
                keyboardType="numeric"
                style={{ padding: 10 }}
              />
              <Mytextinput
                placeholder="Wpisz Adres"
                onChangeText={
                  (userAddress) => setUserAddress(userAddress)
                }
                maxLength={225}
                numberOfLines={5}
                multiline={true}
                style={{ textAlignVertical: 'top', padding: 10 }}
              />
              <View style={{ alignItems: 'center', paddingTop: 15 }}>
                <Mybutton title="Zatwierdź" customClick={register_user}/>
              </View>
            </View>
  )
  
}

export default Zarejestruj;