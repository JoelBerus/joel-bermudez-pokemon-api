import React from "react";
import { StyleSheet, View } from "react-native";
import PokemonCard from "./pokemonCard";

export default function PokemonItem(props) {
  return (
    <View style={styles.container}>
      {props.values.map((res, index) => (
        <PokemonCard
          key={index}
          id={res.id}
          name={res.name}
          image={res.sprites}
          types={res.types}
          moves={res.moves}
          weight={res.weight}
        />
      ))}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    justifyContent: "center",
    alignContent: "center",
  },
  item: {
    padding: 10,
    flexWrap: "wrap",
    alignContent: "center",
  },
});
