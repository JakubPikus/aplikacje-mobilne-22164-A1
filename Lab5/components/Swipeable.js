import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './styles';
import Swipeable from 'react-native-swipeable';


class Swipe extends Component {


  state = {
    leftAction: false,
    toggle: false
  };

  render() {
    const {leftAction, toggle} = this.state;

    return (
      <Swipeable
        leftActionActivationDistance={100}
        leftContent={(
          <View>
            {leftAction ?
              <Text style={{ fontWeight: 'bold'}}>Puść!</Text> :
              <Text>Przeciągaj dalej!</Text>}
          </View>
        )}
        onLeftActionActivate={() => this.setState({leftAction: true})}
        onLeftActionDeactivate={() => this.setState({leftAction: false})}
        onLeftActionComplete={() => this.setState({toggle: !toggle})}
      >
        <Text>{"\n"}</Text>
        <View style={[{backgroundColor: toggle ? '#53008a' : '#1a1a1a', height: 50, borderRadius: 50, alignItems: 'center', justifyContent: 'center'}]}>
          <Text style={{color: 'white'}}>Przesuń mocno, aby zmienić kolor</Text>
        </View>
      </Swipeable>
    );
  }
}



export default class SwipeableComp extends Component{
  
  state = {
    currentSwipeable: null
  };

  handleScroll = () => {
    const {currentSwipeable} = this.state;

    if (currentSwipeable) {
      currentSwipeable.recenter();
    }
  };

  render() {
    const {currentSwipeable} = this.state;
    const itemProps = {
      onOpen: (event, gestureState, swipeable) => {
        if (currentSwipeable && currentSwipeable !== swipeable) {
          currentSwipeable.recenter();
        }

        this.setState({currentSwipeable: swipeable});
      },
      onClose: () => this.setState({currentSwipeable: null})
    };

    return (
      <ScrollView>
        <ScrollView onScroll={this.handleScroll}>
          <Swipe {...itemProps}/>
        </ScrollView>
      </ScrollView>
    );
  }
}


