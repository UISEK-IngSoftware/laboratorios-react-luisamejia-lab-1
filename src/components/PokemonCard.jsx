import "./PokemonCard.css";
import { Card, CardActions, CardMedia, CardContent, Typography, Button } from "@mui/material";

export default function PokemonCard({ pokemon }) {
  const mediaUrl = import.meta.env.VITE_MEDIA_URL;
  pokemon.image = mediaUrl + pokemon.picture;
  return (
    <Card> 
      <CardMedia  
        component="img"
        image={`${mediaUrl}/${pokemon.picture}`}
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