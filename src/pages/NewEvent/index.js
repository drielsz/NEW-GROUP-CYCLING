import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import { Container } from './styles';

function NewEvent() {
  return(
    <View style={styles.container}>
      <Text allowFontScaling={false} style={styles.text}>NewEvent</Text>
    </View>
  )
}


const styles= StyleSheet.create({
  container:{
    backgroundColor: '#FAFAFA',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text:{
    fontSize: 25,
    fontWeight: 'bold'
  }
});

export default NewEvent;