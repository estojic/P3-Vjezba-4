import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export function HomeScreen ({route, navigation}){
    
    function handleMoviePress(){
        navigation.navigate("Movies")
    }

    return(

        <View style={styles.container}>
            <Text>Hello, would you like to rate a movie?</Text>
            <Button 
            title="Go"
            onPress={handleMoviePress}
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
