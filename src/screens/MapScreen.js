import React from 'react';
import { SafeAreaView } from 'react-navigation';
import { Text, StyleSheet } from 'react-native';

const MapScreen = ({ navigation }) => {
    return (
        <SafeAreaView forceInset={{ top: 'always'}}>
            <Text style={{ fontSize: 50 }}>Map Screen</Text>            
        </SafeAreaView>
    )
}

export default MapScreen;