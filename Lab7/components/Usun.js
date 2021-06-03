import React, { useState } from 'react';
import { Text, View, Alert, SafeAreaView } from 'react-native';
import styles from './styles';
import Mytextinput from './Mytextinput';
import Mybutton from './Mybutton';
import * as SQLite from 'expo-sqlite';


var db = SQLite.openDatabase("UserDatabase.db");

const Usun = ({ navigation }) => {
  let [inputUserId, setInputUserId] = useState('');

  let deleteUser = () => {
    db.transaction((tx) => {
      tx.executeSql(
        'DELETE FROM  table_user where user_id=?',
        [inputUserId],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Sukces',
              'Użytkownik został usunięty',
              [
                {
                  text: 'Ok',
                  onPress: () => navigation.navigate('Start'),
                },
              ],
              { cancelable: false }
            );
          } else {
            alert('Wpisz poprawne Id');
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
        <Mybutton title="Usuń użytkownika" customClick={deleteUser} />
      </View>
    </View>
  );
}
export default Usun;