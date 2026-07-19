import { AppBar, Container, Toolbar } from "@mui/material";
import pokemonLogo from "../assets/pokemon.png";
import "./header.css";

export default function Header() { 
    return (
        <header className="header">
            <Container>
                <AppBar position="static">
                    <Toolbar>
                       <div className="image-container">
                            <img src={pokemonLogo} alt="Pokemon Logo" height={100} />
                        </div>
                    </Toolbar>
                </AppBar>
            </Container>
        </header>
    ); 
}   