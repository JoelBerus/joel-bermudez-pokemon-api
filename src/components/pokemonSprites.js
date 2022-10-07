import React from "react";
import { StyleSheet, View, Image } from "react-native";

export default function PokemonSprites({ data }) {
  const images = [
    data.back_default,
    data.back_shiny,
    data.front_default,
    data.front_shiny,
  ];
  return (
    <View style={styles.container}>
      {images.map((res, index) => (
        <View style={styles.circle} key={index}>
          <Image style={styles.img} source={{ uri: `${res}` }} />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 80,
    height: 60,
    alignItems: "center",
  },
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    justifyContent: "center",
    alignContent: "center",
    paddingTop: "5%",
    paddingBottom: "5%",
  },
  circle: {
    height: 70,
    width: 70,
    backgroundColor: "#b3e5fc",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 5,
  },
});
