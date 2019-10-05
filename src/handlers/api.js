import axios from 'axios';

export default class MovieAPI {
    constructor() {
        this.baseURL = 'https://api.themoviedb.org/3/';
        this.apiKey = '488bca8d82d3a3bcf62806a18763ac9f';
    }

    async searchMovies(query) {
        let result;
        await axios.get(`${this.baseURL}search/movie?api_key=${this.apiKey}&query=${query}`)
            .then(res => {
                result = res.data.results;
            }).catch(error => {
                console.log('error searching movies');
            });
        return result;
    }
    async getMovie(movieID) {
        let result;
        await axios.get(`${this.baseURL}movie/${movieID}?api_key=${this.apiKey}`)
        .then(res => {
            result = res.data;
        });
        return result;
    }
}