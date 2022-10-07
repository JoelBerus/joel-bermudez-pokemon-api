import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function PokemonWeight({data}) {
    
    return (
        <View style={styles.container} >
            
                <Text style={styles.item} >{`${data} KG`}</Text>
            
        </View> 
    )
}

const styles = StyleSheet.create({
    item: {
        textAlign: 'center',
        justifyContent:'center',
        fontSize: 15,
    },
    container:{
        paddingTop: '5%',
    paddingBottom: '5%',
    }
})