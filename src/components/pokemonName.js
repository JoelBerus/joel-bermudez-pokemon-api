import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function PokemonName({ data }) {
  return (
    <View>
      <View>
        <Text style={styles.item}>{data}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    textAlign: "center",
    fontSize: 18,
  },
});
