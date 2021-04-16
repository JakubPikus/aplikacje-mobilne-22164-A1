import React, { Component } from 'react';
import { View, Image, Text, ScrollView } from 'react-native';
import styles from './styles';




export default class ScrollViewv2Comp extends Component {

  render(){
    return (
      <View>
        <View style={{flexDirection: 'row', backgroundColor: '#45d1c4'}}>

          <ScrollView style={{top:20, height:120}}>
              <Text>
                <Image
                    source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Premier_league_trophy_icon_%28adjusted%29.png/20px-Premier_league_trophy_icon_%28adjusted%29.png'}}
                    style={{width: 20,
                    height: 20,}}/>
                    Mistrzostwo: 1901, 1906, 1922, 1923, 1947, 1964, 1966, 1973, 1976, 1977, 1979, 1980, 1982, 1983, 1984, 1986, 1988, 1990, 2020
              {"\n"}{"\n"}
              <Image
                    source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/FA_Cup.png/18px-FA_Cup.png'}}
                    style={{width: 20,
                    height: 20,}}/>
              Puchar: 1965, 1974, 1986, 1989, 1992, 2001, 2006
              {"\n"}{"\n"}
              <Image
                    source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/CommunityShield.png/20px-CommunityShield.png'}}
                    style={{width: 20,
                    height: 20,}}/>
              Superpuchar: 1964, 1965, 1966, 1974, 1976, 1977, 1979, 1980, 1982, 1986, 1988, 1989, 1990, 2001, 2006
              {"\n"}{"\n"}
              <Image
                    source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Carling.png/20px-Carling.png'}}
                    style={{width: 20,
                    height: 20,}}/>
              Puchar Ligi: 1981, 1982, 1983, 1984, 1995, 2001, 2003, 2012
              </Text>
          </ScrollView>
          <Image
                    source={{uri: 'https://m0.joe.co.uk/wp-content/uploads/2016/08/24135800/liverpoolfc.png'}}
                    style={{width: 150,
                    height: 150,}}/>
        </View>

        <View style={{flexDirection: 'row', backgroundColor:'#ed5858'}}>

          <ScrollView style={{top:20, height:120}}>
          <Text style={{color:'white'}}>
                <Image
                    source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Premier_league_trophy_icon_%28adjusted%29.png/20px-Premier_league_trophy_icon_%28adjusted%29.png'}}
                    style={{width: 20,
                    height: 20,}}/>
                    Mistrzostwo: 	1931, 1933, 1934, 1935, 1938, 1948, 1953, 1971, 1989, 1991, 1998, 2002, 2004
              {"\n"}{"\n"}
              <Image
                    source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/FA_Cup.png/18px-FA_Cup.png'}}
                    style={{width: 20,
                    height: 20,}}/>
              Puchar: 1930, 1936, 1950, 1971, 1979, 1993, 1998, 2002, 2003, 2005, 2014, 2015, 2017, 2020
              {"\n"}{"\n"}
              <Image
                    source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/CommunityShield.png/20px-CommunityShield.png'}}
                    style={{width: 20,
                    height: 20,}}/>
              Superpuchar: 1930, 1931, 1933, 1934, 1938, 1948, 1953, 1991, 1998, 1999, 2002, 2004, 2014, 2015, 2017, 2020
              {"\n"}{"\n"}
              <Image
                    source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Carling.png/20px-Carling.png'}}
                    style={{width: 20,
                    height: 20,}}/>
              Puchar Ligi: 1987, 1993
              </Text>
          </ScrollView>
          <Image
                    source={{uri: 'https://m0.joe.co.uk/wp-content/uploads/2016/08/24135323/arsenal.png'}}
                    style={{width: 150,
                    height: 150,}}/>
        </View>

        <View style={{flexDirection: 'row', backgroundColor:'#06005e'}}>

          <ScrollView style={{top:20, height:120}}>
          <Text style={{color:'white'}}>
                <Image
                    source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Premier_league_trophy_icon_%28adjusted%29.png/20px-Premier_league_trophy_icon_%28adjusted%29.png'}}
                    style={{width: 20,
                    height: 20,}}/>
                    Mistrzostwo: 1951, 1961
              {"\n"}{"\n"}
              <Image
                    source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/FA_Cup.png/18px-FA_Cup.png'}}
                    style={{width: 20,
                    height: 20,}}/>
              Puchar: 1901, 1921, 1961, 1962, 1967, 1981, 1982, 1991
              {"\n"}{"\n"}
              <Image
                    source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Carling.png/20px-Carling.png'}}
                    style={{width: 20,
                    height: 20,}}/>
              Puchar Ligi: 1971, 1973, 1999, 2008
              </Text>
          </ScrollView>
          <Image
                    source={{uri: 'https://m0.joe.co.uk/wp-content/uploads/2016/08/24135238/tottenham.png'}}
                    style={{width: 150,
                    height: 150,}}/>
        </View>

        <View style={{flexDirection: 'row', backgroundColor:'#f5c800'}}>

          <ScrollView style={{top:20, height:120}}>
          <Text>
                <Image
                    source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Premier_league_trophy_icon_%28adjusted%29.png/20px-Premier_league_trophy_icon_%28adjusted%29.png'}}
                    style={{width: 20,
                    height: 20,}}/>
                    Mistrzostwo: 1908, 1911, 1952, 1956, 1957, 1965, 1967, 1993, 1994, 1996, 1997, 1999, 2000, 2001, 2003, 2007, 2008, 2009, 2011, 2013
              {"\n"}{"\n"}
              <Image
                    source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/FA_Cup.png/18px-FA_Cup.png'}}
                    style={{width: 20,
                    height: 20,}}/>
              Puchar: 1909, 1948, 1963, 1977, 1983, 1985, 1990, 1994, 1996, 1999, 2004, 2016
              {"\n"}{"\n"}
              <Image
                    source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/CommunityShield.png/20px-CommunityShield.png'}}
                    style={{width: 20,
                    height: 20,}}/>
              Superpuchar: 1908, 1911, 1952, 1956, 1957, 1965, 1967, 1977, 1983, 1990, 1993, 1994, 1996, 1997, 2003, 2007, 2008, 2010, 2011, 2013, 2016
              {"\n"}{"\n"}
              <Image
                    source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Carling.png/20px-Carling.png'}}
                    style={{width: 20,
                    height: 20,}}/>
              Puchar Ligi: 1992, 2006, 2009, 2010, 2017
              </Text>
          </ScrollView>
          <Image
                    source={{uri: 'https://m0.joe.co.uk/wp-content/uploads/2016/08/24135102/manutd.png'}}
                    style={{width: 150,
                    height: 150,}}/>
        </View>
      </View>
    )
  }
}