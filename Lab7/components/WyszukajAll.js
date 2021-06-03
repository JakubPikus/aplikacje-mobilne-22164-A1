import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, SafeAreaView } from 'react-native';
import styles from './styles';
import { Icon } from 'react-native-elements'
import { Card } from 'react-native-elements'
import * as SQLite from 'expo-sqlite';


var db = SQLite.openDatabase("UserDatabase.db");


const WyszukajAll = () => {
  let [flatListItems, setFlatListItems] = useState([]);

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM table_user',
        [],
        (tx, results) => {
          var temp = [];
          for (let i = 0; i < results.rows.length; ++i)
            temp.push(results.rows.item(i));
          setFlatListItems(temp);
          
          console.log(flatListItems);
        }
      );
    });
  }, []);

  let listViewItemSeparator = () => {
    return (
      <View
        style={{
          height: 0.2,
          width: '100%',
          backgroundColor: '#808080'
        }}
      />
    );
  };

  let listItemView = (item) => {
    return (
      <View
        key={item.user_id}
        style={{margin:'2%', backgroundColor: '#F4CE93', padding: 20 ,borderWidth: 1, borderColor:'black',borderRadius:10 }}>
        <Text>Id: {item.user_id}</Text>
        <Text>Imie: {item.user_name}</Text>
        <Text>Numer: {item.user_contact}</Text>
        <Text>Adres: {item.user_address}</Text>
      </View>
    );
  };
  return (
        <View style={{ flex: 1 }}>
          <FlatList
            data={flatListItems}
            ItemSeparatorComponent={listViewItemSeparator}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => listItemView(item)}
          />
        </View>
  );
}
export default WyszukajAll;



