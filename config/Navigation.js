import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Components/Home';
import About from '../Components/About';
import cameraApp from '../Components/Camera';
import mapApp from '../Components/Map';
import galleryApp from '../Components/Gallery';


const Stack = createStackNavigator();

function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{
                    title: 'MY HOME PAGE',
                    headerStyle: {
                        backgroundColor: 'red',
                    },
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 40,
                    },
                }} name="Home" component={Home} />
                <Stack.Screen options={{
                    title: 'MY About PAGE',
                    headerStyle: {
                        backgroundColor: 'blue',
                    },
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 30,
                    },
                }} name="About" component={About} />

                <Stack.Screen name="Camera" component={cameraApp} />
                <Stack.Screen name="Map" component={mapApp} />
                <Stack.Screen name="Gallery" component={galleryApp} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;