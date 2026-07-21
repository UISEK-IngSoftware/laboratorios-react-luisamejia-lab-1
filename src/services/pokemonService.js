import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

//te falto este bloque:
apiClient.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// en donde pones /pokemons/ estaba mal escrito
export const getPokemonList = async () => {
    try {
        const response = await apiClient.get("/pokemons/");
        return response.data;
    } catch (error) {
        console.error("Error obteniendo lista pokemons:", error);
        throw error;
    }
}
