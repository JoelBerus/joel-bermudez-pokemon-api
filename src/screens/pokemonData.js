import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import PokemonImage from "../components/pokemonImage";
import PokemonMovement from "../components/pokemonMovement";
import PokemonName from "../components/pokemonName";
import PokemonSprites from "../components/pokemonSprites";
import PokemonType from "../components/pokemonTypes";
import PokemonWeight from "../components/pokemonWeight";

export default function PokemonData({ route, navigation }) {
  const { id, name, img, types, moves, weight } = route.params;

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <PokemonImage
            data={img.front_default}
            width={"100%"}
            height={400}
            backgroundColor="#b3e5fc"
            id={id}
          />
          <Text style={styles.text}>Types</Text>
          <PokemonType data={types} />
          <Text style={styles.text}>Weight</Text>
          <PokemonWeight data={weight} />
          <Text style={styles.text}>Sprites</Text>
          <PokemonSprites data={img} />
          <Text style={styles.text}>Movements</Text>
          <PokemonMovement data={moves} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    paddingLeft: "5%",
    fontWeight: "bold",
    fontSize: 15,
  },
});
