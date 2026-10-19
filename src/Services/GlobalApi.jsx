import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const apiKey = "afa4533c79c1cce418a91beed28f08a0";
//https://api.themoviedb.org/3/trending/all/day?api_key=afa4533c79c1cce418a91beed28f08a0
const getTrendingMovies = axios.get(this.movieBaseUrl + "/trending/all/day?api_key=" + this.apiKey);


export default {
    getTrendingMovies
}