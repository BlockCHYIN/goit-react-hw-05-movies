import axios from "axios";

const key = '04f04bc22a38496cedb77ffb55edd218';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const t = 5;

export const fetchSearchMovie = async search => {
    const response = await axios.get(
        `search/movie?api_key=${key}&language=en-US&include_adult=false&query=${search}`
    );
    return response.data;
};

export const fetchTrendingMovie = async () => {
    const response = await axios.get(`trending/movie/day?api_key=${key}`);
    return response.data;
};

export const fetchMovieDetails = async movieId => {
    const response = await axios.get(
        `movie/${movieId}?api_key=${key}&language=en-US`
    );
    return response.data;
};

export const fetchMovieCredits = async movieId => {
    const response = await axios.get(
        `movie/${movieId}/credits?api_key=${key}&language=en-US`
    );
    return response.data;
};

export const fetchMovieReviews = async movieId => {
    const response = await axios.get(
        `movie/${movieId}/reviews?api_key=${key}&language=en_US`
    );
    return response.data;
};

