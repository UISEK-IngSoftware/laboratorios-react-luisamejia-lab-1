import "./PokemonCard.css";
import { Card, CardActions, CardMedia, CardContent, Typography, Button } from "@mui/material";

export default function PokemonCard({ pokemon }) {
  return (
    <Card> 
      <CardMedia  
        component="img"
        image={pokemon.image}
        alt={pokemon.name}
        height={200}
      />
      <CardContent>
        <Typography variant="h6" component="div">
          {pokemon.name}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {pokemon.type}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          Ver Mas
        </Button>
      </CardActions>
    </Card>
  );
}