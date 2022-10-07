import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function PokemonType({ data }) {


    return (
        <View style={styles.container}>
            {data.map((res, index) =>
                <View key={index} style={styles.card} >
                    <Text  style={styles.item} >{res.type.name}</Text>
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
      borderRadius: 6,
      elevation: 1,
      shadowOffset: { width: 1, height: 1 },
      shadowColor: "#333",
      shadowOpacity: 0.5,
      shadowRadius: 1,
      marginHorizontal: "1%",
      marginVertical: "1%",
     width: '20%',
     height: 20,
      backgroundColor: "#bbdefb",
      alignItems:'center',
      display: 'flex',
      justifyContent: 'center'
      

      
    
      
    },
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
        paddingTop: "5%",
        paddingBottom:'5%',
        alignItems:'center',
       justifyContent: "center",
       
    },
    item: {
       height: 'auto',
    }

  });
  