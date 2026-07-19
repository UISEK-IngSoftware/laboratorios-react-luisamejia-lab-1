import { Grid } from "@mui/material";
import "./PokemonList.css";
import { pokemons } from "../data/pokemons";
import PokemonCard from "../components/PokemonCard.jsx"; 

export default function PokemonList() {
    return ( 
        <Grid container spacing={2}> 

            {pokemons.map((pokemon) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={pokemon.id}>
                    <PokemonCard pokemon={pokemon} />
                </Grid>
            ))}
        </Grid>
    );
}