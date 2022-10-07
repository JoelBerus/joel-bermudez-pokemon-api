import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function PokemonMovement({data}) {
    
    return (
        <View style={styles.container} >
           
                {data.filter((res, index) => index <5 ).map((res,index )=>
                     <View key={index} style={styles.card} >
                <Text  style={styles.item} >{res.move.name}</Text>
                </View>
                )
                    }
            
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
      width: "30%",
      height:'18%',
      backgroundColor: "#bbdefb",
      alignItems:'center',
      display: 'flex',
      justifyContent:'center'
      

      
    
      
    },
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
       marginBottom: '15%',   
       marginTop:'5%',      
       justifyContent: "center",
       alignItems:'center',
       
       
    },
    item: {
        
    }

  });
  