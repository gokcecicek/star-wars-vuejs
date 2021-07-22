import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: "https://swapi.dev/api/",
});

export const swapi = {
    getStarships: () => axiosInstance.get("/starships/"),
    getStarshipById: (starshipId) => axiosInstance.get(`/starships/${starshipId}`)
}