import React, { Component, useState } from 'react';
import { View, SafeAreaView, Text} from 'react-native';
import styles from './styles';
import * as SQLite from 'expo-sqlite';
import Mytextinput from './Mytextinput';
import Mybutton from './Mybutton';

var db = SQLite.openDatabase("UserDatabase.db");


const Wyszukaj = () => {
  let [inputUserId, setInputUserId] = useState('');
  let [userData, setUserData] = useState({});

  let searchUser = () => {
    console.log(inputUserId);
    setUserData({});
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM table_user where user_id = ?',
        [inputUserId],
        (tx, results) => {
          var len = results.rows.length;
          console.log('len', len);
          if (len > 0) {
            setUserData(results.rows.item(0));
          } else {
            alert('Nie znaleziono użytkownika');
          }
        }
      );
    });
  };
  return (
    
        <View>
          <Mytextinput
            placeholder="Wpisz Id Użytkownika"
            onChangeText={
              (inputUserId) => setInputUserId(inputUserId)
            }
            style={{ padding: 10 }}
          />
          <View style={{ alignItems: 'center', paddingTop: 15 }}>
            <Mybutton title="Wyszukaj Użytkownika" customClick={searchUser} />
          </View>
          <View
            style={{
              marginLeft: 35,
              marginRight: 35,
              marginTop: 10
            }}>
            <Text>User Id: {userData.user_id}</Text>
            <Text>User Name: {userData.user_name}</Text>
            <Text>User Contact: {userData.user_contact}</Text>
            <Text>User Address: {userData.user_address}</Text>
          
          
          </View>
        </View>
      
  );
}
export default Wyszukaj;