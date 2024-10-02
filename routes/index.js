var express = require('express');
const fetch = require('node-fetch');
var router = express.Router();

const apiKey = process.env.TMDB_API_KEY;

router.get('/movies', (req, res) => {

			fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`)
				.then(response => response.json())
				.then(apiData => {
					console.log(apiData);
					res.json({ movies: apiData.results})
                })
            });
  
module.exports = router;
