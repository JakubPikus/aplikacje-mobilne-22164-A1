import React, { useEffect } from 'react';
import { View, Text, SafeAreaView} from 'react-native';
import styles from './styles';
import Mybutton from './Mybutton';
import Mytext from './Mytext';
import * as SQLite from 'expo-sqlite';

var db = SQLite.openDatabase("UserDatabase.db");

const Start = ({ navigation }) => {
    useEffect(() => {
      db.transaction(function (txn) {
        txn.executeSql(
          "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user'",
          [],
          function (tx, res) {
            console.log('item:', res.rows.length);
            if (res.rows.length == 0) {
              txn.executeSql('DROP TABLE IF EXISTS table_user', []);
              txn.executeSql(
                'CREATE TABLE IF NOT EXISTS table_user(user_id INTEGER PRIMARY KEY AUTOINCREMENT, user_name VARCHAR(20), user_contact INT(10), user_address VARCHAR(255))',
                []
              );
            }
          }
        );
      });
    }, []);
  
    return (
      <View style={{ flex: 1, flexDirection: 'column',justifyContent: 'space-around',alignItems: 'center'}}>
        <Mybutton
          title="Zarejestruj"
          customClick={() => navigation.navigate('Zarejestruj')}
        />
        <Mybutton
          title="Edycja"
          customClick={() => navigation.navigate('Edycja')}
        />
        <Mybutton
          title="Wyszukaj"
          customClick={() => navigation.navigate('Wyszukaj')}
        />
        <Mybutton
          title="Wypisz wszystko"
          customClick={() => navigation.navigate('WyszukajAll')}
        />
        <Mybutton
          title="Usuń"
          customClick={() => navigation.navigate('Usun')}
        />
      </View>
    );
  };
  
  export default Start;







