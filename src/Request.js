const  API_KEY="2781ec03245c7aec3bcf29d72eb86461";

const requests={
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`, 
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
     fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
     fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
     fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
     fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
     fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`
}
export default requests;