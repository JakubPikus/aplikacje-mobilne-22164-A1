import React, { Component, Suspense } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';


const LazyComp = React.lazy(() => import('./Load'))

export default class Lazy extends Component {
  render(){
    return (
      <View style={styles.lazyAlign}>
         
        <View style={styles.lazyText}>

            <Suspense fallback={<Text>Loading...</Text>}>
              <LazyComp length="100000"/>
            </Suspense>
        
        </View>
      </View>
  );
  }
}


