import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function PokemonNumber({ data }) {
  return (
    <View>
      <View>
        <Text style={styles.item}>#{data}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    textAlign: "center",
    justifyContent: "center",
    fontSize: 15,
  },
});
