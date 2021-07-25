import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: "https://swapi.dev/api/",
});

export const swapi = {
    getStarships: (page) => axiosInstance.get(`/starships/?page=${page}`),
    getStarshipById: (starshipId) => axiosInstance.get(`/starships/${starshipId}`),
    getModel: (val) => axiosInstance.get(`/starships/?search=${val}`)
}