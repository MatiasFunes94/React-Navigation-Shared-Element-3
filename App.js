import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Navigator from './src/Navigator';

const App = () => {
  return (
    <View style={styles.container}>
      <Navigator />
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})

