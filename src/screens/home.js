import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Button,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from "react-native";
import getPokemons, { getPagePokemons } from "../actions/index";
import { connect } from "react-redux";
import { CONSTANTS } from "../utils";

import PokemonItem from "../components/pokemonItem";
import { TouchableOpacity } from "react-native-gesture-handler";

const Home = ({ pokemons, getPokemons, getPagePokemons }) => {
  useEffect(() => {
    getPokemons();
  }, []);

  const [text, onChangeText] = React.useState("");

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          {pokemons.loading ? (
            <Text>Loading...</Text>
          ) : (
            <View style={styles.second}>
              <PokemonItem values={pokemons.pokemonList} />
              <View style={styles.footer_buttons}>
                {pokemons.prevPage && (
                  <View style={styles.button_container}>
                    <Button
                      color={"#003c8f"}
                      title="Previus"
                      onPress={() => getPagePokemons(CONSTANTS.PREV)}
                    ></Button>
                  </View>
                )}
                <View style={styles.button_container}>
                  <Button
                    color={"#003c8f"}
                    title="Next"
                    onPress={() => getPagePokemons(CONSTANTS.NEXT)}
                  ></Button>
                </View>
              </View>
            </View>
          )}
          <StatusBar style="auto" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#e3f2fd",
  },
  second: {
    alignItems: "center",
    justifyContent: "center",
  },
  footer_buttons: {
    paddingBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button_container: {
    width: "20%",
    alignItems: "center",
    justifyContent: "center",
  },
});

const mapStateToProps = state => {
  return {
    pokemons: state.pokemons,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPagePokemons: type => dispatch(getPagePokemons(type)),
    getPokemons: () => dispatch(getPokemons()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
