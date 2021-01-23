import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, Platform } from 'react-native';
import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';

export default function mapApp() {
    
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location.coords);
    })();
  }, []);

  return (

  <View style={styles.container}>
    <MapView initialRegion={{
      latitude: 24.9218868,
      longitude: 67.1336286,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }} style={styles.map} >
      <Marker coordinate={{
        latitude: location ?  location.latitude : 24.9218868 ,
        longitude: location ?  location.longitude : 67.1336286 
      }} />
    </MapView>

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
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});