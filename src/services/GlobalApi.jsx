import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = process.env.API_KEY
// the trending videos of movies 
// https://api.themoviedb.org/3/trending/all/day?api_key=27ba81ba8ba427ba9bdac05eb30d2e26
const TrendingMovies = axios.get(BASE_URL+'/trending/all/day?api_key='+API_KEY)

export default {
    TrendingMovies
}
