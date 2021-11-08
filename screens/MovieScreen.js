import React from 'react';
import { Button, StyleSheet, Text, View, Image } from 'react-native';

export function MovieScreen ({route, navigation}){
    return (
        <View style={styles.container}>
            <View style={styles.moviesList}>
                <Image
                style={styles.pic}
                source= {{
                uri: 'https://i.pinimg.com/564x/53/58/81/535881e220a3792a1640a2e66e6c79b4.jpg'
                }} 
                />
                
                <Text style={styles.text}>
                Little Women is a 2019 American coming-of-age period drama film written and directed 
                by Greta Gerwig. It is the seventh film adaptation of the 1868 novel of the same name by Louisa May Alcott. 
                </Text>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E8D6C8',
      justifyContent: 'flex-start',
    },
    moviesList: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        padding: 5,
    },
    pic: {
        flex: 1,
        width: 70,
        height: 180,
        margin: 15,
      },

    text:{
        flex: 2,
        height: 180,
        padding: 15,
    }
});
