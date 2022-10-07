import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import PokemonImage from "./pokemonImage";
import PokemonName from "./pokemonName";
import PokemonNumber from "./pokemonNumber";
import { useNavigation } from "@react-navigation/native";

export default function PokemonCard({ id, name, image, types, moves, weight }) {
  const navigation = useNavigation();
  const pokemonName = name.replace(/\w\S*/g, w =>
    w.replace(/^\w/, c => c.toUpperCase())
  );

  return (
    <View style={styles.card}>
      <TouchableOpacity
        style={styles.cardContent}
        onPress={() =>
          navigation.navigate("Detail", {
            id: id,
            name: pokemonName,
            img: image,
            types: types,
            moves: moves,
            weight: weight,
          })
        }
      >
        <PokemonImage data={image.front_default} />
        <PokemonNumber data={id} />
        <PokemonName data={pokemonName} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    elevation: 3,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.5,
    shadowRadius: 2,
    marginHorizontal: "1%",
    marginVertical: "1%",
    width: "48%",
    backgroundColor: "#bbdefb",
  },
  cardContent: {
    alignContent: "center",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: 20,
  },
});
