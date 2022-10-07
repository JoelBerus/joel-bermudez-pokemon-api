import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/home";
import PokemonData from "./src/screens/pokemonData";


const HomeStackNavigator = createNativeStackNavigator();

const Stack= () => {


    
    return(
        <HomeStackNavigator.Navigator
        initialRouteName="Pokemons"
        screenOptions={{ headerTitleAlign: 'center'}}
        
            
        >
            <HomeStackNavigator.Screen 
                name="Pokemons"
                component={Home} 
                options={{headerStyle:{ backgroundColor: '#1565c0'}, headerTitleStyle: {color: 'white'}}}
                
                
             
            />
            <HomeStackNavigator.Screen 
                name="Detail"
                component={PokemonData}
                options={({ route, navigation }) => ({
                    title: route.params.name,
                    headerStyle:{ backgroundColor: '#1565c0'}, headerTitleStyle: {color: 'white'}
                  })}
                  
            />


        </HomeStackNavigator.Navigator>
    )
}

export default function Navigation(){

    return(
        <NavigationContainer
        
         >
            <Stack />
        </NavigationContainer>
    )
}