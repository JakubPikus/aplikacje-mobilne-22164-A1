import React, { Component } from 'react';
import {View, Image, Text, ScrollView, } from 'react-native';
import styles from './styles';
import { Card } from 'react-native-elements'




export default class ScrollViewv1Comp extends Component {

  render(){
    return (
      <View>
        <Card>
          <Card.Title>Mariusz Pudzianowski - najsilniejszy człowiek Polski</Card.Title>
            <Card.Divider/>
              <View>
                <Image
                  source={{uri: 'https://i.ibb.co/b28QjL0/6.jpg'}}
                  style={{width: 240,
                  height: 176, 
                  left:50,}}/>
                  
                  <ScrollView style={{top:10, height:300, alignContent:'center',
                    flexDirection: 'column', }}>
                    <Text>
                    W zawodach Strongman zadebiutował 1 maja 1999 podczas konkursu w Płocku. Jest zrzeszony w światowej federacji siłaczy WSMC (The World Strongman Cup Federation).
                    Wraz z Jarosławem Dymkiem, na Drużynowych Mistrzostwach Świata Par Strongman 1999, zdobył reprezentując Polskę pierwszy w historii kraju medal w sporcie Strongman. Jest pierwszym i dotychczas jedynym Polakiem, który zdobył tytuł Najsilniejszego Człowieka Świata i pierwszym spoza USA i Europy Zachodniej, który zdobył ten tytuł.
                    W czasie pobytu w zakładzie karnym nie brał udziału w zawodach, m.in. nie mógł uczestniczyć w Mistrzostwach Europy Strongman 2001, Mistrzostwach Świata Strongman 2001 i Drużynowych Mistrzostwach Świata Par Strongman 2001.
                    Został Mistrzem Super Serii w sezonach 2003/2004, 2005, 2006 i 2007.
                    Wziął udział trzykrotnie w zawodach siłaczy Arnold Strongman Classic, rozgrywanych w Columbus (USA), w latach 2003, 2004 i 2006.
                    Od 2005 organizuje własny cykl dorocznych zawodów siłaczy zwanych Pojedynkiem Gigantów. Zawody rozgrywane są na początku roku w Łodzi.
                    Z powodu kontuzji (naderwanie bicepsu) nie mógł wziąć udziału w Mistrzostwach Polski Strongman 2005 i Mistrzostwach Europy Strongman 2005.
                    14 września 2008 na Mistrzostwach Świata Strongman 2008, pomimo kontuzji, zdobył kolejny tytuł Mistrza Świata Strongman i tym samym stał się pierwszym zawodnikiem posiadającym pięć tytułów Najsilniejszego Człowieka Świata.
                    Największym rywalem Pudzianowskiego na światowych arenach był Litwin, Žydrūnas Savickas, natomiast w obrębie własnej federacji Amerykanin, Derek Poundstone. Od połowy 2006 Pudzianowski nie dążył do pojedynku z Savickasem, a pierwsza sportowa konfrontacja nastąpiła na Mistrzostwach Świata Strongman 2009.
                    28 lutego 2009, podczas Piątego Pojedynku Gigantów, doznał zerwania bicepsu i w wyniku tej kontuzji został na kilka miesięcy wyłączony z zawodów.
                    </Text>
                  </ScrollView>
              </View>
        </Card>
      </View>
    )
  }
}