import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export function SettingsScreen ({route, navigation}){
    
    function handleHomePress(){
        navigation.navigate("Home")
    }

    return (
        <View style={styles.container}>
            <Text>Settings Screen</Text>
            <Button 
            title="Go to Home"
            onPress={handleHomePress}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E8D6C8',
      alignItems: 'center',
      justifyContent: 'center',
    },
});