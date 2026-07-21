import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import "./PokemonList.css";
import PokemonCard from "../components/PokemonCard.jsx";
import { getPokemonList } from "../services/pokemonService.js";

export default function PokemonList() {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        getPokemonList().then((pokemonsdata) => {
            setPokemons(pokemonsdata);
        }).catch((error) => {
            console.error("Error obteniendo lista pokemons:", error);
        });
    }, []);

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
