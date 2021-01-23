import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function About() {
  return (
    <View style={styles.container}>
      <Text style={{color: 'black', fontSize: 40,}} >About page</Text>      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    fontSize: 70,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default About;