import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import PokemonNumber from "./pokemonNumber";

export default function PokemonImage({
  data,
  width = 70,
  height = 60,
  backgroundColor = null,
  id,
}) {
  const stylesWrapperImage = backgroundColor
    ? { backgroundColor: backgroundColor }
    : {};
  return (
    <View
      style={{
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Image
        style={{
          ...styles.img,
          width: width,
          height: height,
          ...stylesWrapperImage,
        }}
        source={{ uri: `${data}` }}
      />
      {id && (
        <View styl={{ position: "absolute", top: 0, left: 0 }}>
          <PokemonNumber data={id} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    // alignItems: "center",
    // justifyContent: "center",
  },
});
