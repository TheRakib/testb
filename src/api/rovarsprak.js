const express = require('express');
const axios = require('axios');
const router = express.Router();
const helper = require('../helper');

router.get('/', (req, res) => {
  // make request to JOKER API to get data
  res.json({
    message:
      'Make a POST request inside text filds then it will translate text into rovarsprak',
  });
});

router.post('/', (req, res) => {
  const options = {
    method: 'GET',
    url: 'https://v2.jokeapi.dev/joke/Any?type=single',
  };

  axios
    .request(options)
    .then(function (response) {
      const joke = response.data.joke;
      const message = req.body.text === undefined ? '' : helper.decode(req.body.text);
      res.json({
        text: `${message}`,
        joke_of_the_day: req.body.joke === true ? `${joke}` : '',
      });
    })
    .catch(function (error) {
      console.error(error);
    });
});

module.exports = router;
