import React from 'react';
import { StyleSheet, Text, View, Button , TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function Home(props) {
  return (
    <View style={styles.container}>
      <Text style={{color: 'black', fontSize: 40,}}>Home page</Text>
      <Button onPress={() => {props.navigation.navigate('About')} }  title='Go to About' />     
       
      <TouchableOpacity onPress={() => {props.navigation.navigate('Camera')} } style={{ marginTop: 20,borderWidth: 1 , borderColor: 'black', width: 110 , height: 30, backgroundColor: 'grey' , alignItems: 'center', }} >
      <Text style={{textAlign: 'center' , color: 'white' , fontWeight: 'bold'}}>Open Camera</Text>
      </TouchableOpacity>
       
      <TouchableOpacity onPress={()=>{props.navigation.navigate('Map')}} style={{ marginTop: 20,borderWidth: 1 , borderColor: 'black', width: 110 , height: 30, backgroundColor: 'lightgreen' , alignItems: 'center', }} >
      <Text style={{textAlign: 'center' , color: 'white' , fontWeight: 'bold'}}>Open Map</Text>
      </TouchableOpacity>
       
      <TouchableOpacity onPress={()=>{props.navigation.navigate('Gallery')}} style={{ marginTop: 20,borderWidth: 1 , borderColor: 'black', width: 110 , height: 30, backgroundColor: 'lightpink' , alignItems: 'center', }} >
      <Text style={{textAlign: 'center' , color: 'white' , fontWeight: 'bold'}}>Open Gallery</Text>
      </TouchableOpacity>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home